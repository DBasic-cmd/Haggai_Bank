import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Landmark,
} from "lucide-react";
import assets from "../assets/assets";

const Category = () => {
  const [activeTab, setActiveTab] = useState("Haggai Plot Advance");
  const sectionRefs = useRef({});

  const categories = [
    {
      name: "Haggai Plot Advance",
      title: "Secure land today, build tomorrow",
      description:
        "Get financial support to acquire land now and take the first step toward owning your dream property.",
    },
    {
      name: "Haggai House Completion",
      title: "Complete your home construction",
      description:
        "Get the funds you need to finish building your house and move in sooner.",
    },
    {
      name: "Haggai House Purchase",
      title: "Buy your dream home",
      description:
        "Make your home ownership dreams a reality with our flexible mortgage options.",
    },
    {
      name: "Haggai House Renovation",
      title: "Transform your space",
      description:
        "Renovate and modernize your home with our renovation financing solutions.",
    },
    {
      name: "Haggai Rent",
      title: "Flexible rental solutions",
      description:
        "Find the perfect rental property with our comprehensive rental assistance.",
    },
    {
      name: "Haggai Camp Home",
      title: "Temporary housing solutions",
      description:
        "Get comfortable temporary housing while you build your permanent home.",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setActiveTab(sectionName);
        }
      });
    }, observerOptions);

    categories.forEach((category) => {
      const sectionElement = sectionRefs.current[category.name];

      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (name) => {
    const section = sectionRefs.current[name];

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white dark:bg-[#05070d] py-24 md:py-32 px-4 sm:px-8 lg:px-20"
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-red-600/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[5%] left-[-120px] w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="absolute top-[40%] right-[10%] w-[180px] h-[180px] border border-red-600/10 rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-flex items-center gap-2 border border-red-600/20 bg-red-600/10 px-5 py-2 text-red-700 dark:text-red-400 uppercase tracking-[0.25em] text-xs mb-8">
            <Landmark size={14} />
            Mortgage Products
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-gray-900 dark:text-white">
            Mortgage Solutions
            <span className="block text-red-700 dark:text-red-400">
              Built Around Real Lives
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover flexible financing solutions designed to help individuals,
            families, and communities move confidently toward sustainable home
            ownership.
          </p>
        </motion.div>

        {/* STICKY NAV */}
        <div className="sticky top-24 z-30 hidden lg:block mb-20">
          <div className="border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl px-4 py-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent pointer-events-none" />

            <div className="relative flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide">
              {categories.map((category) => {
                const active = activeTab === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => scrollToSection(category.name)}
                    className={`group relative shrink-0 px-5 py-3 border transition-all duration-500 overflow-hidden ${
                      active
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-red-600/40 hover:text-red-700 dark:hover:text-red-400"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                        active
                          ? "w-full bg-white"
                          : "w-0 bg-red-600 group-hover:w-full"
                      }`}
                    />

                    <span className="relative text-sm uppercase tracking-wider whitespace-nowrap">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="space-y-32">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              ref={(el) => (sectionRefs.current[category.name] = el)}
              data-section={category.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              {/* TEXT */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* DECORATIVE LINE */}
                <div className="absolute -left-6 top-0 h-40 w-[1px] bg-gradient-to-b from-red-600 to-transparent hidden lg:block" />

                <div className="inline-flex items-center gap-2 border border-red-600/20 bg-red-600/10 px-4 py-2 text-red-700 dark:text-red-400 uppercase tracking-[0.2em] text-xs mb-7">
                  <Building2 size={14} />
                  {category.name}
                </div>

                <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-gray-900 dark:text-white max-w-xl">
                  {category.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-300 max-w-xl">
                  {category.description}
                </p>

                {/* FEATURE ROW */}
                <div className="flex flex-wrap gap-4 mt-10">
                  {[
                    "Flexible Plans",
                    "Fast Processing",
                    "Trusted Support",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-5 mt-12">
                  <button className="group relative overflow-hidden border border-red-700 bg-red-700 px-8 py-4 uppercase tracking-[0.2em] text-sm text-white transition-all duration-500 hover:bg-transparent hover:text-red-700 dark:hover:text-red-400">
                    <span className="relative z-10 flex items-center gap-2">
                      Open Account
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>

                  <button className="group border border-gray-300 dark:border-gray-700 px-8 py-4 uppercase tracking-[0.2em] text-sm text-gray-800 dark:text-white hover:border-red-700 hover:text-red-700 dark:hover:text-red-400 transition-all duration-500">
                    <span className="flex items-center gap-2">
                      Learn More
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </div>
              </div>

              {/* IMAGE CARD */}
              <motion.div
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                }}
                transition={{ duration: 0.5 }}
                className={`relative ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {/* GLOW */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />

                <div className="relative border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl overflow-hidden p-6 md:p-8">
                  {/* TOP LIGHT */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

                  {/* SHAPE */}
                  <div className="absolute bottom-[-80px] right-[-80px] w-48 h-48 border border-red-600/10 rounded-full" />

                  <div className="relative z-10 flex justify-center">
                    <img
                      src={assets.work_mobile_app}
                      alt={category.name}
                      className="w-full max-w-md object-contain transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;