import logo from "../../assets/logo/bar-logo.png";
import loginImage from "../../assets/pages/login-page/right-side-img.png";
import { useState } from "react";
import InputField from "../../common/components/input-field/InputField";
import ButtonComponent from "../../common/components/button/Button";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const demo = {
    email: "ABC",
    password: "1234"
  }

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClick = async(event) => {
    event.preventDefault();
    
    const userId = formData.email;

    try {
        const response = await axios.get(`http://localhost:8089/api/users/${userId}`);

        const demo = {
            email: response.data.Username,
            password: response.data.Password,
            role: response.data.Role
        };

        if (formData.email === demo.email && formData.password === demo.password) {
            localStorage.setItem("user", JSON.stringify(formData));

            toast.success("Login successful! Redirecting...", { autoClose: 2000 });

            setTimeout(() => {
                navigate("/customer");
            }, 2000);
        } else {
            toast.error("Incorrect username or password");
        }
    } catch (error) {
        toast.error("Incorrect uername or password");
    }
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-row h-screen w-dvw">
      {/* Left Panel */}
      <div
        className="flex flex-col gap-y-40 basis-2/3 p-20"
        style={{ backgroundColor: "#FFFBEE" }}
      >
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-60 ml-16" />
        </div>

        {/* Login Form */}
        <div className="flex flex-col gap-3 ml-36" style={{ width: "550px" }}>
          {/* Login Header */}
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-blue-800 w-10 h-0.5"></div>
            <p className="text-blue-800 font-semibold">Login Form</p>
          </div>

          {/* Welcome Message */}
          <div>
            <h2 className="font-bold text-3xl">
              Log in to keep your kitchen running
            </h2>
            <p className="font-semibold opacity-40">Login to access the portal</p>
          </div>

          {/* Email Input */}
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            required
            width="550px"
          />

          {/* Password Input */}
          <div className="flex flex-col justify-end items-end">
            <InputField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              required
              width="550px"
            />
            <p className="opacity-40">Forgot password?</p>
          </div>

          {/* Login Button */}
          <div>
            <ButtonComponent
              label="Login"
              onClick={onClick}
              customColor="#004AB0"
              customWidth="300px"
              customHeight="50px"
              size="large"
              variant="contained"
            />
          </div>

          {/* Register Link */}
          <div className="flex gap-1">
            <p className="opacity-40">Have not an account?</p>
            <p
              style={{ color: "#004AB0", cursor: "pointer" }}
              onClick={navigateRegister}
            >
              Register
            </p>
            <p className="opacity-40">Now.</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative flex-1 h-full">
        <img
        src={loginImage}
        alt="login"
        className=" absolute right-0 bottom-0 h-full w-auto max-w-[35vw] object-cover"
        style={{width:"50vw"}}
      />
</div>


    </div>
  );
}

export default LoginPage;
