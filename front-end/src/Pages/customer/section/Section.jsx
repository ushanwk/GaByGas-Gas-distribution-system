import bgImage from "../../../assets/pages/customer-page/customer-bg-img.png";
import SelectBox from "../select-box/SelectBox.jsx";


const SectionOne = () => {
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

      {/* Main Content */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full">
        <h1 className="md:text-7xl font-light mb-2 shadow-md">
          Get a gas to your Doorstep
        </h1>

        <div className="flex items-center justify-center gap-10 mt-24">

          <div className="flex items-center justify-center gap-4">
            <h1>Select outlet</h1>
            <SelectBox />
          </div>

          <button className="bg-[#FFBF00] px-8 py-2 rounded-md hover:bg-yellow-400 transition-colors h-10">
            Request a gas
          </button>

        </div>

      </div>
    </section>
  );
};

export default SectionOne;
