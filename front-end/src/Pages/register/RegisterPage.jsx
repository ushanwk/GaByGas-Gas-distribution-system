import logo from "../../assets/logo/bar-logo.png"
import loginImage from "../../assets/pages/register-page/MaskGroup.png"
import  { useState } from "react";
import ButtonComponent from "../../common/components/button/Button";
import CusIcon from "../../assets/pages/register-page/cusIcon.jpg";
import BusIcon from "../../assets/pages/register-page/BusIcon.png";
import ImgButtonComponent from "./Components/ImgButton";
import { useNavigate } from "react-router-dom";


function RegisterPage() {

  const navigate = useNavigate();

  const handleNavigateRegisterbusiness = () => {
    navigate("/business-reg");
  };

  const handleNavigateRegistercustomer = () => {
    navigate("/customer-reg");
  };

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
        <div className="flex flex-col gap-y-40 basis-2/3 p-20" style={{ backgroundColor: "#FFFBEE" }}>

        <div>
        <div>
            <img src={logo} alt="logo" className="w-60 ml-16"></img>
            </div>
        </div>


        <div className="flex flex-col gap-3 ml-36">
          <div className="flex flex-row gap-2 items-center">
           <div className="bg-blue-800 w-10 h-0.5"></div>
            <p className="text-blue-800 font-semibold">Register Form</p>
          </div> 

          <div>
          <h2 className="font-bold text-3xl">Sign up for hassle-free gas delivery!</h2>
          <p className="font-semibold opacity-40">Fill the form to access the portal</p>
        </div> 

        

        <div className="pt-10 flex gap-14">
          <div onClick={handleNavigateRegistercustomer}>
            <ImgButtonComponent
            label="Customer"
            src={CusIcon}
            alt="Customer Icon"
            onClick={onClick}
            customColor="white"
            customWidth="200px"
            customHeight="200px"
            />
          </div>

          <div onClick={handleNavigateRegisterbusiness}>
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


        <div className="relative flex-1 h-full">
           <img
            src={loginImage}
             alt="login"
             className="absolute right-0 bottom-0 h-full w-auto max-w-[35vw] object-cover"
             />
        </div>

    </div>
  )
}

export default RegisterPage