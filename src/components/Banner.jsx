import React from "react";

const updates = [
  "CBN LICENSED MORTGAGE BANK",
  "20+ YEARS OF MORTGAGE EXPERTISE",
  "HOME PURCHASE FINANCING",
  "CONSTRUCTION FINANCE SOLUTIONS",
  "DIGITAL BANKING PLATFORM",
  "PROPERTY DEVELOPMENT SUPPORT",
  "MORTGAGE ADVISORY SERVICES",
  "COMPETITIVE INTEREST RATES",
  "HOME EQUITY FINANCING",
  "FLEXIBLE REPAYMENT PLANS",
  "CUSTOMER CARE • +234 XXX XXX XXXX",
];

const Banner = () => {
  return (
    <section className="relative border-y border-white/10 bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/10 via-transparent to-red-700/10" />

      <div className="relative flex items-center overflow-hidden">
        <div className="hidden md:flex items-center justify-center px-8 py-4 border-r border-white/10 shrink-0">
          <span className="text-[11px] font-bold tracking-[0.35em] text-red-500 uppercase">
            Latest Updates
          </span>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap flex-1">
          <div className="flex min-w-full animate-[ticker_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...updates, ...updates].map((item, index) => (
              <div
                key={index}
                className="flex items-center shrink-0"
              >
                <span className="px-8 text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase">
                  {item}
                </span>

                <span className="h-1 w-1 rounded-full bg-red-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-0%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;