import React from "react";
import { Link } from "react-router-dom";

const rsaSteps = [
  {
    title: "Property Offer",
    text: `The applicant shall obtain a property offer letter from the property owner or approved agent and approach a Mortgage Lender.`,
  },
  {
    title: "Mortgage Application",
    text: `The applicant shall fill an application for mortgage, which shall be provided by the Mortgage Lender and attach the property offer letter.`,
  },
  {
    title: "Application Details",
    text: `The application form shall contain the following minimum information:
· Full name of the RSA holder
· PIN of the RSA holder
· Name of the Mortgage Lender
· Value of the property
· Name of his/her spouse (if it is a joint mortgage)
· Evidence of marriage (If it is a joint mortgage)
· PIN of his/her spouse (If it is a joint mortgage)
· PFA of his/her spouse (If it is a joint mortgage)
· Amount of equity payable by each applicant in a joint application`,
  },
  {
    title: "Property Verification",
    text: `The Mortgage Lender shall review the application form and verify the genuineness of the property offer.`,
  },
  {
    title: "Valuation Due Diligence",
    text: `The Mortgage Lender shall do its due diligence to ensure that the property has a valuation report.`,
  },
  {
    title: "RSA Statement Request",
    text: `Upon confirmation of the property offer letter, the applicant shall approach his/her PFA and request his/her RSA Statement for the purpose of accessing the 25% of his/her RSA balance for payment of equity contribution. (Page 12 of 18 Guidelines on Equity Contribution for RSA Residential Mortgage)`,
  },
  {
    title: "Joint Application Copies",
    text: `In a joint application, each party shall apply to their respective PFA’s with copies`,
  },
  {
    title: "Verified Offer Letter",
    text: `of the verified property offer letter.`,
  },
  {
    title: "Endorsed RSA Statement",
    text: `The PFA shall issue a duly endorsed RSA statement to the applicant, which the`,
  },
  {
    title: "Forward To Lender",
    text: `applicant shall forward to his/her Mortgage Lender.`,
  },
  {
    title: "PFA Record Update",
    text: `The PFA shall update record on Applications for Equity Contribution for Residential Mortgage upon issuing the RSA Statement to RSA holder.`,
  },
  {
    title: "Mortgage Lender Receives Statement",
    text: `Upon receipt of the duly endorsed RSA statement, the Mortgage Lender shall`,
  },
  {
    title: "25% Sufficiency Review",
    text: `verify if the 25% of the applicant’s RSA balance will be sufficient as equity`,
  },
  {
    title: "Equity Contribution",
    text: `contribution.`,
  },
  {
    title: "Mortgage Offer If Sufficient",
    text: `Where 25% of the RSA balance is sufficient as equity contribution, the Mortgage Lender shall issue a mortgage offer letter to the applicant.`,
  },
  {
    title: "Supplementary Equity",
    text: `Where 25% of the RSA balance(s) is not sufficient, the Mortgage Lender shall request for the payment of supplementary equity contribution from the applicant(s).`,
  },
  {
    title: "Mortgage Offer Issuance",
    text: `Upon confirmation of payment of supplementary equity contribution, the Mortgage Lender shall issue a mortgage offer to the applicant(s).`,
  },
  {
    title: "Documents To PFA",
    text: `After receiving the mortgage offer letter, the Mortgage Lender shall forward a copy of the mortgage offer letter and the under listed documents/ additional information to the applicant(s) Pension Fund Administrator:
· Copy of the mortgage application form
· Verified property offer letter, which should contain, at the minimum, the value of property, type of property and address of the property Loan amount, Equity contribution required, Bank account details of the applicant with the Mortgage Lender, Indemnity by the Mortgage Lender to the PFA on the use of the equity contribution. Page 13 of 18 Guidelines on Equity Contribution for RSA
· Residential Mortgage`,
  },
  {
    title: "Payment Difference Evidence",
    text: `Evidence of payment difference where 25% of RSA cannot cover the equity required`,
  },
  {
    title: "PFA Payment Request",
    text: `The applicant after receiving his/her mortgage offer letter, approach his/her Pension Fund Administrator (PFA) to request payment of his/her Equity Contribution for Residential Mortgage.`,
  },
  {
    title: "Application Form To PFA",
    text: `The applicant shall obtain and fill in an Application Form, with indemnity to the PFA, for the payment of his/her Equity Contribution for Residential Mortgage.`,
  },
  {
    title: "Joint PFA Application",
    text: `In a joint application, each party shall apply to their respective PFA with a copy of the mortgage offer letter.`,
  },
  {
    title: "PFA Application Details",
    text: `The application form shall contain the following minimum information:
· Full name of the RSA holder and RSA PIN
· Type of mortgage (single or joint mortgage)
· Full name and address of the Mortgage Lender
· Name and address of the property
· The type of property e.g. 1,2,3…. Bedrooms, Bungalow, Semi-detached or detached.
· Total value of the property
· Total value of RSA balance as at date of applying for RSA Statement
· Equity amount which shall be equal or less than 25% of the RSA balance
· Name of the spouse and RSA PIN (for joint mortgage only)
· Name of the spouse’s PFA (for joint mortgage only)
· The amount of equity payable by each party in a joint application
· Evidence of supplementary payment where 25% of the applicant’s RSA balance is below the required equity contribution for his/her residential mortgage.`,
  },
  {
    title: "PFA Documentation Review",
    text: `The PFA shall review the application form and the supporting documents received from the Mortgage Lender for completeness using a checklist of requirements as stipulated above within two working days. (Page 14 of 18 Guidelines on Equity Contribution for RSA Residential Mortgage).`,
  },
  {
    title: "Mandate File Update",
    text: `Upon successful completion of the documentation review, the PFA shall update the applicant’s Mandate File within two working days.`,
  },
  {
    title: "Exceptions Communication",
    text: `If any exceptions or discrepancies are identified during the documentation review, the PFA shall communicate the exceptions to the Mortgage Lender within two working days of identifying such exceptions.`,
  },
  {
    title: "RSA Balance Validation",
    text: `The PFA shall compute and validate that the requested amount is not more than 25% of his/her RSA Balance.`,
  },
  {
    title: "Forward To Commission",
    text: `The PFA shall then process the application and forward same to the Commission within two working days of successful documentation review as listed above`,
  },
];

const RSA = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const activeStep = rsaSteps[activeIndex];
  const progress = ((activeIndex + 1) / rsaSteps.length) * 100;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#f8f4ed] text-slate-950"
    >
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2600&q=90')",
        }}
      />

      <div className="fixed inset-0 z-0 bg-white/82 backdrop-blur-[2px]" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span className="animate-pulse text-[18rem] font-black leading-none text-red-700/[0.04] sm:text-[26rem] lg:text-[34rem]">
          25%
        </span>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(185,28,28,0.2), transparent 24%)`,
        }}
      />

      <section className="relative z-10 px-5 pb-16 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white/92 p-8 text-center shadow-[0_45px_130px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-12 lg:p-16 animate-[heroReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/10 blur-[60px]" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-950/10 blur-[70px]" />

            <div className="relative mx-auto max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700">
                RSA Mortgage Guide
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Unlock your RSA. Own your home.
              </h1>

              <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
                HAGGAI MORTGAGE BANK LTD GUIDELINES ON ACCESSING RETIREMENT
                SAVINGS ACCOUNT (RSA) BALANCE TOWARDS PAYMENT OF EQUITY
                CONTRIBUTION FOR RESIDENTIAL MORTGAGE BY RSA HOLDERS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 relative overflow-hidden bg-slate-950 text-center text-white shadow-[0_35px_110px_rgba(0,0,0,0.28)] animate-[panelRise_950ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/92 to-red-950/80" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-700/20 blur-[70px]" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-[70px]" />

            <div className="relative p-8 sm:p-12">
              <div className="group mx-auto flex h-64 w-64 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-center backdrop-blur-xl transition duration-700 hover:rotate-6 hover:scale-105 hover:bg-red-700 sm:h-72 sm:w-72">
                <div>
                  <p className="text-8xl font-black leading-none sm:text-9xl">
                    25%
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-white/60 group-hover:text-white">
                    RSA Balance
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-red-200">
                  Active Step
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
                  {activeStep.title}
                </h2>

                <p className="mt-6 whitespace-pre-line text-base leading-8 text-white/70">
                  {activeStep.text}
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-3xl">
                <div className="mb-3 flex justify-between text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-2 overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-red-600 transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <Link
                to="/open-account"
                className="group relative mt-9 inline-flex overflow-hidden bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Open Relationship Account</span>
              </Link>
            </div>
          </div>

          <div className="mb-8 overflow-hidden bg-white/90 p-5 text-center shadow-[0_25px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-red-700">
              Click Any Stage
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {rsaSteps.map((step, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative h-14 w-14 shrink-0 overflow-hidden text-sm font-black transition duration-500 ${
                      active
                        ? "bg-red-700 text-white shadow-xl shadow-red-900/20"
                        : "bg-[#f8f4ed] text-slate-500 hover:bg-slate-950 hover:text-white"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rsaSteps.map((step, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative min-h-[260px] overflow-hidden p-7 text-left shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition duration-700 hover:-translate-y-3 hover:shadow-[0_35px_110px_rgba(0,0,0,0.22)] ${
                    active
                      ? "bg-red-700 text-white md:col-span-2"
                      : "bg-white text-slate-950"
                  } ${
                    index % 2 === 0
                      ? "animate-[cinemaLeft_900ms_cubic-bezier(.16,1,.3,1)_both]"
                      : "animate-[cinemaRight_900ms_cubic-bezier(.16,1,.3,1)_both]"
                  }`}
                  style={{
                    animationDelay: `${Math.min(index * 45, 800)}ms`,
                  }}
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 transition duration-500 group-hover:w-2 ${
                      active ? "bg-white" : "bg-red-700"
                    }`}
                  />

                  <div
                    className={`absolute -right-24 -top-24 h-64 w-64 rounded-full transition duration-700 group-hover:scale-150 ${
                      active ? "bg-white/10" : "bg-red-700/5"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <span
                        className={`flex h-16 w-16 items-center justify-center text-xl font-black transition duration-500 group-hover:rotate-3 ${
                          active
                            ? "bg-white text-red-700"
                            : "bg-[#f8f4ed] text-red-700 group-hover:bg-red-700 group-hover:text-white"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* <span className="text-4xl font-light transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span> */}
                    </div>

                    <h3 className="mt-7 text-2xl font-black tracking-[-0.04em]">
                      {step.title}
                    </h3>

                    <p
                      className={`mt-5 whitespace-pre-line text-base leading-7 ${
                        active
                          ? "text-white/80"
                          : "line-clamp-5 text-slate-600"
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 overflow-hidden bg-white p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Final Call
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Take decision today towards owning your dream home.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Take decision today towards owning your dream home by opening a
              relationship account with us today at Haggai Mortgage Bank Ltd,
              simply by visiting the link –
              https://www.accountopening.Haggaibank.com/
            </p>

            <Link
              to="/open-account"
              className="mt-8 inline-flex bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Open Account
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes heroReveal {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.96);
              clip-path: inset(100% 0 0 0);
              filter: blur(18px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              clip-path: inset(0 0 0 0);
              filter: blur(0);
            }
          }

          @keyframes panelRise {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.96);
              filter: blur(16px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes cinemaLeft {
            0% {
              opacity: 0;
              transform: translateX(-70px) rotate(-1deg) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes cinemaRight {
            0% {
              opacity: 0;
              transform: translateX(70px) rotate(1deg) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default RSA;