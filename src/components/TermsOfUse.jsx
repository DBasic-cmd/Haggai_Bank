import React from "react";

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
  return (
    <main className="min-h-screen bg-[#f8f4ed] text-slate-950">
      <section className="relative overflow-hidden px-5 pb-28 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#f8f4ed]/90" />

        <div className="absolute right-0 top-0 hidden h-full w-[48%] overflow-hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center animate-[heroDrift_12s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90')",
              clipPath:
                "polygon(24% 0, 100% 0, 100% 100%, 3% 100%, 16% 67%, 0 33%)",
            }}
          />
          <div
            className="absolute inset-0 bg-red-700/10"
            style={{
              clipPath:
                "polygon(24% 0, 100% 0, 100% 100%, 3% 100%, 16% 67%, 0 33%)",
            }}
          />
        </div>

        <div className="absolute left-[6%] top-[21%] hidden h-44 w-44 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl animate-[floatOne_7s_ease-in-out_infinite] lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(0 0, 100% 18%, 82% 100%, 0 84%)",
            }}
          />
        </div>

        <div className="absolute bottom-[12%] left-[38%] hidden h-60 w-44 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl animate-[floatTwo_8s_ease-in-out_infinite] lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(18% 0, 100% 0, 82% 100%, 0 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl animate-[titleRise_900ms_ease_both]">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
              Term of Use
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              General website terms of use.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              These terms govern your use of Haggai Mortgage Bank Limited’s
              information service, website content, interactive areas, linked
              resources, and related digital services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-32 sm:px-10 lg:grid-cols-[320px_1fr] lg:px-16 xl:px-6">
        <aside className="hidden lg:block">
          <div className="sticky top-32 bg-white/80 p-7 shadow-2xl shadow-slate-900/5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Clauses
            </p>

            <div className="mt-7 space-y-3">
              {termsSections.map((section) => (
                <a
                  key={section.number}
                  href={`#term-${section.number}`}
                  className="group flex items-center gap-4 border-b border-slate-100 py-4"
                >
                  <span className="text-xs font-black text-slate-400 transition group-hover:text-red-700">
                    {section.number}
                  </span>
                  <span className="text-sm font-bold text-slate-700 transition group-hover:text-red-700">
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
              className={`group relative overflow-hidden bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur transition duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-10 ${
                index % 2 === 0
                  ? "animate-[clauseLeft_950ms_cubic-bezier(.16,1,.3,1)_both]"
                  : "animate-[clauseRight_950ms_cubic-bezier(.16,1,.3,1)_both]"
              }`}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />
              <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />

              <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-slate-200 bg-[#f8f4ed] text-2xl font-black text-red-700 transition duration-700 group-hover:rotate-6 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                  {section.number}
                </div>

                <div>
                  <h2 className="text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                    {section.title}
                  </h2>

                  <div className="my-6 h-px w-full bg-slate-200" />

                  <p className="whitespace-pre-line text-base leading-8 text-slate-600">
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
          @keyframes titleRise {
            0% {
              opacity: 0;
              transform: translateY(40px);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
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

          @keyframes heroDrift {
            0% {
              transform: scale(1.04) translateX(0);
            }

            100% {
              transform: scale(1.12) translateX(-2%);
            }
          }

          @keyframes floatOne {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-18px) rotate(-2deg);
            }
          }

          @keyframes floatTwo {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(20px) rotate(2deg);
            }
          }
        `}
      </style>
    </main>
  );
};

export default TermsOfUse;