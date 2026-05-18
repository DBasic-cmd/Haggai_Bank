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
      className="w-full bg-[#f7f7f7] overflow-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-10 lg:px-20 pt-24 pb-24">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fff5f5] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <BadgeCheck size={16} />
              Our Story
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1d2939]">
              Building Homes,
              <span className="block text-[#d40000]">
                Touching Lives Since 1994
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#475467] max-w-2xl">
              Haggai Mortgage Bank Limited represents a powerful evolution
              within Nigeria’s housing finance ecosystem — delivering accessible
              mortgage solutions, faith-based financial support, and sustainable
              pathways to home ownership for individuals, families,
              organizations, and communities.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#d40000] hover:bg-[#b80000] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105">
                Explore Products
              </button>

              <button className="border border-[#d40000] text-[#d40000] hover:bg-[#fff1f1] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#dce7f7] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d40000]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/40 rounded-full blur-3xl" />

              <div className="grid grid-cols-2 gap-5 relative z-10">
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
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-3xl p-6 shadow-md"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#ffe3e3] flex items-center justify-center mb-4">
                        <Icon className="text-[#d40000]" size={28} />
                      </div>

                      <h3 className="font-bold text-[#1d2939] text-lg">
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

      {/* INTRO SECTION */}
      <section className="px-6 md:px-10 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-14 shadow-lg border border-[#f1f1f1]"
          >
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  Institutional Overview
                </div>

                <h2 className="text-4xl font-bold text-[#1d2939] leading-tight">
                  A Strategic Institution Within Nigeria’s Housing Finance
                  Sector
                </h2>
              </div>

              <div className="space-y-6 text-[#475467] text-lg leading-9">
                <p>
                  Haggai Mortgage Bank Limited occupies a strategic position
                  within Nigeria’s housing finance sector as a licensed Primary
                  Mortgage Bank regulated by the Central Bank of Nigeria with
                  deposit insurance coverage provided by the Nigeria Deposit
                  Insurance Corporation.
                </p>

                <p>
                  These affiliations position the bank within Nigeria’s
                  regulated housing finance ecosystem, where it contributes to
                  expanding access to residential and faith-based property
                  financing in a market constrained by a persistent housing
                  deficit.
                </p>

                <p>
                  Over the years, the institution has aligned its operations
                  with evolving regulatory standards and market realities while
                  maintaining a focused commitment to mortgage and retail
                  banking excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-10 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              Evolution Timeline
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2939]">
              Our Transformation Journey
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#f0cfcf] hidden md:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-40 relative">
                    <div className="hidden md:flex absolute left-[13px] top-4 w-4 h-4 rounded-full bg-[#d40000]" />

                    <div className="bg-[#d40000] text-white px-5 py-3 rounded-2xl inline-block font-bold shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-[2rem] p-8 shadow-lg border border-[#f3f3f3] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-[#1d2939] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[#475467] text-lg leading-8">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              What We Do
            </div>

            <h2 className="text-4xl font-bold text-[#1d2939] leading-tight mb-8">
              Beyond Conventional Mortgage Banking
            </h2>

            <div className="space-y-6 text-[#475467] text-lg leading-9">
              <p>
                The Bank’s core operations extend beyond conventional
                residential mortgage lending to include financing for home
                acquisition, construction, renovation, business developments,
                and religious institutions.
              </p>

              <p>
                These services are supported by retail banking offerings such as
                savings and current accounts, fixed deposits, and electronic
                banking solutions designed to improve efficiency and
                accessibility.
              </p>

              <p>
                Through this integrated financial model, Haggai Mortgage Bank
                bridges the gap between property ownership aspirations and
                structured financial empowerment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              {
                icon: Home,
                title: "Home Financing",
              },
              {
                icon: Building,
                title: "Commercial Development",
              },
              {
                icon: Church,
                title: "Religious Institutions",
              },
              {
                icon: WalletCards,
                title: "Retail Banking",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-[#f8f8f8] rounded-[2rem] p-8 border border-[#efefef] shadow-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ffe3e3] flex items-center justify-center mb-5">
                    <Icon className="text-[#d40000]" size={30} />
                  </div>

                  <h3 className="font-bold text-[#1d2939] text-xl">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-10 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              Product Ecosystem
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2939]">
              Mortgage Solutions Designed Around Real Lives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-7 shadow-lg border border-[#f2f2f2] hover:border-[#ffd0d0] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ffe3e3] flex items-center justify-center mb-5">
                  <Building2 className="text-[#d40000]" size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#1d2939] leading-8">
                  {product}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#fff5f5] rounded-[2rem] p-10 border border-[#ffdede]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#d40000] flex items-center justify-center mb-6">
              <Target className="text-white" size={30} />
            </div>

            <h2 className="text-3xl font-bold text-[#1d2939] mb-6">
              Our Vision
            </h2>

            <p className="text-[#475467] text-lg leading-9">
              To work with the “Master Builder” to touch lives by providing
              quality mortgage services and homes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#f8f8f8] rounded-[2rem] p-10 border border-[#ececec]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#d40000] flex items-center justify-center mb-6">
              <Landmark className="text-white" size={30} />
            </div>

            <h2 className="text-3xl font-bold text-[#1d2939] mb-6">
              Our Mission
            </h2>

            <p className="text-[#475467] text-lg leading-9">
              To provide quality shelters that touch lives while making home
              ownership accessible through faith-based and customer-centered
              mortgage solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-10 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-5">
              Core Values
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2939]">
              The Principles That Define Us
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
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2rem] p-10 shadow-lg border border-[#f2f2f2]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ffe3e3] flex items-center justify-center mb-6">
                    <Icon className="text-[#d40000]" size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d2939] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#475467] text-lg leading-8">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#d40000] to-[#a80000] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex bg-white/15 px-5 py-2 rounded-full text-sm font-semibold mb-6">
                Leadership & Direction
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Guided By Visionary Leadership
              </h2>

              <p className="text-lg md:text-xl leading-10 text-white/90 max-w-4xl">
                Under the leadership of Chairman Ben Akabueze and Managing
                Director/Chief Executive Officer Kofoworola Owode, Haggai
                Mortgage Bank continues to strengthen operational excellence,
                customer service delivery, and strategic positioning within
                Nigeria’s housing finance industry.
              </p>

              <p className="text-lg md:text-xl leading-10 text-white/90 max-w-4xl mt-6">
                With a branch at the Redemption Camp and a growing portfolio of
                mortgage and estate solutions across Lagos and Ogun State, the
                institution remains committed to sustainable home ownership and
                long-term national development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="px-6 md:px-10 lg:px-20 py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex bg-[#ffe3e3] text-[#d40000] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Looking Ahead
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1d2939] leading-tight mb-8">
            Expanding Sustainable Homeownership Across Nigeria
          </h2>

          <p className="text-[#475467] text-xl leading-10">
            Haggai Mortgage Bank Limited represents a clear example of
            institutional evolution within Nigeria’s financial system. As the
            nation continues to address its housing deficit, the Bank remains
            committed to delivering innovative mortgage solutions, strengthening
            financial inclusion, and supporting broader economic development
            through quality housing finance.
          </p>
        </motion.div>
      </section>
    </div>
  );
}