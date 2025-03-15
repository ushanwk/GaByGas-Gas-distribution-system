import { useEffect } from "react";
import bgImage from "../../../assets/pages/customer-page/customer-bg-img.png";
import SelectBox from "../select-box/SelectBox.jsx";
import axios from "axios";
import OutletSelectBox from "../select-box_2/OutletSelectBox.jsx";
import { CustomerTable } from "../Table/Table.jsx";
import React, { useState } from "react";  


const SectionOne = () => {

  const [selectedGasType, setSelectedGasType] = useState(""); 
  const [selectedOutlet, seUserIdtSelectedOutlet] = useState(""); 

  const handleGasTypeSelect = (value) => {
      setSelectedGasType(value);
      console.log("Selected Gas Type:", value);
  };

  const handleOutletSelect = (value) => {
    seUserIdtSelectedOutlet(value);
    console.log("Selected Outlet:", value);
  };

  const handleRequestGas = async () => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const qty = 1;


    const requestData = {
      GasType: selectedGasType,
      Outlet_Id: selectedOutlet,
      Username: username,
      UserId: userId,
      Amount: qty,
      GRO_Id:"001"
    };

    console.log("Request Data:", requestData);

    try {
      const response = await axios.post("http://localhost:8089/api/gasRequestOders", requestData);
      alert("Gas request submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting gas request:", error);
      const errorMessage = error.response?.data?.error || "An unknown error occurred";
  
      alert(errorMessage);
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("Stored User Data:", JSON.parse(storedUser));
    } else {
      console.log("No user found in local storage");
    }
  }, []);

  return (
    <section
      id="section_1"
      className="relative flex items-center justify-center h-screen bg-cover bg-center pb-44"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div>
      {/* Main Content */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full">
        <h1 className="md:text-7xl text-5xl font-bold mt-36 ml-2 shadow-md">
          Get a gas to your Doorstep
        </h1>

        <div className="flex items-center justify-center gap-10 mt-12">

          <div className="flex items-center font-bold justify-center gap-4">
            <h1>Select Gas Type</h1>
            <SelectBox onSelect={handleGasTypeSelect} />
            <h1>Select outlet</h1>
            <OutletSelectBox onSelect={handleOutletSelect} />
          </div>

          <button onClick={handleRequestGas} className="bg-[#FFBF00] px-8 py-2 font-bold  rounded-md hover:bg-yellow-400 transition-colors h-10">
            Request a gas
          </button>

        </div>

      </div>

        <div className="mt-28">
          <CustomerTable/>
        </div>

      </div>
    </section>
  );
};

export default SectionOne;
