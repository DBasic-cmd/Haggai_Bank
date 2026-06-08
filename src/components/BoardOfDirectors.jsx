import React from "react";
import assets from "../assets/assets";

const boardMembers = [
  {
    name: "Mrs. Kofoworola Owode",
    role: "Managing Director / Chief Executive Officer",
    image: assets.md_ceo,
    text: `Mrs. Kofoworola Owode, Managing Director/Chief Executive Officer of Haggai Mortgage Bank Limited, has over three decades of managerial, strategic business development, and leadership experience in mortgage banking and financial services.

She was appointed MD/CEO in 2022 and has a proven track record in driving revenue growth, optimizing operational performance, and leading high-performing teams across corporate and mortgage banking environments.

She has led major transformation initiatives including digital banking advancement, risk management strengthening, and corporate financing leadership.

She is a Fellow of CIBN, FICA, and holds multiple board-level professional memberships. She is an ordained Assistant Pastor in RCCG and is passionate about mentorship, youth development, and housing advocacy.`,
  },
  {
    name: "Mr. Ajani Johnson",
    role: "Head, Electronic Banking",
    image: "/src/assets/AjaniJohnson.png",
    text: `Mr. Ajani Johnson is a seasoned banking professional with over 17 years of experience in financial services, spanning electronic banking, digital transformation, treasury operations, and card services.

He has led the design and deployment of innovative digital banking products focused on customer experience and operational efficiency.

Since joining Haggai Mortgage Bank in 2019, he has driven several key digital transformation initiatives that improved service delivery and strengthened customer engagement.

He holds degrees in Mathematics from the University of Ilorin and Risk Management from the University of Lagos and is a member of several professional banking bodies.`,
  },
  {
    name: "ADEWOLE Michael Olawale, FCIPM, FNIM",
    role: "Head, Corporate Services",
    image: "/src/assets/michaelolawale.png",
    text: `Adewole Michael Olawale is a seasoned HR and corporate services executive with over 20 years of experience across manufacturing, IT, logistics, and financial services.

He specializes in HR strategy, talent management, employee relations, compensation systems, and organizational development.

He holds multiple academic qualifications including degrees in Agricultural Economics, Psychology, and Industrial & Labour Relations.

He is a Fellow of CIPM and NIM, and serves on governance boards including Vision University.`,
  },
  {
    name: "Monday A. Kadiri",
    role: "Head, IT & E-Banking",
    image: "/src/assets/modaykadiri.png",
    text: `Monday A. Kadiri is a technology executive with over 20 years of experience in digital transformation, cybersecurity, IT governance, and banking systems architecture.

He leads Haggai Bank’s technology infrastructure, digital banking platforms, and enterprise cybersecurity frameworks.

He has previously held senior roles at Dimension Data, Intercontinental Bank Plc, and Global Bank.

He holds an MBA from Hult International Business School and has executive training from Lagos Business School.`,
  },
  {
    name: "Oluwatayo Kunle Awopegba, FCA, ACTI",
    role: "Chief Financial Officer",
    image: "/src/assets/olawale.png",
    text: `Oluwatayo Kunle Awopegba is a finance executive with over 20 years of experience in banking finance, regulatory compliance, and financial strategy.

As CFO, he oversees financial reporting, treasury operations, budgeting, and regulatory compliance in line with IFRS standards.

He has strong working relationships with CBN, NDIC, and tax authorities, ensuring full regulatory alignment.

He is a Fellow of ICAN and an Associate of CITN, with an MBA in Finance Management.`,
  },
];

const BoardOfDirectors = () => {
  const [activeMember, setActiveMember] = React.useState(null);

  React.useEffect(() => {
    if (activeMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMember]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden px-5 pb-24 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(185,28,28,0.34),transparent_30%),radial-gradient(circle_at_82%_5%,rgba(255,255,255,0.1),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.38em] text-red-400">
            Governance
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            Board of Directors
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
            Select a portrait to enter a focused leadership profile experience.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-28 sm:px-10 lg:px-16 xl:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {boardMembers.map((member, index) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setActiveMember(member)}
              className={`group relative h-[520px] overflow-hidden bg-slate-950 text-left transition-all duration-700 hover:z-10 hover:scale-[1.035] hover:shadow-2xl hover:shadow-red-950/30 lg:col-span-2 ${
                index === 0 ? "lg:col-start-2" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/30 text-xs font-black text-white backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-2xl font-black leading-tight text-white">
                  {member.name}
                </p>

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-red-200">
                  {member.role}
                </p>
              </div>

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-2xl text-white backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:bg-red-700">
                +
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeMember && (
        <section className="fixed inset-0 z-[100] overflow-hidden bg-black text-white">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-25 blur-xl animate-[sceneFade_700ms_ease_forwards]"
            style={{ backgroundImage: `url('${activeMember.image}')` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_25%,rgba(185,28,28,0.35),transparent_32%)]" />

          <button
            type="button"
            onClick={() => setActiveMember(null)}
            className="absolute right-5 top-5 z-[120] flex h-12 w-12 items-center justify-center border border-white/20 bg-white text-3xl text-black transition duration-300 hover:bg-red-700 hover:text-white sm:right-10 sm:top-10"
            aria-label="Close profile"
          >
            ×
          </button>

          <div className="relative z-[110] mx-auto grid h-screen max-w-7xl grid-cols-1 items-center gap-8 px-5 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
            <div className="relative hidden h-[78vh] overflow-hidden border border-white/15 bg-white/5 shadow-2xl shadow-black/60 lg:block animate-[portraitEnter_850ms_ease_forwards]">
              <img
                src={activeMember.image}
                alt={activeMember.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            <article className="max-h-[78vh] overflow-y-auto pr-0 lg:pr-4 animate-[contentEnter_850ms_ease_forwards]">
              <p className="text-xs font-black uppercase tracking-[0.38em] text-red-400">
                Board Profile
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                {activeMember.name}
              </h2>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                {activeMember.role}
              </p>

              <div className="my-8 h-px w-full bg-white/10" />

              <p className="whitespace-pre-line text-lg leading-9 text-white/72">
                {activeMember.text}
              </p>
            </article>
          </div>

          <div className="absolute bottom-8 left-5 right-5 z-[120] hidden items-center justify-between border-t border-white/10 pt-5 lg:flex">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/35">
              Haggai Mortgage Bank Leadership
            </p>

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-400">
              Press close to return to gallery
            </p>
          </div>
        </section>
      )}

      <style>
        {`
          @keyframes sceneFade {
            0% {
              opacity: 0;
              transform: scale(1);
            }

            100% {
              opacity: 0.25;
              transform: scale(1.1);
            }
          }

          @keyframes portraitEnter {
            0% {
              opacity: 0;
              transform: translateX(-70px) scale(0.94);
              clip-path: inset(0 100% 0 0);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              clip-path: inset(0 0 0 0);
            }
          }

          @keyframes contentEnter {
            0% {
              opacity: 0;
              transform: translateY(35px);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default BoardOfDirectors;