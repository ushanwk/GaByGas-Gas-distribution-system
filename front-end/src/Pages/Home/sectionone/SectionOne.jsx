import React from "react";
import bgImage from "../../../assets/pages/home/section-one-bg.png"

const SectionOne = () => {
  return (
    <section
      id="section_1"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0"></div> 
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-light mb-2 shadow-md">
          Welcome To
        </h1>

        <h3 className="text-6xl md:text-[120px] font-bold text-yellow-400 mb-4 shadow-md">
          CYPREA F&B
        </h3>

        <p className="text-lg md:text-xl mb-6 shadow-md text-[#004AB0] font-semibold bg-white">
        Reliable gas delivery, right on time because your comfort is our priority
        </p>


        <p className="text-1xl font-medium mb-6 shadow-md text-center mt-10">
        Gas by Gas is a trusted LP gas provider, committed to delivering high-quality gas efficiently and safely,
        <br />
        ensuring reliable energy solutions for homes and businesses.
        </p>


        <button className="bg-white text-black px-8 py-2 rounded-md hover:bg-yellow-400 transition-all mt-10">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
