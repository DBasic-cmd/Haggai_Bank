import React from "react";
import { Link } from "react-router-dom";

const updates = [
  { text: "CBN LICENSED MORTGAGE BANK" },
  { text: "30+ YEARS OF MORTGAGE EXPERTISE" },
  { text: "HOME PURCHASE FINANCING" },
  { text: "CONSTRUCTION FINANCE SOLUTIONS" },
  {
    text: "CLICK HERE TO ACCESS OUR CORPORATE INTERNET BANKING SITE",
    href: "/products/internet-banking-and-mobile-application",
  },
  {
    text: "HAGGAI MORTGAGE BANK IS LICENSED BY THE CENTRAL BANK OF NIGERIA",
  },
  {
    text: "ALL DEPOSITS ARE FULLY INSURED BY NDIC",
  },
  {
    text: "HAGGAI FINANCIAL STATEMENTS NOW AVAILABLE. CLICK HERE TO VIEW",
    href: "/about/investor-relations",
  },
  {
    text: "CUSTOMER COMPLAINT FORM",
    href: "/about/customer-complaint-form",
  },
  {
    text: "E-DIVIDEND FORM",
    href: "/resources/downloads",
  },
  { text: "DIGITAL BANKING PLATFORM" },
  { text: "PROPERTY DEVELOPMENT SUPPORT" },
  { text: "MORTGAGE ADVISORY SERVICES" },
  { text: "COMPETITIVE INTEREST RATES" },
  { text: "HOME EQUITY FINANCING" },
  { text: "FLEXIBLE REPAYMENT PLANS" },
  { text: "CUSTOMER CARE • +234 814 477 2676" },
];

const Banner = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden border-y border-white/10 bg-[#111111]">
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/10 via-transparent to-red-700/10" />

      <div className="relative flex items-center overflow-hidden">
        <div className="hidden shrink-0 items-center justify-center border-r border-white/10 px-8 py-4 md:flex">
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-red-500">
            Latest Updates
          </span>
        </div>

        <div className="flex flex-1 overflow-hidden whitespace-nowrap">
          <div className="flex min-w-max animate-[ticker_45s_linear_infinite] hover:[animation-play-state:paused]">
            {[...updates, ...updates].map((item, index) => (
              <div key={`${item.text}-${index}`} className="flex shrink-0 items-center">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition duration-300 hover:text-red-500"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span className="px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                    {item.text}
                  </span>
                )}

                <span className="h-1 w-1 rounded-full bg-red-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes ticker {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;