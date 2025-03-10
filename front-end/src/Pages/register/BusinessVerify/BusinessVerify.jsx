import logo from "../../../assets/logo/bar-logo.png"
import loginImage from "../../../assets/pages/register-page/Business/BusinessVerify.png"
import { useLocation } from "react-router-dom"; // Add this line
import { useEffect, useState } from "react";
import ButtonComponent from "../../../common/components/button/Button";
import InputField from "../../../common/components/input-field/InputField.jsx";
import axios from "axios"; 


function BusinessVerify() {

    const location = useLocation();
    const formDataFromRegister = location.state || {}; // Get passed data

    const [formData, setFormData] = useState({
        C_Name: formDataFromRegister.C_Name || "",
        NIC: formDataFromRegister.NIC || "",
        email: formDataFromRegister.Email || "",
        Email: formDataFromRegister.Tel_No || "",
        Password: formDataFromRegister.Password || "",
        Role: "End Customer",
        Tel_No:formDataFromRegister.Tel_No || "",
    });

    const [otp, setOtp] = useState(""); // Input field OTP
    const [serverOtp, setServerOtp] = useState(formDataFromRegister.otp || ""); // OTP from backend

    useEffect(() => {
        console.log("Received Data:", formData);
    }, [formData]);
   


    const handleChange = (event) => {
        const { name, value } = event.target;
        setOtp(value); // Update OTP state
    };

    const onClick = async (event) => {
        event.preventDefault(); 
        console.log("CHECK ,",serverOtp);
        console.log("dsd",otp);
        
             
        if (otp !== serverOtp) {
            alert("Invalid OTP! Please check and try again.");
            return;
        }
        console.log("OTP Verified Successfully!");

        // Call API to save form data after OTP verification
        try {
            const response = await axios.post("http://localhost:8089/api/endCustomers", formData);
            console.log("Registration Success:", response.data);
            alert("Registration Successful!");
            // Redirect or navigate to login/dashboard if needed
        } catch (error) {
            console.error("Error Registering:", error);
            alert("Registration Failed! Please try again.");
        }
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
                        <p className="text-blue-800 font-semibold">Business Register Form</p>
                    </div>

                    <div>
                        <h2 className="font-bold text-3xl">Sign up for hassle-free gas delivery!</h2>
                        <p className="font-semibold opacity-40">Fill the form to access the portal</p>
                    </div>



                    <div className="pt-5">
                        <div>
                        <InputField
                                label="Verify Email"
                                name="otp"
                                value={otp}
                                onChange={handleChange}
                                placeholder="Enter your OTP"
                                type="text"
                                required
                                width="550px"
                            />
                        </div>

                        <div>
                            <div className="">
                                <ButtonComponent
                                    label="Verify"
                                    onClick={onClick}
                                    customColor="#004AB0"
                                    customWidth="250px"
                                    customHeight="50px"
                                    size="large"
                                    variant="contained"
                                />
                            </div>
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

export default BusinessVerify