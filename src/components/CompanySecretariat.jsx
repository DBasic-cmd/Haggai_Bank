import React from "react";

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
  return (
    <main className="min-h-screen bg-[#f8f4ed] text-slate-950">
      <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#f8f4ed]/88" />

        <div className="absolute right-0 top-0 hidden h-full w-[46%] overflow-hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90')",
              clipPath:
                "polygon(18% 0, 100% 0, 100% 100%, 0% 100%, 12% 68%, 0 34%)",
            }}
          />
          <div
            className="absolute inset-0 bg-red-700/15"
            style={{
              clipPath:
                "polygon(18% 0, 100% 0, 100% 100%, 0% 100%, 12% 68%, 0 34%)",
            }}
          />
        </div>

        <div className="absolute left-[7%] top-[22%] hidden h-44 w-44 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(0 0, 100% 14%, 86% 100%, 0 86%)",
            }}
          />
        </div>

        <div className="absolute bottom-[14%] left-[38%] hidden h-56 w-40 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(18% 0, 100% 0, 82% 100%, 0 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
              Company Secretariat
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Official shareholder documents and corporate records.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Access company secretariat documents, shareholder forms, AGM
              materials, and financial statement references for Haggai Mortgage
              Bank.
            </p>
          </div>

          <div className="mt-20 max-w-4xl bg-white/85 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-10">
            <div className="border-b border-slate-200 pb-7">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Available Documents for Download
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {documents.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between gap-8 py-7"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      {item.type}
                    </p>

                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] transition group-hover:text-red-700">
                      {item.title}
                    </h2>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-300 text-xl transition group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-slate-300 pt-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                HMB Financial Statements Links
              </p>

              <div className="mt-4 divide-y divide-slate-200">
                {financialStatements.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between gap-8 py-7"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                        {item.type}
                      </p>

                      <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] transition group-hover:text-red-700">
                        {item.title}
                      </h2>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-300 text-xl transition group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanySecretariat;