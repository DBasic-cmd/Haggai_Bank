import React, { useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image:
      "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/MGMTPICS/IMG_7463.png?token=eyJraWQiOiI3ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL01HTVRQSUNTL0lNR183NDYzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTEzMDQyMTYsImV4cCI6MjEwNjY2NDIxNn0.rLrhhsz6QVDm3QHd_-O4PeVq-OIpo7-sr4KdVBEBh44",
    label: "Family Home Ownership",
    kicker: "Family Home Ownership",
    title: "Move Into More Than a House.",
    description:
      "Mortgage solutions designed to help Nigerian families buy, build, renovate, and secure homes with confidence.",
    advisoryTitle:
      "Get guidance before choosing your home finance plan.",
    position: "center center",
  },
  {
    image:
      "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/MGMTPICS/IMG_7464.jpeg?token=eyJraWQiOiI3ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL01HTVRQSUNTL0lNR183NDY0LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzYyODI0LCJleHAiOjIxMDYxMjI4MjR9.fwOpD35kgrcwtC-65Xr9NBswiPvJpt7Z3fsQ20msA-k",
    label: "Modern Residential Living",
    kicker: "Modern Residential Living",
    title: "Build the Future You Want to Live In.",
    description:
      "From construction finance to home completion support, we help you move from plans to keys with clarity.",
    advisoryTitle:
      "Let our team guide your construction or completion journey.",
    position: "center center",
  },
  {
    image:
      "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/MGMTPICS/IMG_7465.jpeg?token=eyJraWQiOiI3ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL01HTVRQSUNTL0lNR183NDY1LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzYyODQxLCJleHAiOjIxMDYxMjI4NDF9.Nz7XmkW05xTGI8U0cxvb9BeHksercEhHObzX6crdrxQ",
    label: "Premium Mortgage Living",
    kicker: "Premium Mortgage Living",
    title: "Own Property With Greater Confidence.",
    description:
      "Access mortgage products designed around real income patterns, long-term value, and responsible home ownership.",
    advisoryTitle:
      "Find the mortgage plan that fits your financial goal.",
    position: "center center",
  },
  {
    image:
      "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/MGMTPICS/IMG_7466.jpeg?token=eyJraWQiOiI3ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL01HTVRQSUNTL0lNR183NDY2LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNzYyODY1LCJleHAiOjIxMDYxMjI4NjV9.lqeRmMGp779CYRTV6HG7wYL-TeK_1T3XP0fanNO51-I",
    label: "Secure Home Investment",
    kicker: "Secure Home Investment",
    title: "Secure Land Today. Build Tomorrow.",
    description:
      "Take the first step toward ownership with flexible financing options for land, housing, and property growth.",
    advisoryTitle:
      "Speak with an advisor before making your next property move.",
    position: "center center",
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] overflow-hidden bg-slate-950"
    >
      {/* HERO BACKGROUND SLIDES */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.label}-${index}`}
            className="absolute inset-0 bg-cover bg-no-repeat opacity-0"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: slide.position,
              animation: "heroImageCycle 32s infinite",
              animationDelay: `${index * 8}s`,
            }}
          />
        ))}
      </div>

      {/* LIGHTER OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

      {/* LEFT TEXT SUPPORT */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[44%] border-r border-white/[0.06] bg-black/8" />

      {/* MAIN CONTENT */}
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

                  <p className="text-xs font-black uppercase tracking-[0.38em] text-white/90">
                    {slide.kicker}
                  </p>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-7xl">
                  {slide.title}
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] sm:text-xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
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
              className="border border-white/40 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-500 hover:bg-white hover:text-slate-950"
            >
              Mortgage Calculator
            </Link>
          </div>

          {/* METRICS */}
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-l border-white/25 pl-6">
            <div>
              <p className="text-3xl font-black text-white">30+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">
                Years
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">50,000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">
                Clients
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">CBN</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">
                Regulated
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">NDIC</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">
                Insured
              </p>
            </div>
          </div>

          {/* LOWER INFO */}
          <div className="mt-12 max-w-5xl">
            <div className="flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
                    Head Office
                  </p>

                  <p className="text-sm leading-6 text-white/90">
                    119, Bode Thomas Street,
                    <br className="sm:hidden" />
                    Surulere, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/15 lg:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
                    Email
                  </p>

                  <a
                    href="mailto:info@haggaibank.com"
                    className="text-sm text-white/90 transition hover:text-white"
                  >
                    info@haggaibank.com
                  </a>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/15 lg:block" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
                    Regulatory Status
                  </p>

                  <p className="text-sm text-white/90">
                    Licensed by the Central Bank of Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REMITTANCE */}
      <div className="absolute right-8 top-32 z-20 hidden w-[320px] text-white lg:block">
        <Link
          to="/products/remita-electronic-collection-solution"
          className="block w-full bg-red-700 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-red-900/30 transition duration-300 hover:bg-red-800"
        >
          Remittance Processing
        </Link>
      </div>

      {/* INTERNET BANKING */}
      <div className="absolute right-8 top-55 z-20 hidden w-[320px] border border-white/20 bg-black/20 p-6 text-white backdrop-blur-md lg:block">
        <p className="mb-8 text-center text-xl font-black leading-tight">
          Internet Banking
        </p>

        <div className="mt-4 flex border-b border-white/15 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("personal")}
            className={`flex-1 border-b-2 pb-1 text-center text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
              activeTab === "personal"
                ? "border-red-600 text-white"
                : "border-transparent text-white/55 hover:text-white/80"
            }`}
          >
            Personal
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("corporate")}
            className={`flex-1 border-b-2 pb-1 text-center text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
              activeTab === "corporate"
                ? "border-red-600 text-white"
                : "border-transparent text-white/55 hover:text-white/80"
            }`}
          >
            Corporate
          </button>
        </div>

        <a
          href={
            activeTab === "personal"
              ? "https://ibank.haggaibank.com/login"
              : "https://corpbanking.haggaibank.com"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full bg-red-700 py-3.5 text-center text-xs font-black uppercase tracking-[0.18em] text-white shadow-md shadow-red-900/10 transition duration-300 hover:bg-red-800"
        >
          Login
        </a>

        <div className="mt-4 flex items-center justify-center hover:text-red-500">
          <Link
            to="/about/privacy-policy"
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 underline underline-offset-4 transition hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        {heroSlides.map((slide, index) => (
          <span
            key={`progress-${slide.label}-${index}`}
            className="h-[3px] w-12 overflow-hidden bg-white/30"
          >
            <span
              className="block h-full w-full origin-left scale-x-0 bg-red-600"
              style={{
                animation: "heroProgress 32s infinite",
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
              transform: translateX(1.5%);
              clip-path: inset(0 0 0 100%);
            }

            6% {
              opacity: 1;
              transform: translateX(0);
              clip-path: inset(0 0 0 0);
            }

            24% {
              opacity: 1;
              transform: translateX(0);
              clip-path: inset(0 0 0 0);
            }

            30% {
              opacity: 0;
              transform: translateX(-1.5%);
              clip-path: inset(0 100% 0 0);
            }

            100% {
              opacity: 0;
              transform: translateX(1.5%);
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