import React, { useState, useEffect, useRef } from "react";
import assets from "../assets/assets";

const Category = () => {
  const [activeTab, setActiveTab] = useState("Haggai Plot Advance");
  const sectionRefs = useRef({});

  const categories = [
    {
      name: "Haggai Plot Advance",
      title: "Secure land today, build tomorrow",
      description: "Get financial support to acquire land now and take the first step toward owning your dream property."
    },
    {
      name: "Haggai House Completion",
      title: "Complete your home construction",
      description: "Get the funds you need to finish building your house and move in sooner."
    },
    {
      name: "Haggai House Purchase",
      title: "Buy your dream home",
      description: "Make your home ownership dreams a reality with our flexible mortgage options."
    },
    {
      name: "Haggai House Renovation",
      title: "Transform your space",
      description: "Renovate and modernize your home with our renovation financing solutions."
    },
    {
      name: "Haggai Rent",
      title: "Flexible rental solutions",
      description: "Find the perfect rental property with our comprehensive rental assistance."
    },
    {
      name: "Haggai Camp Home",
      title: "Temporary housing solutions",
      description: "Get comfortable temporary housing while you build your permanent home."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          setActiveTab(sectionName);
        }
      });
    }, observerOptions);

    // Observe all sections
    categories.forEach((category) => {
      const sectionElement = sectionRefs.current[category.name];
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, [categories]);
  return (
    <div className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-center">
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl py-5 font-bold text-white dark:text-gray-200">
          All Our Mortgage products you need to run your Housing plans with ease
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 md:p-4 mid-bar sticky top-29 hidden lg:block">
          <div className="flex flex-nowrap gap-1 md:gap-2 justify-center md:justify-start overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`inline-block shrink-0 transition-colors duration-200 min-w-0 ${
                  activeTab === category.name
                    ? "bg-red-200 text-red-500 rounded-full"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <h6 className={`font-bold border p-1.5 px-2 md:p-2 md:px-3 rounded-full text-xs md:text-sm whitespace-nowrap ${
                  activeTab === category.name
                    ? "text-red-500 border-0"
                    : "text-gray-700 dark:text-gray-200"
                }`}>
                  {category.name}
                </h6>
              </div>
            ))}
          </div>
        </div>


        {categories.map((category, index) => (
          <div
            key={category.name}
            ref={(el) => (sectionRefs.current[category.name] = el)}
            data-section={category.name}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-16"
          >
            <div className={`text-left ${index % 2 === 1 ? 'md:order-2' : ''} order-2 md:order-0`}>
              <h6 className="font-bold rounded-full bg-red-100 text-red-500 p-2 px-4 inline-block text-sm md:text-base mb-4">
                {category.name}
              </h6>
              <h3 className="text-xl md:text-2xl font-bold text-white dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <p className="text-white dark:text-gray-400 text-base md:text-lg mb-6">
                {category.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-red-700 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-colors duration-200">
                  Open Account
                </button>
                <button className="text-white bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className={`flex justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} ${index % 2 === 1 ? 'md:order-1' : ''} order-1 md:order-0`}>
              <img src={assets.work_mobile_app} alt="Mobile App" className="w-full max-w-md md:max-w-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
