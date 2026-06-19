import React from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
    label: "Family Home Ownership",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90",
    label: "Modern Residential Living",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2400&q=90",
    label: "Premium Mortgage Living",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90",
    label: "Secure Home Investment",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
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

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 sm:px-10 lg:px-16 xl:px-6">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-16 bg-red-500" />
            <p className="text-xs font-black uppercase tracking-[0.38em] text-white/80">
              Haggai Mortgage Bank
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
            Move Into More Than a House.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
            Mortgage solutions designed to help Nigerian families buy, build,
            renovate, and secure homes with confidence.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group relative overflow-hidden bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-red-800"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
              <Link to = "/products/haggai-plot-advance" className="relative">Explore Mortgages</Link>
            </a>

            <Link
              to="/resources/mortgage-calculator"
              className="border border-white/35 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-500 hover:bg-white hover:text-slate-950"
            >
              Mortgage Calculator
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-l border-white/20 pl-6">
            <div>
              <p className="text-3xl font-black text-white">20+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                Years
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">8,710+</p>
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden max-w-sm border border-white/15 bg-black/30 p-6 text-white backdrop-blur-xl lg:block">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-red-200">
          Mortgage Advisory
        </p>

        <p className="mt-3 text-2xl font-black leading-tight">
          Get guidance before choosing your home finance plan.
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
        >
          Speak to an advisor →
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        {heroSlides.map((slide, index) => (
          <span
            key={slide.label}
            className="h-[3px] w-12 bg-white/25 overflow-hidden"
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