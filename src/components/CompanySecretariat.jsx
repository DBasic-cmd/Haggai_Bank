import React from "react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90",
    label: "Corporate Governance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90",
    label: "Shareholder Records",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    label: "Official Documentation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=90",
    label: "Financial Statements",
  },
];

const documents = [
  {
    title: "Proxy Form 2020 AGM",
    type: "AGM Document",
    href: "/FORMS/PROXY FORM(2020).pdf",
  },
  {
    title: "Shareholders E-Dividend Form",
    type: "Shareholder Form",
    href: "/FORMS/E-DIVIDEND Form.pdf",
  },
];

const financialStatements = [
  {
    title: "HMB 2020 Financial Statements",
    type: "Financial Statement",
    href: "/FORMS/HAGGAI Mortgage Bank 2020 FS_Reviewed.pdf",
  },
];

const CompanySecretariat = () => {
  const scrollToDocuments = () => {
    document.getElementById("secretariat-documents")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#f8f4ed] text-slate-950 transition-colors duration-300 dark:bg-[#05070d] dark:text-white">
      <section className="relative min-h-[82vh] overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={`${slide.label}-${index}`}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                animation: "secretariatHeroCycle 32s infinite",
                animationDelay: `${index * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/68 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-full border-r border-white/10 bg-black/10 backdrop-blur-[1px] lg:w-[48%]" />

        <div className="relative z-20 mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-10 lg:px-16 xl:px-6">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-red-500" />

              <p className="text-xs font-black uppercase tracking-[0.38em] text-white/80">
                Haggai Mortgage Bank Limited
              </p>
            </div>

            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-400">
              Company Secretariat
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              Official shareholder documents and corporate records.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Access company secretariat documents, shareholder forms, AGM
              materials, and financial statement references for Haggai Mortgage
              Bank.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToDocuments}
                className="group relative overflow-hidden bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-red-800"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">View Documents</span>
              </button>

              {/* <a
                href="mailto:info@haggaibank.com"
                className="border border-white/35 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-500 hover:bg-white hover:text-slate-950"
              >
                Contact the Bank
              </a> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden max-w-sm border border-white/15 bg-black/35 p-6 text-white backdrop-blur-xl lg:block">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-200">
            Corporate Records
          </p>

          <p className="mt-3 text-2xl font-black leading-tight">
            Access official shareholder forms and financial statement
            references.
          </p>

          <button
            type="button"
            onClick={scrollToDocuments}
            className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
          >
            Browse documents →
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          {heroSlides.map((slide, index) => (
            <span
              key={`progress-${slide.label}-${index}`}
              className="h-[3px] w-12 overflow-hidden bg-white/25"
            >
              <span
                className="block h-full w-full origin-left scale-x-0 bg-red-600"
                style={{
                  animation: "secretariatHeroProgress 32s infinite",
                  animationDelay: `${index * 8}s`,
                }}
              />
            </span>
          ))}
        </div>
      </section>

      <section
        id="secretariat-documents"
        className="scroll-mt-28 px-5 py-24 sm:px-10 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
                Company Secretariat
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl">
                Documents and records available for download.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-white/60">
                Access company secretariat documents, shareholder forms, AGM
                materials, and financial statement references for Haggai
                Mortgage Bank.
              </p>
            </div>

            <div className="border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
              <div className="border-b border-slate-200 pb-7 dark:border-white/10">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
                  Available Documents for Download
                </p>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-white/10">
                {documents.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-8 py-7"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-white/35">
                        {item.type}
                      </p>

                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 transition group-hover:text-red-700 dark:text-white dark:group-hover:text-red-400">
                        {item.title}
                      </h3>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-300 text-xl transition group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white dark:border-white/15">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-12 border-t border-slate-300 pt-8 dark:border-white/10">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
                  HMB Financial Statements Links
                </p>

                <div className="mt-4 divide-y divide-slate-200 dark:divide-white/10">
                  {financialStatements.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-8 py-7"
                    >
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-white/35">
                          {item.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 transition group-hover:text-red-700 dark:text-white dark:group-hover:text-red-400">
                          {item.title}
                        </h3>
                      </div>

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-300 text-xl transition group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white dark:border-white/15">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes secretariatHeroCycle {
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

          @keyframes secretariatHeroProgress {
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

          @media (prefers-reduced-motion: reduce) {
            [style*="secretariatHeroCycle"],
            [style*="secretariatHeroProgress"] {
              animation: none !important;
            }

            [style*="secretariatHeroCycle"]:first-child {
              opacity: 1 !important;
              clip-path: inset(0 0 0 0) !important;
              transform: none !important;
            }
          }
        `}
      </style>
    </main>
  );
};

export default CompanySecretariat;