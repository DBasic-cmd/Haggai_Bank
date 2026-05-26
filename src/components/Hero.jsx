import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen items-center mx-auto px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-[#05070d]"
    >
      {/* Background Grid + Glow Layer */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Soft futuristic glow accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600 opacity-10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[120px]" />

      {/* TEXT SECTION */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-800 dark:text-white leading-tight">
          Welcome to Haggai Bank
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg sm:text-xl leading-relaxed max-w-xl">
          Haggai Mortgage Bank offers flexible mortgage plans, competitive
          interest rates, and fast disbursement to help Nigerians own their
          homes.
        </p>

        {/* CTA SECTION */}
        <div className="flex flex-wrap items-center gap-4 pt-10">
          <a
            href="#internet-banking"
            className="px-5 py-3 text-sm uppercase tracking-wider bg-red-700 text-white border border-red-700 transition-all duration-300 hover:bg-transparent hover:text-red-700"
          >
            Explore Mortgage Plans
          </a>

          <a
            href="#create-account"
            className="px-5 py-3 text-sm uppercase tracking-wider border border-red-700 text-red-700 dark:text-white dark:border-white transition-all duration-300 hover:bg-red-700 hover:text-white"
          >
            Calculate Your Mortgage
          </a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative z-10 flex justify-center md:justify-end">
        <div className="relative">
          {/* sharp frame border */}
          <div className="border border-gray-300 dark:border-gray-700 p-2">
            <img
              src={assets.hero_img}
              alt="Hero"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* subtle tech accent lines */}
          <div className="absolute -top-3 -right-3 w-16 h-16 border border-red-600" />
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-gray-400 dark:border-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Hero;