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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* LARGE FEATURE PANEL */}
          <div className="md:col-span-5 relative group min-h-[340px]">

            {/* frame */}
            <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:border-red-600/40" />

            {/* floating geometry */}
            <div className="absolute -top-5 -right-5 w-32 h-32 border border-red-600/30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 group-hover:bg-red-600/30 transition-all duration-500" />

            {/* subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-red-600/[0.03]" />

            {/* content */}
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-between h-full">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-6">
                  Customer Experience
                </p>

                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight">
                  {features[0].title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6 text-lg">
                  {features[0].description}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-10">
                <div className="w-10 h-[1px] bg-red-600" />
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Haggai Advantage
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="md:col-span-7 space-y-8">

            {features.slice(1).map((feature, index) => (
              <div
                key={index}
                className="relative group overflow-hidden"
              >

                {/* outer frame */}
                <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:border-white/20 dark:group-hover:border-red-600/30" />

                {/* animated fill */}
                <div className="absolute top-0 left-0 w-0 h-full bg-red-600/[0.04] transition-all duration-700 group-hover:w-full" />

                {/* edge geometry */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-red-600/60 transition-all duration-500 group-hover:w-28 group-hover:h-28" />

                {/* moving accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gray-300 dark:border-gray-700 transition-all duration-500 group-hover:border-red-600" />

                {/* content */}
                <div className="relative z-10 p-8 lg:p-10">

                  <div className="flex items-start justify-between gap-6 flex-wrap">

                    <div>
                      <h3 className="text-2xl font-light text-gray-900 dark:text-white tracking-tight">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed max-w-xl">
                        {feature.description}
                      </p>
                    </div>

                    <div className="text-red-600 text-4xl font-thin opacity-30 group-hover:opacity-100 transition-all duration-500">
                      0{index + 2}
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
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