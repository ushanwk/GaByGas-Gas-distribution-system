import logo from "../../../assets/logo/bar-logo.png"
import loginImage from "../../../assets/pages/register-page/Business/Maskgroup1.png"
import  { useState } from "react";
import ButtonComponent from "../../../common/components/button/Button";
import InputField from "../../../common/components/input-field/InputField.jsx";


function BusinessRegister() {

    const [formData, setFormData] = useState({
        name:"",
        nic:"",
        email: "",
        telephone: "",
        password:"",
        confirmPassword:"",
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
                        <p className="text-blue-800 font-semibold">Business Register Form</p>
                    </div>

                    <div>
                        <h2 className="font-bold text-3xl">Sign up for hassle-free gas delivery!</h2>
                        <p className="font-semibold opacity-40">Fill the form to access the portal</p>
                    </div>



                    <div className="pt-5">
                        <div>
                            <InputField
                                label="Business Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your Name"
                                type="Text"
                                required
                                width="550px"
                            />
                        </div>

                        <div>
                            <InputField
                                label="NIC"
                                name="nic"
                                value={formData.nic}
                                onChange={handleChange}
                                placeholder="Enter your NIC"
                                type="number"
                                required
                                width="550px"
                            />
                        </div>

                        <div>
                            <InputField
                                label="E-Mail"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your Email"
                                type="email"
                                required
                                width="550px"
                            />
                        </div>

                        <div>
                            <InputField
                                label="Telephone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="Enter your Telephone number"
                                type="number"
                                required
                                width="550px"
                            />
                        </div>

                        <div>
                            <div className="flex mr-40">
                                <InputField
                                    label="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your Password"
                                    type="password"
                                    required
                                    width="250px"
                                />

                                <div>
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
                            </div>

                            <div className="">
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

export default BusinessRegister