import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Landmark } from "lucide-react";

const Category = () => {
  const [activeTab, setActiveTab] = useState("Haggai Plot Advance");
  const sectionRefs = useRef({});

  const categories = [
    {
      name: "Haggai Plot Advance",
      slug: "haggai-plot-advance",
      title: "Secure land today, build tomorrow",
      description:
        "Get financial support to acquire land now and take the first step toward owning your dream property.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Haggai House Completion",
      slug: "haggai-house-completion",
      title: "Complete your home construction",
      description:
        "Get the funds you need to finish building your house and move in sooner.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Haggai House Purchase",
      slug: "haggai-house-purchase",
      title: "Buy your dream home",
      description:
        "Make your home ownership dreams a reality with our flexible mortgage options.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Haggai House Renovation",
      slug: "haggai-house-renovation",
      title: "Transform your space",
      description:
        "Renovate and modernize your home with our renovation financing solutions.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Haggai Rent",
      slug: "haggai-rent",
      title: "Refinance Your Rent",
      description:
        "Let us take the burden of a lump sum off your shoulders by refinancing your rent. Now you can pay your rent monthly, rather than yearly.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Haggai Camp Home",
      slug: "haggai-camp-home",
      title: "Temporary housing solutions",
      description:
        "Get comfortable temporary housing while you build your permanent home.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=90",
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
      className="relative overflow-hidden bg-white px-4 py-24 dark:bg-[#05070d] sm:px-8 md:py-32 lg:px-20"
    >
      <div className="absolute right-[-100px] top-[-150px] h-[350px] w-[350px] bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-[5%] left-[-120px] h-[300px] w-[300px] bg-pink-500/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[40%] h-[180px] w-[180px] rotate-45 border border-red-600/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 border border-red-600/20 bg-red-600/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-red-700 dark:text-red-400">
            <Landmark size={14} />
            Mortgage Products
          </div>

          <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
            Mortgage Solutions
            <span className="block text-red-700 dark:text-red-400">
              Built Around Real Lives
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-300 md:text-xl">
            Discover flexible financing solutions designed to help individuals,
            families, and communities move confidently toward sustainable home
            ownership.
          </p>
        </motion.div>

        <div className="sticky top-24 z-30 mb-20 hidden lg:block">
          <div className="overflow-hidden border border-gray-200 bg-white/70 px-4 py-4 backdrop-blur-2xl dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-red-600/5 to-transparent" />

            <div className="scrollbar-hide relative flex flex-nowrap gap-3 overflow-x-auto">
              {categories.map((category) => {
                const active = activeTab === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => scrollToSection(category.name)}
                    className={`group relative shrink-0 overflow-hidden border px-5 py-3 transition-all duration-500 ${
                      active
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-gray-200 text-gray-700 hover:border-red-600/40 hover:text-red-700 dark:border-gray-800 dark:text-gray-300 dark:hover:text-red-400"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                        active
                          ? "w-full bg-white"
                          : "w-0 bg-red-600 group-hover:w-full"
                      }`}
                    />

                    <span className="relative whitespace-nowrap text-sm uppercase tracking-wider">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

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
              className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24"
            >
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -left-6 top-0 hidden h-40 w-[1px] bg-gradient-to-b from-red-600 to-transparent lg:block" />

                <div className="mb-7 inline-flex items-center gap-2 border border-red-600/20 bg-red-600/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
                  <Building2 size={14} />
                  {category.name}
                </div>

                <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">
                  {category.title}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {[
                    "Flexible Plans",
                    "Fast Processing",
                    "Trusted Support",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="border border-gray-200 bg-white/60 px-4 py-3 text-sm uppercase tracking-wider text-gray-700 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

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
                <Link
                  to={`/products/${category.slug}`}
                  className="group block"
                  aria-label={`View ${category.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-700/5 to-transparent" />

                  <div className="relative aspect-square overflow-hidden border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                    <div className="absolute left-0 top-0 z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

                    <div className="absolute left-6 top-6 z-20">
                      <span className="text-6xl font-black text-white opacity-90 drop-shadow-2xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                    <div className="absolute inset-0 z-10 bg-red-700/0 transition duration-500 group-hover:bg-red-700/10" />

                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-red-200">
                        Haggai Mortgage Bank
                      </p>

                      <div className="flex items-end justify-between gap-5">
                        <h3 className="text-3xl font-semibold tracking-tight text-white">
                          {category.name}
                        </h3>

                        <span className="hidden shrink-0 border border-white/25 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 transition duration-300 group-hover:border-red-500 group-hover:bg-red-700 group-hover:text-white sm:inline-flex">
                          View Product
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;