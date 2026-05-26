import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  ShieldCheck,
  Home,
  HeartHandshake,
  Target,
  Sparkles,
  BadgeCheck,
  Building,
  Church,
  WalletCards,
  ArrowRight,
} from "lucide-react";

const timelineData = [
  {
    year: "1994",
    title: "Haggai Finance House",
    description:
      "The institution began as Haggai Finance House with a strong vision centered around accessible financial support and community impact.",
  },
  {
    year: "Community Era",
    title: "Haggai Community Bank",
    description:
      "The organization evolved into a community-based financial institution focused on empowering individuals and families through financial inclusion.",
  },
  {
    year: "2007",
    title: "Haggai Microfinance Bank",
    description:
      "Following regulatory reforms by the Central Bank of Nigeria, the institution transitioned into a Microfinance Bank.",
  },
  {
    year: "2008",
    title: "Primary Mortgage Bank",
    description:
      "Haggai became a fully recognized Primary Mortgage Bank focused on solving housing finance challenges in Nigeria.",
  },
];

const products = [
  "Haggai Plot Advance (HAPA)",
  "Haggai House Completion (HAHCOM)",
  "Haggai Renovation (HAREL)",
  "Haggai House Purchase (HAHEP)",
  "Haggai Rent (HARENT)",
  "Haggai Camp Home",
  "My Own Home Scheme",
];

const values = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "We uphold transparency, trust, and ethical financial practices in every interaction.",
  },
  {
    title: "Customer Experience",
    icon: HeartHandshake,
    description:
      "We are committed to delivering seamless and satisfying banking experiences.",
  },
  {
    title: "Expertise",
    icon: Sparkles,
    description:
      "We combine industry knowledge with strategic innovation to provide quality mortgage solutions.",
  },
];

export default function History() {
  return (
    <div
      id="history"
      className="relative overflow-hidden bg-white dark:bg-[#05070d] text-gray-900 dark:text-white"
    >
      {/* GLOBAL ORGANIC SHAPES */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full" />
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-red-500/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="relative px-6 md:px-10 lg:px-20 pt-32 pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 border border-red-600/30 bg-red-600/10 px-5 py-2 text-red-700 dark:text-red-400 uppercase tracking-[0.25em] text-xs">
              <BadgeCheck size={14} />
              Our Story
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
              Building Homes.
              <span className="block text-red-700 dark:text-red-400">
                Touching Lives.
              </span>
            </h1>

            <p className="mt-10 text-lg leading-9 text-gray-600 dark:text-gray-300 max-w-2xl">
              Haggai Mortgage Bank Limited represents a modern evolution within
              Nigeria’s housing finance ecosystem — blending financial
              innovation, human-centered banking, and sustainable pathways to
              home ownership.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <button className="group relative overflow-hidden border border-red-700 px-8 py-4 uppercase tracking-widest text-sm text-white bg-red-700 transition-all duration-500 hover:bg-transparent hover:text-red-700 dark:hover:text-red-400">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight size={16} />
                </span>
              </button>

              <button className="border border-gray-300 dark:border-gray-700 px-8 py-4 uppercase tracking-widest text-sm hover:border-red-700 hover:text-red-700 dark:hover:text-red-400 transition-all duration-500">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* ORGANIC CONTAINER */}
            <div className="relative p-8 border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl overflow-hidden">
              
              {/* FLOATING CURVES */}
              <div className="absolute top-[-120px] right-[-120px] w-[250px] h-[250px] bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-pink-500/10 rounded-full blur-3xl" />

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  {
                    icon: Landmark,
                    title: "CBN Regulated",
                  },
                  {
                    icon: ShieldCheck,
                    title: "NDIC Insured",
                  },
                  {
                    icon: Home,
                    title: "Mortgage Solutions",
                  },
                  {
                    icon: Church,
                    title: "Faith-Based Banking",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -10,
                        rotateX: 5,
                        rotateY: -5,
                      }}
                      transition={{ duration: 0.4 }}
                      className="relative border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] p-7 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

                      <div className="w-14 h-14 flex items-center justify-center border border-red-600/20 bg-red-600/10 mb-5">
                        <Icon
                          className="text-red-700 dark:text-red-400"
                          size={26}
                        />
                      </div>

                      <h3 className="text-lg font-medium tracking-tight">
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      {/* TIMELINE */}
<section className="relative px-6 md:px-10 lg:px-20 py-28 overflow-hidden">
  
  {/* AMBIENT SHAPES */}
  <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] bg-red-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-10 right-[-100px] w-[280px] h-[280px] bg-pink-500/10 blur-3xl rounded-full" />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* HEADER */}
    <div className="text-center mb-24">
      <p className="uppercase tracking-[0.3em] text-red-700 dark:text-red-400 text-xs mb-6">
        Evolution Timeline
      </p>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight">
        The Journey
      </h2>
    </div>

    <div className="relative">
      
      {/* TIMELINE LINE */}
      <div className="hidden md:block absolute left-[89px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/40 dark:via-red-400/40 to-transparent" />

      <div className="space-y-20">

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-8 lg:gap-14 items-start"
          >

            {/* YEAR SIDE */}
            <div className="relative flex md:block items-center">

              {/* DOT */}
              <div className="hidden md:block absolute left-[82px] top-6 w-4 h-4 rounded-full bg-red-700 dark:bg-red-400 shadow-[0_0_25px_rgba(255,45,85,0.7)]" />

              {/* YEAR CARD */}
              <div className="relative inline-flex overflow-hidden border border-red-600/20 bg-red-600/10 backdrop-blur-xl">

                {/* SHAPE */}
                <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-red-600/10 rounded-full blur-2xl" />

                <div className="relative px-6 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-red-700/60 dark:text-red-300/60 mb-2">
                    Timeline
                  </p>

                  <h3 className="text-xl md:text-2xl font-light text-red-700 dark:text-red-300 leading-none">
                    {item.year}
                  </h3>
                </div>
              </div>
            </div>

            {/* CONTENT CARD */}
            <motion.div
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: -2,
              }}
              transition={{ duration: 0.35 }}
              className="group relative min-w-0 overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
            >

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* SHAPES */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="absolute bottom-[-40px] left-[-40px] w-28 h-28 bg-pink-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6 break-words">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-9 text-lg break-words">
                  {item.description}
                </p>

              </div>
            </motion.div>

          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>

      {/* PRODUCTS */}
      <section className="relative px-6 md:px-10 lg:px-20 py-28">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.3em] text-red-700 dark:text-red-400 text-xs mb-6">
              Product Ecosystem
            </p>

            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Designed Around
              <span className="block">Real Lives</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                }}
                className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-8"
              >
                {/* TOP LIGHT */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* ORGANIC SHAPE */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-16 h-16 border border-red-600/20 bg-red-600/10 flex items-center justify-center mb-6">
                    <Building2
                      className="text-red-700 dark:text-red-400"
                      size={28}
                    />
                  </div>

                  <h3 className="text-2xl font-light tracking-tight leading-9">
                    {product}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative px-6 md:px-10 lg:px-20 py-28">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-red-700 dark:text-red-400 text-xs mb-6">
              Core Values
            </p>

            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Human-Centered Banking
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    rotateY: -4,
                  }}
                  className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-10"
                >
                  {/* GLOW */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-red-600/20 bg-red-600/10 flex items-center justify-center mb-7">
                      <Icon
                        className="text-red-700 dark:text-red-400"
                        size={30}
                      />
                    </div>

                    <h3 className="text-3xl font-light tracking-tight mb-5">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-9">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}