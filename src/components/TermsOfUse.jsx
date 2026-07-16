import React from "react";

const termsHeroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90",
    label: "Clear Digital Terms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90",
    label: "Responsible Banking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    label: "Secure Online Services",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=90",
    label: "Trusted Information",
  },
];

const termsSections = [
  {
    number: "01",
    title: "General",
    body: `1.1. This agreement governs your use of the Haggai Mortgage Bank Limited information service, including Discussion Areas, which is operated by Haggai Mortgage Bank Limited. Additional terms and conditions of use applicable to specific areas of the Service may also be posted in such areas and, together with this agreement, govern your use of those areas.

1.2. Haggai Mortgage Bank Limited reserves the right, in its discretion, to change or modify all or any part of this Agreement at any time, effective immediately upon notice published on the Service. Your continued use of the Service constitutes your binding acceptance of these terms and conditions, including any changes or modifications made by Haggai Mortgage Bank Limited. If at any time the terms and conditions are no longer acceptable to you, you should immediately cease all use of the Service.`,
  },
  {
    number: "02",
    title: "Use of Content",
    body: `2.1. You acknowledge that the Service contains information, software, photographs, audio and video clips, graphics, links, and other material that are protected by copyright, trademark, or other proprietary rights of Haggai Mortgage Bank Limited or third parties. Users of the Service may use the Content only for personal, non-commercial use.

2.2. You may not modify, publish, transmit, transfer, sell, reproduce, create derivative works from, distribute, perform, display, or exploit any Content, in whole or in part, except as expressly permitted in this Agreement.

2.3. You may download or copy Content only for your own personal noncommercial use if all copyright and other notices are maintained. No copying, storage, redistribution, or publication of any Content is permitted without express permission, except as permitted by copyright laws.`,
  },
  {
    number: "03",
    title: "No Endorsement",
    body: `3.1. Haggai Mortgage Bank Limited does not represent or endorse the accuracy or reliability of any Content posted on any Interactive Area. Any reliance upon such Content shall be at your sole risk.

3.2. The Service may contain links to external sites owned and operated by third parties. Haggai Mortgage Bank Limited is not responsible for the availability of, or content located on or through, any external site.`,
  },
  {
    number: "04",
    title: "Indemnity",
    body: `You agree to indemnify, defend and hold Haggai Mortgage Bank Limited and its affiliates, officers, directors, owners, agents, information providers and licensors harmless from and against any claims, liability, losses, costs and expenses incurred in connection with any use or alleged use of the Service under your password by any person, whether or not authorized by you.`,
  },
  {
    number: "05",
    title: "Disclaimer of Warranties; Limitation of Liability",
    body: `5.1. Neither Haggai Mortgage Bank Limited nor any provider of third-party content warrants that the Service will be uninterrupted or error free. The Service and Content are distributed on an "as is, as available" basis. No warranties of any kind, express or implied, are made with respect to the Service, Content, products, or services sold through the Service.

5.2. Neither Haggai Mortgage Bank Limited, any third-party content provider nor their respective agents shall be liable for any direct, indirect, incidental, special or consequential damages arising out of the use of, or inability to use, the Service, even if advised of the possibility of such damages.`,
  },
  {
    number: "06",
    title: "Indemnity for Liability Instrument",
    body: `6.1. All liability instruments issued or purported to be issued by Haggai Mortgage Bank Limited, including Advance Payment Guarantee, Performance Bond, Retention Bond, Warranty Bond, Bank Guarantee, Bid Bond, Bid Security, Tender Guarantee, Tender Security, Standby Letter of Credit and others, shall require independent written verification or authentication by the Company Secretary or Legal Adviser of the Bank before any reliance can be placed on such instrument.

6.2. The Bank shall not be held liable to any party or beneficiary for any loss or damage of whatever nature, whether direct or indirect, suffered because of reliance placed on an unconfirmed or unverified instrument issued or purported to be issued by the Bank.`,
  },
];

const TermsOfUse = () => {
  const scrollToTerms = () => {
    document.getElementById("terms-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#f8f4ed] text-slate-950 transition-colors duration-300 dark:bg-[#05070d] dark:text-white">
      <section className="relative min-h-[82vh] overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          {termsHeroSlides.map((slide, index) => (
            <div
              key={`${slide.label}-${index}`}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                animation: "termsHeroImageCycle 32s infinite",
                animationDelay: `${index * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/25" />
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
              Terms of Use
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              General website terms of use.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              These terms govern your use of Haggai Mortgage Bank Limited’s
              information service, website content, interactive areas, linked
              resources, and related digital services.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToTerms}
                className="group relative overflow-hidden bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-500 hover:bg-red-800"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Read the Terms</span>
              </button>

              {/* <a
                href="mailto:info@haggaibank.com"
                className="border border-white/35 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-500 hover:bg-white hover:text-slate-950"
              >
                Contact the Bank
              </a> */}
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-1 gap-6 border-l border-white/20 pl-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-black text-white">
                  {String(termsSections.length).padStart(2, "0")}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  Main Clauses
                </p>
              </div>

              {/* <div>
                <p className="text-3xl font-black text-white">CBN</p>

                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  Licensed
                </p>
              </div> */}

              {/* <div>
                <p className="text-3xl font-black text-white">NDIC</p>

                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  Insured
                </p>
              </div> */}
            </div>

            <div className="mt-12 max-w-5xl border-t border-white/10 pt-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Head Office
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    119, Bode Thomas Street,
                    <br />
                    Surulere, Lagos State, Nigeria
                  </p>
                </div>

                <div className="border-white/10 sm:border-l sm:pl-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Email
                  </p>

                  <a
                    href="mailto:info@haggaibank.com"
                    className="mt-2 inline-flex text-sm text-white/80 transition hover:text-white"
                  >
                    info@haggaibank.com
                  </a>
                </div>

                <div className="border-white/10 sm:border-l sm:pl-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                    Regulatory Status
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Licensed by the Central Bank of Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden max-w-sm border border-white/15 bg-black/35 p-6 text-white backdrop-blur-xl lg:block">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-200">
            Important Notice
          </p>

          <p className="mt-3 text-2xl font-black leading-tight">
            Please read these terms carefully before using our digital services.
          </p>

          <button
            type="button"
            onClick={scrollToTerms}
            className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
          >
            Review clauses →
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          {termsHeroSlides.map((slide, index) => (
            <span
              key={`progress-${slide.label}-${index}`}
              className="h-[3px] w-12 overflow-hidden bg-white/25"
            >
              <span
                className="block h-full w-full origin-left scale-x-0 bg-red-600"
                style={{
                  animation: "termsHeroProgress 32s infinite",
                  animationDelay: `${index * 8}s`,
                }}
              />
            </span>
          ))}
        </div>
      </section>

      <section
        id="terms-content"
        className="scroll-mt-28 px-5 pb-16 pt-24 sm:px-10 lg:px-16 xl:px-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700 dark:text-red-400">
            Terms and Conditions
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-black leading-[1] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl">
              Important conditions governing your use of our website.
            </h2>

            <p className="text-base leading-8 text-slate-600 dark:text-white/60">
              Review each clause carefully. The navigation panel allows you to
              move directly to a particular section of these terms.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-32 sm:px-10 lg:grid-cols-[320px_1fr] lg:px-16 xl:px-6">
        <aside className="hidden lg:block">
          <div className="sticky top-32 border border-slate-200 bg-white/85 p-7 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
              Clauses
            </p>

            <div className="mt-7 space-y-3">
              {termsSections.map((section) => (
                <a
                  key={section.number}
                  href={`#term-${section.number}`}
                  className="group flex items-center gap-4 border-b border-slate-100 py-4 dark:border-white/10"
                >
                  <span className="text-xs font-black text-slate-400 transition group-hover:text-red-700 dark:text-white/35 dark:group-hover:text-red-400">
                    {section.number}
                  </span>

                  <span className="text-sm font-bold text-slate-700 transition group-hover:text-red-700 dark:text-white/70 dark:group-hover:text-red-400">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-9">
          {termsSections.map((section, index) => (
            <article
              id={`term-${section.number}`}
              key={section.number}
              className={`group relative scroll-mt-32 overflow-hidden border border-transparent bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur transition duration-700 hover:-translate-y-2 hover:border-red-700/10 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 sm:p-10 ${
                index % 2 === 0
                  ? "animate-[clauseLeft_950ms_cubic-bezier(.16,1,.3,1)_both]"
                  : "animate-[clauseRight_950ms_cubic-bezier(.16,1,.3,1)_both]"
              }`}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />
              <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />

              <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-slate-200 bg-[#f8f4ed] text-2xl font-black text-red-700 transition duration-700 group-hover:rotate-6 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white dark:border-white/10 dark:bg-white/[0.05] dark:text-red-400">
                  {section.number}
                </div>

                <div className="min-w-0">
                  <h2 className="text-3xl font-black leading-tight tracking-[-0.045em] text-slate-950 dark:text-white sm:text-4xl">
                    {section.title}
                  </h2>

                  <div className="my-6 h-px w-full bg-slate-200 dark:bg-white/10" />

                  <p className="whitespace-pre-line text-base leading-8 text-slate-600 dark:text-white/65">
                    {section.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes termsHeroImageCycle {
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

          @keyframes termsHeroProgress {
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

          @keyframes clauseLeft {
            0% {
              opacity: 0;
              transform: translateX(-110px) rotate(-1deg) scale(0.96);
              filter: blur(16px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes clauseRight {
            0% {
              opacity: 0;
              transform: translateX(110px) rotate(1deg) scale(0.96);
              filter: blur(16px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
              filter: blur(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [style*="termsHeroImageCycle"],
            [style*="termsHeroProgress"] {
              animation: none !important;
            }

            [style*="termsHeroImageCycle"]:first-child {
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

export default TermsOfUse;