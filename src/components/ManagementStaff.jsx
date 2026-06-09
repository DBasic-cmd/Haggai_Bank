import React from "react";
import assets from "../assets/assets";

const staffMembers = [
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

He holds degrees in Mathematics (University of Ilorin) and Risk Management (University of Lagos) and is a member of several professional banking bodies.`,
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

const ManagementStaff = () => {
  const [activeStaff, setActiveStaff] = React.useState(null);

  React.useEffect(() => {
    if (activeStaff) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeStaff]);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden px-5 pb-12 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-700/5 blur-[110px]" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-slate-900/5 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
            Leadership
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Management Staff
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Meet the executives and senior professionals driving Haggai Mortgage
            Bank’s strategy, operations, governance, innovation, and service
            excellence.
          </p>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-9 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((member, index) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setActiveStaff(member)}
              className="group block text-left outline-none animate-[cardIn_850ms_cubic-bezier(.16,1,.3,1)_both]"
              style={{ animationDelay: `${index * 95}ms` }}
            >
              <div className="relative aspect-[0.95/1] overflow-hidden rounded-lg bg-slate-100 shadow-sm transition duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-slate-900/15">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-black text-slate-950 opacity-0 shadow-xl transition duration-500 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black leading-tight tracking-[-0.04em] text-slate-950 transition duration-300 group-hover:text-red-700">
                    {member.name}
                  </h2>

                  <p className="mt-3 text-lg leading-6 text-slate-400">
                    {member.role}
                  </p>
                </div>

                <span className="mt-1 text-4xl font-light leading-none text-[#18305f] transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-700">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeStaff && (
        <section className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 px-5 py-8 backdrop-blur-xl sm:px-10">
          <button
            type="button"
            onClick={() => setActiveStaff(null)}
            className="fixed right-5 top-5 z-[120] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-slate-950 shadow-2xl transition hover:bg-red-700 hover:text-white"
            aria-label="Close profile"
          >
            ×
          </button>

          <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-0 py-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="h-[560px] overflow-hidden bg-slate-100 animate-[modalImage_800ms_cubic-bezier(.16,1,.3,1)_both]">
              <img
                src={activeStaff.image}
                alt={activeStaff.name}
                className="h-full w-full object-cover"
              />
            </div>

            <article className="max-h-[78vh] overflow-y-auto bg-white p-8 shadow-2xl sm:p-12 lg:p-14 animate-[modalText_850ms_cubic-bezier(.16,1,.3,1)_both]">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Profile
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
                {activeStaff.name}
              </h2>

              <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                {activeStaff.role}
              </p>

              <div className="my-8 h-px w-full bg-slate-200" />

              <p className="whitespace-pre-line text-lg leading-9 text-slate-600">
                {activeStaff.text}
              </p>
            </article>
          </div>
        </section>
      )}

      <style>
        {`
          @keyframes cardIn {
            0% {
              opacity: 0;
              transform: translateY(45px);
              filter: blur(10px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes modalImage {
            0% {
              opacity: 0;
              transform: translateX(-70px) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes modalText {
            0% {
              opacity: 0;
              transform: translateX(70px);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default ManagementStaff;