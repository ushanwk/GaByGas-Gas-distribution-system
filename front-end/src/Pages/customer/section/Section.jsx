import React from "react";
import bgImage from "../../../assets/pages/customer-page/customer-bg-img.png";

const SectionOne = () => {
  return (
    <section
      id="section_1"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main Content */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full mt-28">
        <h1 className="text-4xl md:text-5xl font-light mb-2 shadow-md">
          Welcome to Gas By Gas
        </h1>

        

      </div>
    </section>
  );
};

export default SectionOne;
