import React from "react";

const channels = [
  {
    label: "Independent Reporting Channel",
    email: "whistleblowing.haggai@planetcapitalltd.com",
  },
  {
    label: "Haggai Mortgage Bank Channel",
    email: "whistleblower@haggaibank.com",
  },
];

const assurances = [
  {
    title: "Confidential Identity",
    text: "Your identity will remain strictly confidential throughout the reporting and review process.",
  },
  {
    title: "Thorough Review",
    text: "Every report is carefully reviewed to ensure concerns are properly assessed and addressed.",
  },
  {
    title: "Appropriate Action",
    text: "Where necessary, corrective action will be taken to prevent future occurrences.",
  },
];

const WhistleBlower = () => {
  return (
    <main className="relative min-h-screen text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/50" />

      <section className="relative z-10 px-5 pb-20 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl text-white animate-[heroEnter_950ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-300">
              Whistle Blower
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Tell us how well we are doing.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78">
              If at any time you are dissatisfied with the conduct of any of our
              staff, please report it through any of our designated channels.
              We take all concerns seriously.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden bg-white/94 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl animate-[mainPanel_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <aside className="relative overflow-hidden bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/82 to-red-950/75" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">
                    Integrity Desk
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                    Speak up safely and confidentially.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-white/68">
                    Reports help us maintain professionalism, accountability,
                    ethical conduct, and institutional trust across Haggai
                    Mortgage Bank.
                  </p>

                  <div className="mt-10 border-t border-white/15 pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                      Confidentiality
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      Your identity remains protected.
                    </p>
                  </div>
                </div>
              </aside>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                  Report Channels
                </p>

                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em]">
                  You may send your report through any of these channels.
                </h2>

                <div className="mt-10 space-y-5">
                  {channels.map((channel, index) => (
                    <a
                      key={channel.email}
                      href={`mailto:${channel.email}`}
                      className="group relative block overflow-hidden border border-slate-200 bg-[#f8f4ed] p-7 transition duration-700 hover:-translate-y-2 hover:border-red-700 hover:bg-white hover:shadow-2xl hover:shadow-red-950/10"
                      style={{
                        animation:
                          "channelIn 850ms cubic-bezier(.16,1,.3,1) both",
                        animationDelay: `${index * 140}ms`,
                      }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />
                      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />

                      <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-700">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {channel.label}
                          </p>

                          <h3 className="mt-4 break-all text-2xl font-black tracking-[-0.04em] text-slate-950">
                            {channel.email}
                          </h3>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-300 text-xl transition duration-500 group-hover:rotate-45 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                          →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <p className="mt-10 text-base leading-8 text-slate-600">
                  Your feedback is vital in helping us maintain the highest
                  standards of professionalism and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {assurances.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden bg-white/92 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-700 hover:-translate-y-3 hover:bg-white"
              style={{
                animation: "assuranceIn 850ms cubic-bezier(.16,1,.3,1) both",
                animationDelay: `${index * 130}ms`,
              }}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />

              <p className="relative text-xs font-black uppercase tracking-[0.3em] text-red-700">
                Assurance {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="relative mt-5 text-3xl font-black tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="relative mt-5 text-base leading-8 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes heroEnter {
            0% {
              opacity: 0;
              transform: translateY(50px);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes mainPanel {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.96);
              clip-path: inset(100% 0 0 0);
              filter: blur(16px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              clip-path: inset(0 0 0 0);
              filter: blur(0);
            }
          }

          @keyframes channelIn {
            0% {
              opacity: 0;
              transform: translateX(70px);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }

          @keyframes assuranceIn {
            0% {
              opacity: 0;
              transform: translateY(70px) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default WhistleBlower;