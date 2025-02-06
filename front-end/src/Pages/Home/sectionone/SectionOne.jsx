import bgImage from "../../../assets/pages/home/section-one-bg.png";
import imgOne from "../../../assets/pages/home/section-one-first.png";
import imgTwo from "../../../assets/pages/home/section-one-second.png";
import imgThree from "../../../assets/pages/home/section-one-third.png";

import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleNavigateRegisterbusiness = () => {
    navigate("/business-reg");
  };

  const handleNavigateRegistercustomer = () => {
    navigate("/customer-reg");
  };



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
          Welcome To
        </h1>

        <h3 className="text-6xl md:text-[120px] font-bold text-[#FFBF00] mb-4 shadow-md">
          GAS BY GAS
        </h3>

        <p className="text-lg md:text-xl mb-6 shadow-md text-[#004AB0] font-semibold bg-white px-4 py-2 rounded-md">
          Reliable gas delivery, right on time because your comfort is our priority
        </p>

        <p className="text-1xl font-medium mb-6 shadow-md text-center mt-5 text-[#FFBF00]">
          Gas by Gas is a trusted LP gas provider, committed to delivering
          high-quality gas efficiently and safely,
          <br />
          ensuring reliable energy solutions for homes and businesses.
        </p>

        <div className="w-[700px] flex justify-between p-4 rounded-md shadow-lg">
          <div
            className="w-[210px] h-[210px] rounded-md relative overflow-hidden transition-transform duration-300 hover:scale-105 border border-white hover:border-yellow-500 group"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgOne})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px", // Matches the `rounded-md` class
            }}
            onClick={handleNavigateRegistercustomer}
          >
            <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center font-bold transition-colors duration-300 group-hover:text-[#FFBF00]">
              Register as a Customer
            </h1>
          </div>

          <div
            className="w-[210px] h-[210px] rounded-md relative overflow-hidden transition-transform duration-300 hover:scale-105 border border-white hover:border-yellow-500 group"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgTwo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px", // Matches the `rounded-md` class
            }}
            onClick={handleNavigateRegisterbusiness}
          >
            <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center font-bold transition-colors duration-300 group-hover:text-[#FFBF00]">
              Register as a Business
            </h1>
          </div>

          <div
            className="w-[210px] h-[210px] rounded-md relative overflow-hidden transition-transform duration-300 hover:scale-105 border border-white hover:border-yellow-500 group"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgThree})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px", // Matches the `rounded-md` class
            }}
            onClick={handleNavigateLogin}
          >
            <h1
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-center font-bold transition-colors duration-300 group-hover:text-[#FFBF00]"
            >
              Login to the System
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
