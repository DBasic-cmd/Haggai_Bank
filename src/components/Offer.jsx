import React from "react";


const Offer = () => {
  return (
    <div className="bg- dark:bg- p-20">
      <div className="max-w-6xl mx-auto space-y-4 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text text-center">
          Bank From Anywhere. Anytime.
        </h1>
        <p className=" text-gray-700 dark:text-gray-200 text-center">
          Access your account via our Personal or Corporate Internet Banking —
          or <br /> download the Haggai Mobile Banking app.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <button className="bg-white border border-gray-100 rounded-full text-gray-700 px-6 py-2 font-semibold  transition-colors duration-200">
            Personal Internet Banking
          </button>
          <button className="text-gray-700 rounded-full bg-white dark:border-0 border border-gray-100 px-6 py-2 font-semibold transition-colors duration-200">
            Corporate Internet Banking
          </button>
        </div>
        <div className="text-center justify-center">
          <button className="text-gray-700 rounded-full bg-white dark:border-0 border border-gray-100 px-6 py-2 font-semibold transition-colors duration-200">
            Mobile App
          </button>
        </div>

        

        <div className="flex items-center justify-center pt-7">
          <a
            href="#create-account"
            className="bg-red-700 text-sm rounded-lg  px-4 py-2   hover:text-white hover:bg-red-800 text-white transition-colors hidden md:inline-flex items-center gap-2"
          >
            Access Internet Banking
            {/* <img src={assets.arrow_icon} alt="" /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
