import logo from "../../../assets/logo/bar-logo.png";
import loginImage from "../../../assets/pages/register-page/Customer/MaskGroup.png";
import { useState } from "react";
import axios from "axios"; // Import Axios
import ButtonComponent from "../../../common/components/button/Button";
import InputField from "../../../common/components/input-field/InputField.jsx";
import { useNavigate } from "react-router-dom";

function CustomerRegister() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        C_Name: "",
        NIC: "",
        Email: "",
        Tel_No: "",
        Password: "",
        confirmPassword: "",
        Role: "EndCustomer",
    });

    const [error, setError] = useState(""); // State for handling errors
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onClick = async (event) => {
        
        event.preventDefault();

    if (formData.Password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
    }

    setError(""); // Clear any previous errors

    // ✅ Correct way to send formData to /verify page
    navigate("/verify", { state: formData });

        // try {
        //     const response = await axios.post("http://localhost:8089/api/endCustomers", formData);
        //     console.log("Response:", response.data);
        //     setSuccessMessage("Registration successful!");
            
        //     // Clear form after successful registration
        //     setFormData({
        //         C_Name: "",
        //         NIC: "",
        //         Email: "",
        //         Tel_No: "",
        //         Password: "",
        //         confirmPassword: "",
        //         Role: "EndCustomer",
        //     });

        // } catch (error) {
        //     console.error("Error registering customer:", error.response?.data || error.message);
        //     setError(error.response?.data?.message || "An error occurred while registering.");
        // }
    };

    return (
        <div className="flex flex-row h-screen">
            <div className="flex flex-col gap-y-20 basis-1/2 p-20 pl-44" style={{ backgroundColor: "#FFFBEE" }}>
                <div>
                    <img src={logo} alt="logo" className="w-60" />
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

                    {error && <p className="text-red-600">{error}</p>} {/* Show error message */}
                    {successMessage && <p className="text-green-600">{successMessage}</p>} {/* Show success message */}

                    <div className="pt-5">
                        <InputField
                            label="Customer Name"
                            name="C_Name"
                            value={formData.C_Name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            type="text"
                            required
                            width="550px"
                        />

                        <InputField
                            label="NIC"
                            name="NIC"
                            value={formData.NIC}
                            onChange={handleChange}
                            placeholder="Enter your NIC"
                            type="text"
                            required
                            width="550px"
                        />

                        <InputField
                            label="E-Mail"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            type="email"
                            required
                            width="550px"
                        />

                        <InputField
                            label="Telephone"
                            name="Tel_No"
                            value={formData.Tel_No}
                            onChange={handleChange}
                            placeholder="Enter your Telephone number"
                            type="number"
                            required
                            width="550px"
                        />

                        <div className="flex mr-40">
                            <InputField
                                label="Password"
                                name="Password"
                                value={formData.Password}
                                onChange={handleChange}
                                placeholder="Enter your Password"
                                type="password"
                                required
                                width="250px"
                            />

                            <InputField
                                label="Confirm-Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Enter your Password Again"
                                type="password"
                                required
                                width="250px"
                            />
                        </div>

                        <div className="pt-10">
                            <ButtonComponent
                                label="Register"
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

            <div className="basis-1/2 w-full h-full">
                <img src={loginImage} alt="login" className="w-full h-full" />
            </div>
        </div>
    );
}

export default CustomerRegister;
