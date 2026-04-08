import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2  mx-auto px-4 sm:px-12 lg:px-24 xl:px-40 py-20 gap-10 items-center"
    >
      <div className="basis-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-white leading-snug">
          Welcome to Haggai Bank
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg sm:text-xl">
          Haggai Mortgage Bank offers flexible mortgage plans, competitive
          interest rates, and fast disbursement to help Nigerians own their
          homes.
        </p>
        <div className="flex items-center sm:gap-4 gap-2 pt-10">
          <a
            href="#internet-banking"
            className=" bg-red-700 text-sm rounded-lg  px-4 py-2  hover:bg-red-700 hover:text-white text-white transition-colors hidden md:inline-flex items-center gap-2"
          >
            Explore Morthgage Plans
          </a>

          <a
            href="#create-account"
            className="border border-red-700 text-sm dark:bg-white dark:border-0 rounded-lg  px-4 py-2  hover:bg-red-700 hover:text-white text-red-700 transition-colors hidden md:inline-flex items-center gap-2"
          >
            Calculate Your Mortgage
          </a>
        </div>
      </div>

      <div className="basis-1/2">
        <img src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
