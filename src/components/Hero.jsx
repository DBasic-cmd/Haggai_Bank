import React from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
    label: "Family Home Ownership",
    kicker: "Family Home Ownership",
    title: "Move Into More Than a House.",
    description:
      "Mortgage solutions designed to help Nigerian families buy, build, renovate, and secure homes with confidence.",
    advisoryTitle: "Get guidance before choosing your home finance plan.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90",
    label: "Modern Residential Living",
    kicker: "Modern Residential Living",
    title: "Build the Future You Want to Live In.",
    description:
      "From construction finance to home completion support, we help you move from plans to keys with clarity.",
    advisoryTitle: "Let our team guide your construction or completion journey.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2400&q=90",
    label: "Premium Mortgage Living",
    kicker: "Premium Mortgage Living",
    title: "Own Property With Greater Confidence.",
    description:
      "Access mortgage products designed around real income patterns, long-term value, and responsible home ownership.",
    advisoryTitle: "Find the mortgage plan that fits your financial goal.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90",
    label: "Secure Home Investment",
    kicker: "Secure Home Investment",
    title: "Secure Land Today. Build Tomorrow.",
    description:
      "Take the first step toward ownership with flexible financing options for land, housing, and property growth.",
    advisoryTitle: "Speak with an advisor before making your next property move.",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.label}-${index}`}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
            style={{
              backgroundImage: `url('${slide.image}')`,
              animation: `heroImageCycle 32s infinite`,
              animationDelay: `${index * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

      <div className="absolute left-0 top-0 h-full w-[44%] border-r border-white/10 bg-black/20 backdrop-blur-[1px]" />

      <div className="relative z-20 mx-auto flex min-h-[96vh] max-w-7xl items-center px-5 pt-28 sm:px-10 lg:px-16 xl:px-6">
        <div className="max-w-3xl">
          <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[470px]">
            {heroSlides.map((slide, index) => (
              <div
                key={`copy-${slide.label}-${index}`}
                className="absolute left-0 top-0 w-full opacity-0"
                style={{
                  animation: "heroTextCycle 32s infinite",
                  animationDelay: `${index * 8}s`,
                }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-16 bg-red-500" />
                  <p className="text-xs font-black uppercase tracking-[0.38em] text-white/80">
                    {slide.kicker}
                  </p>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
                  {slide.title}
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/products/haggai-plot-advance"
              className="group relative overflow-hidden bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-red-800"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore Mortgages</span>
            </Link>

            <Link
              to="/resources/mortgage-calculator"
              className="border border-white/35 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-500 hover:bg-white hover:text-slate-950"
            >
              Mortgage Calculator
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-l border-white/20 pl-6">
            <div>
              <p className="text-3xl font-black text-white">30+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                Years
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">50,000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                Clients
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">CBN</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                Regulated
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">NDIC</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                Insured
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-5xl">
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Head Office
                  </p>

                  <p className="text-sm leading-6 text-white/80">
                    119, Bode Thomas Street,<br className="sm:hidden" />
                    Surulere, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 lg:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Email
                  </p>

                  <a
                    href="mailto:info@haggaibank.com"
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    info@haggaibank.com
                  </a>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 lg:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Regulatory Status
                  </p>

                  <p className="text-sm text-white/80">
                    Licensed by the Central Bank of Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {heroSlides.map((slide, index) => (
        <div
          key={`advisory-${slide.label}-${index}`}
          className="absolute bottom-8 right-8 z-20 hidden max-w-sm border border-white/15 bg-black/30 p-6 text-white opacity-0 backdrop-blur-xl lg:block"
          style={{
            animation: "heroTextCycle 32s infinite",
            animationDelay: `${index * 8}s`,
          }}
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-200">
            Mortgage Advisory
          </p>

          <p className="mt-3 text-2xl font-black leading-tight">
            {slide.advisoryTitle}
          </p>

          <Link
            to="/get-a-call-back"
            className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
          >
            Speak to an advisor →
          </Link>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        {heroSlides.map((slide, index) => (
          <span
            key={`progress-${slide.label}-${index}`}
            className="h-[3px] w-12 overflow-hidden bg-white/25"
          >
            <span
              className="block h-full w-full origin-left scale-x-0 bg-red-600"
              style={{
                animation: `heroProgress 32s infinite`,
                animationDelay: `${index * 8}s`,
              }}
            />
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes heroImageCycle {
            0% {
              opacity: 0;
              transform: scale(1.08) translateX(2%);
              clip-path: inset(0 0 0 100%);
            }

            6% {
              opacity: 1;
              transform: scale(1.04) translateX(0);
              clip-path: inset(0 0 0 0);
            }

            24% {
              opacity: 1;
              transform: scale(1.1) translateX(-1.5%);
              clip-path: inset(0 0 0 0);
            }

            30% {
              opacity: 0;
              transform: scale(1.14) translateX(-3%);
              clip-path: inset(0 100% 0 0);
            }

            100% {
              opacity: 0;
              transform: scale(1.08) translateX(2%);
              clip-path: inset(0 0 0 100%);
            }
          }

          @keyframes heroTextCycle {
            0% {
              opacity: 0;
              transform: translateY(18px);
              pointer-events: none;
            }

            6% {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }

            24% {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }

            30% {
              opacity: 0;
              transform: translateY(-16px);
              pointer-events: none;
            }

            100% {
              opacity: 0;
              transform: translateY(18px);
              pointer-events: none;
            }
          }

          @keyframes heroProgress {
            0% {
              transform: scaleX(0);
            }

            6% {
              transform: scaleX(0);
            }

            24% {
              transform: scaleX(1);
            }

            30% {
              transform: scaleX(1);
            }

            31% {
              transform: scaleX(0);
            }

            100% {
              transform: scaleX(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;