import logo from "../../../assets/logo/bar-logo.png"
import loginImage from "../../../assets/pages/register-Page/Customer/MaskGroup.png"
import  { useState } from "react";
import ButtonComponent from "../../../common/components/button/Button";
import CusIcon from "../../../assets/pages/register-page/cusIcon.jpg";
import BusIcon from "../../../assets/pages/register-page/BusIcon.png";
import ImgButtonComponent from "../Components/ImgButton";
import InputField from "../../../common/components/input-field/InputField";


function CustomerRegister() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClick = (event) => {
    event.preventDefault(); 
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex flex-row h-screen">
        <div className="flex flex-col gap-y-40 basis-1/2 p-20 pl-44" style={{ backgroundColor: "#FFFBEE" }}>

        <div>
        <div>
            <img src={logo} alt="logo" className="w-60"></img>
            </div>
        </div>


        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
           <div className="bg-blue-800 w-10 h-0.5"></div>
            <p className="text-blue-800 font-semibold">Customer Register Form</p>
          </div> 

          <div>
          <h2 className="font-bold text-3xl">Sign up for hassle-free gas delivery!</h2>
          <p className="font-semibold opacity-40">Fill the form to access the portal</p>
        </div> 

        

        <div className="pt-10">
          <div>
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
          </div>

          <div>
            <ImgButtonComponent
            label="Business"
            src={BusIcon}
            alt="Customer Icon"
            onClick={onClick}
            customColor="white"
            customWidth="200px"
            customHeight="200px"
            />
          </div>
        </div>
        


        </div>
    

        </div>


        <div className="basis-1/2 w-full h-full">
           <img
            src={loginImage}
             alt="login"
             className="w-full h-full"
             />
        </div>

    </div>
  )
}

export default CustomerRegister