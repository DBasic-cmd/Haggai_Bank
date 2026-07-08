import React from "react";

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
        "With Haggai Plot Advance, I was able to secure land earlier than planned. It felt like a big step forward, and the process was smooth from start to finish.",
      name: "Adebayo Johnson",
      role: "Plot Owner",
    },
    {
      content:
        "Haggai House Completion helped me finish my home construction without financial stress. Their flexible payment options made all the difference.",
      name: "Funmi Adeyemi",
      role: "Homeowner",
    },
    {
      content:
        "The Haggai team guided me through my first home purchase with patience and expertise. I couldn't have done it without their support.",
      name: "Chukwuemeka Nwosu",
      role: "First-time Buyer",
    },
  ];

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

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`md:col-span-4 relative group ${
                i === 1 ? "md:translate-y-14" : ""
              }`}
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
              <div className="relative z-10 p-8 lg:p-10 min-h-[320px] flex flex-col justify-between">

                <div>

                  <div className="text-6xl leading-none text-red-600/20 mb-6">
                    “
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
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
          ))}

        </div>

      </div>
    </div>
  );
};

export default Feedback;