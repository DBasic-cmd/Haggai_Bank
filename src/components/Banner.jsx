import React from "react";

const stats = [
  {
    value: "8710+",
    label: "Clients Served",
  },
  {
    value: "12",
    label: "Industry Awards",
  },
  {
    value: "20+",
    label: "Years of Operation",
  },
  {
    value: "100%",
    label: "CBN & NDIC Regulated",
  },
];

const Banner = () => {
  return (
    <div
      id="banner"
      className="relative bg-red-700 text-white py-14 px-6 sm:px-12 lg:px-24 xl:px-40"
    >
      {/* subtle top/bottom highlight lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative flex-1 text-center md:text-left group"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 blur-xl" />

            <h6 className="text-2xl sm:text-3xl font-light tracking-tight relative">
              {item.value}
            </h6>

            <p className="text-white/70 text-sm sm:text-base mt-2 relative">
              {item.label}
            </p>

            {/* vertical divider (desktop only) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;