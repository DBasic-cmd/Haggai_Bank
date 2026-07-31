import React, { useState, useEffect, useRef } from "react";

const Feedback = () => {
  const features = [
    {
      title: "Flexible Payment",
      description:
        "Choose repayment plans that fit your income cycle and lifestyle.",
    },
    {
      title: "Quick Approval",
      description:
        "Get your loan approved in as little as 24 hours with our streamlined process.",
    },
    {
      title: "Low Interest Rates",
      description:
        "Enjoy competitive rates that save you money over the life of your loan.",
    },
    {
      title: "24/7 Support",
      description:
        "Access our dedicated support team anytime, anywhere for all your banking needs.",
    },
  ];

  const testimonials = [
    {
      content:
        "With Haggai Plot Advance, I was able to secure my land at Redemption City earlier than planned. The flexible repayment terms made the process smooth from start to finish.",
      name: "Adebayo Johnson",
      role: "HAPA Client",
    },
    {
      content:
        "Haggai House Completion helped me finish my home construction without financial stress. Their milestone-based funding made all the difference.",
      name: "Funmi Adeyemi",
      role: "HAHCOM Client",
    },
    {
      content:
        "Buying my first house in Lagos seemed impossible until I used Haggai House Purchase. Their competitive mortgage rates and expert guidance made it a reality.",
      name: "Chukwuemeka Nwosu",
      role: "HAHP Client",
    },
    {
      content:
        "We renovated our family estate using the HAREL plan. The team provided fast approval and excellent advisory, allowing us to upgrade the property value quickly.",
      name: "Victoria Harrison",
      role: "HAREL Client",
    },
    {
      content:
        "HARENT saved us from the stress of upfront annual rent. We paid quarterly while keeping our business cash flow stable. Highly recommended for young professionals!",
      name: "Olamide Benson",
      role: "HARENT Client",
    },
    {
      content:
        "Our church cooperative successfully acquired ten plots of land through the HAGPA scheme. Haggai's group package is perfect for organizations seeking joint property growth.",
      name: "Pastor David Oyedepo",
      role: "HAGPA Coordinator",
    },
    {
      content:
        "HAMCOF provided the structured capital we needed for our multi-flat residential project. Their inspectors verified milestones promptly, releasing funds without delays.",
      name: "Engr. Yusuf Bello",
      role: "Developer / HAMCOF Client",
    },
    {
      content:
        "Owning a home near the holy ground has been a lifelong dream. The Haggai Camp Home loan package made it affordable and spiritually rewarding for our family.",
      name: "Pastor (Mrs.) Grace Adebayo",
      role: "Camp Homeowner",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(handleNext, 6000);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <div className="w-full py-24 px-4 sm:px-8 lg:px-24 xl:px-40 bg-white dark:bg-[#05070d] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* SECTION TITLE */}
        <div className="space-y-5 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-tight">
            Why Customers
            <br />
            Choose Haggai
          </h1>

          <div className="w-24 h-[1px] bg-red-600" />

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Built on trust, speed, and financial clarity — designed for
            modern Nigerian homeownership and long-term financial confidence.
          </p>
        </div>

        {/* FEATURES SECTION */}
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
  {features.map((feature, index) => (
    <div key={index} className="relative group min-h-[300px] overflow-hidden">
      <div className="absolute inset-0 border border-gray-200 transition-all duration-500 group-hover:border-red-600/40 dark:border-gray-800" />

      <div className="absolute -top-5 -right-5 h-28 w-28 border border-red-600/30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-200 transition-all duration-500 group-hover:bg-red-600/30 dark:bg-gray-800" />

      <div className="absolute top-0 left-0 h-20 w-20 border-l border-t border-red-600/50 transition-all duration-500 group-hover:h-28 group-hover:w-28" />

      <div className="absolute inset-0 bg-red-600/[0.03] opacity-0 transition duration-700 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-10">
        <div>
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-red-600">
              Haggai Advantage
            </p>

            <span className="text-4xl font-thin text-red-600 opacity-30 transition duration-500 group-hover:opacity-100">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-3xl font-light leading-tight tracking-tight text-gray-900 dark:text-white">
            {feature.title}
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-[1px] w-10 bg-red-600" />
          <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Customer Experience
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* TESTIMONIAL HEADER */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
            Trusted by Nigerians
          </h2>

          <div className="w-20 h-[1px] bg-red-600" />

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Real stories from individuals and families empowered by Haggai
            Mortgage Bank.
          </p>
        </div>

        {/* TESTIMONIALS CAROUSEL (3-COLUMN FORMAT) */}
        <div className="relative w-full">
          {/* Arrow Buttons (Desktop) */}
          <div className="absolute top-1/2 -left-12 lg:-left-20 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={() => {
                handlePrev();
                resetAutoplay();
              }}
              className="p-4 rounded-full border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-red-600 hover:border-red-600 transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur shadow-lg active:scale-95"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -right-12 lg:-right-20 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={() => {
                handleNext();
                resetAutoplay();
              }}
              className="p-4 rounded-full border border-gray-200 dark:border-gray-800 text-gray-400 hover:text-red-600 hover:border-red-600 transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur shadow-lg active:scale-95"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Grid showing 3 cards at a time on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:pb-16">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (currentIndex + offset) % testimonials.length;
              const t = testimonials[itemIndex];
              return (
                <div
                  key={`${itemIndex}-${offset}`}
                  className={`relative group transition-all duration-500 ${
                    offset === 1 ? "md:translate-y-14" : ""
                  } ${offset > 0 ? "hidden md:block" : ""}`}
                >
                  {/* outer structure */}
                  <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:border-red-600/40" />

                  {/* top geometry */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 border border-gray-300 dark:border-gray-700 transition-all duration-700 group-hover:border-red-600 group-hover:rotate-6" />

                  {/* bottom geometry */}
                  <div className="absolute bottom-0 right-0 w-14 h-14 border-r border-b border-red-600/50 transition-all duration-700 group-hover:w-24 group-hover:h-24" />

                  {/* hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-red-600/[0.03] to-transparent" />

                  {/* content */}
                  <div className="relative z-10 p-8 lg:p-10 min-h-[340px] flex flex-col justify-between">
                    <div>
                      <div className="text-6xl leading-none text-red-600/20 mb-6 select-none">
                        “
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-sm lg:text-base">
                        {t.content}
                      </p>
                    </div>

                    <div className="pt-10">
                      <div className="w-12 h-[1px] bg-red-600 mb-5" />
                      <h4 className="text-gray-900 dark:text-white font-medium tracking-wide">
                        {t.name}
                      </h4>
                      <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-2">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Controls / Dots (Mobile Navigation + indicators) */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => {
                handlePrev();
                resetAutoplay();
              }}
              className="md:hidden p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-400 active:text-red-600 transition"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    resetAutoplay();
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentIndex === idx ? "w-8 bg-red-600" : "w-1.5 bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                handleNext();
                resetAutoplay();
              }}
              className="md:hidden p-3 rounded-full border border-gray-200 dark:border-gray-800 text-gray-400 active:text-red-600 transition"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;