import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Landmark,
  Home,
  Target,
  Sparkles,
  Users,
  Award,
  HeartHandshake,
  Compass,
  MapPin,
  ArrowRight,
} from "lucide-react";

const timelineData = [
  {
    year: "1994",
    title: "Haggai Finance House",
    description:
      "Originating as a finance house with a strong founding vision centered around accessible financial support and community development.",
  },
  {
    year: "Community Era",
    title: "Haggai Community Bank",
    description:
      "Transitioned into a community-based financial institution focused on expanding local credit, community impact, and retail empowerment.",
  },
  {
    year: "2007",
    title: "Haggai Microfinance Bank",
    description:
      "Evolved into a Microfinance Bank following comprehensive regulatory reforms introduced by the Central Bank of Nigeria.",
  },
  {
    year: "2008 — Present",
    title: "Primary Mortgage Bank",
    description:
      "Successfully licensed as a Primary Mortgage Bank (PMB) to bridge structural housing finance gaps and expand residential access.",
  },
];

const products = [
  { name: "Haggai Plot Advance (HAPA)", slug: "haggai-plot-advance" },
  { name: "Haggai House Completion (HAHCOM)", slug: "haggai-house-completion" },
  { name: "Haggai Renovation (HAREL)", slug: "haggai-renovation" },
  { name: "Haggai House Purchase (HAHEP)", slug: "haggai-house-purchase" },
  { name: "Haggai Rent (HARENT)", slug: "haggai-rent" },
  { name: "Haggai Camp Home", slug: "haggai-camp-home" },
  { name: "My Own Home Scheme", slug: "my-own-home-scheme" },
];

const stats = [
  { value: "30+", label: "Years of Trust" },
  { value: "10k+", label: "Homes Financed" },
  { value: "100%", label: "Ethical & Fair Banking" },
];

const OurStory = () => {
  return (
    <main className="min-h-screen bg-[#f7f3ef] text-slate-950 dark:bg-[#05070d] dark:text-white transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#070707] px-5 pb-24 pt-40 text-white sm:px-10 lg:px-16 xl:px-24">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(185,28,28,0.35),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.1),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.38em] text-red-400">
              Corporate Profile
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Haggai Mortgage Bank <br />
              <span className="text-red-500">Limited</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Haggai Mortgage Bank Limited occupies a strategic position within Nigeria’s housing finance sector.
              As a licensed Primary Mortgage Bank regulated by the Central Bank of Nigeria (CBN) and insured by the
              Nigeria Deposit Insurance Corporation (NDIC), we expand access to residential and faith-based property
              financing in a market constrained by a persistent housing deficit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center py-4 border-b md:border-b-0 md:border-r last:border-0 border-slate-100 dark:border-slate-800">
              <p className="text-4xl lg:text-5xl font-black text-red-700 dark:text-red-400">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE IDENTITY: VISION, MISSION, FAITH-BASED */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700 dark:text-red-400">Core Identity</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-[-0.04em] text-slate-900 dark:text-white">
            What Drives Our Bank
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* VISION */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                To work with the "Master Builder" to touch lives by providing quality mortgage services and homes.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                To provide quality shelters that touch lives.
              </p>
            </div>
          </div>

          {/* FAITH-BASED */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Faith-Based Approach</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                We operate with a commitment to making homeownership accessible to both mission members and the general public.
              </p>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                Built on the strong parameters of <strong className="text-slate-900 dark:text-white">Integrity</strong>, <strong className="text-slate-900 dark:text-white">Customer Experience</strong>, and <strong className="text-slate-900 dark:text-white">Expertise</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative bg-slate-100 dark:bg-[#0b0f19] px-5 py-24 sm:px-10 lg:px-16 xl:px-24 overflow-hidden">
        <div className="absolute top-20 left-[-120px] w-[300px] h-[300px] bg-red-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-[-100px] w-[280px] h-[280px] bg-red-500/5 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-red-700 dark:text-red-400 text-xs mb-6 font-bold">
              Evolution Timeline
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Our Journey Over Three Decades
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-gray-400 text-sm">
              Our growth reflects broader financial sector reforms aimed at strengthening specialized institutions capable of addressing structural housing finance gaps.
            </p>
          </div>

          <div className="relative">
            {/* Center line for desktop, left line for mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-red-600/40 to-transparent -translate-x-1/2" />

            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row relative items-stretch ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-red-700 dark:bg-red-400 -translate-x-1/2 shadow-[0_0_15px_rgba(255,45,85,0.7)] z-20" />

                  {/* Empty spacer / Content column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex justify-start md:justify-end">
                    {idx % 2 === 1 ? (
                      // Timeline Card Left-aligned text
                      <div className="w-full text-left md:text-right md:pr-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 mb-2 uppercase tracking-wider">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                      </div>
                    ) : (
                      // Timeline Card Left container
                      <div className="w-full bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 mb-2 uppercase tracking-wider">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex justify-start">
                    {idx % 2 === 1 ? (
                      // Timeline Card Right container
                      <div className="w-full bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                        <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    ) : (
                      // Timeline Card Right text
                      <div className="w-full text-left md:pl-4">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700 dark:text-red-400">Our Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-900 dark:text-white">
              Conventional & Faith-Based Operations
            </h2>
            <p className="mt-6 text-slate-600 dark:text-gray-300 leading-relaxed">
              The Bank’s core operations extend beyond conventional residential mortgage lending.
              We offer comprehensive pathways that link property ownership aspirations with structured, secure financing solutions.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-white/[0.01]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Property Financing</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Covers home acquisition, building construction, renovations, and commercial property development.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-white/[0.01]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Faith-Based Developments</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Financing and supportive packages designed for religious institutions, representing a major segment of our base.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-white/[0.01]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Retail Banking</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Reliable packages spanning current accounts, target savings, fixed deposits, and cash management.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-white/[0.01]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Electronic Banking</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Modern mobile apps and online banking solutions deployed to improve transactional efficiency and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTATE FOOTPRINT & PRODUCT ECOSYSTEM */}
      <section className="bg-slate-100 dark:bg-[#0b0f19] px-5 py-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700 dark:text-red-400">Our Footprint</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-900 dark:text-white">
                Real Estate Developments
              </h2>
              <p className="mt-6 text-slate-600 dark:text-gray-300 leading-relaxed">
                Beyond lending services, Haggai Mortgage Bank owns and manages high-quality property estates
                located across <strong className="text-slate-900 dark:text-white">Lagos</strong> and <strong className="text-slate-900 dark:text-white">Ogun</strong> states.
                This direct real estate involvement helps secure quality housing structures for Nigerians at home and in the diaspora.
              </p>
            </div>

            <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111625] shadow-md flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Lagos & Ogun States</h4>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Several individuals and organizations within Nigeria and in the diaspora have accessed our physical estate solutions with absolute ease and satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700 dark:text-red-400 text-center mb-8">
              Specialized Product Matrix
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111625] shadow-sm hover:border-red-600/40 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
                >
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR STABILITY & CONCLUSION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="p-8 md:p-12 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest">
                Sector Coordination & Stability
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Affiliations and Security
              </h2>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                Haggai's operations strictly align with the objectives of the
                <strong> Mortgage Banking Association of Nigeria (MBAN)</strong>, which promotes premium industry standards
                and sectoral coordination. Our depositors' security is reinforced by deposit insurance provided by the
                <strong> Nigeria Deposit Insurance Corporation (NDIC)</strong>, ensuring absolute confidence.
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-10 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Adaptive Evolution</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Haggai Mortgage Bank Limited represents a clear example of institutional evolution within Nigeria’s financial system.
                Our transformation from a finance house into a regulated mortgage institution underscores our adaptive capacity and sectoral relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED FOOTER STATEMENT */}
      <section className="relative overflow-hidden bg-[#070707] py-20 px-5 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(185,28,28,0.25),transparent_40%)] animate-pulse" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-light tracking-wide">
            "As Nigeria continues to face a significant housing deficit, our organization remains essential to expanding sustainable homeownership and supporting broader economic development."
          </h3>
          <div className="w-16 h-0.5 bg-red-600 mx-auto" />
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 font-bold">Haggai Mortgage Bank Limited</p>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
