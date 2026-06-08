import React from "react";

const abridgedAccounts = [
  { title: "Abridged Account 2024", href: "src/assets/INVESTOR RELATIONS/AbrigedFS_2024.pdf" },
  { title: "Abridged Account 2023", href: "src/assets/INVESTOR RELATIONS/Abriged2023.pdf" },
  { title: "Abridged Account 2022", href: "src/assets/INVESTOR RELATIONS/ABRIDGED_ACCOUNTS_2022.pdf" },
  { title: "Abridged Account 2019", href: "src/assets/INVESTOR RELATIONS/abridgedaccount2019.pdf" },
  { title: "Abridged Account 2018", href: "" },
  { title: "Abridged Account 2017", href: "src/assets/INVESTOR RELATIONS/abridgedaccount2017.pdf" },
  { title: "Abridged Account 2016", href: "src/assets/INVESTOR RELATIONS/abridged2016.pdf" },
  { title: "Abridged Account 2015", href: "src/assets/INVESTOR RELATIONS/abridged2015.pdf" },
  { title: "Abridged Account 2014", href: "src/assets/INVESTOR RELATIONS/abridged2014.pdf" },
  { title: "Abridged Account 2013", href: "src/assets/INVESTOR RELATIONS/abridged2013.pdf" },
];

const financialStatements = [
  { title: "HMB 2019 Financial Statements", href: "src/assets/INVESTOR RELATIONS/hmb2019financialstatementscbn.pdf" },
  { title: "HMB 2020 Financial Statements", href: "src/assets/INVESTOR RELATIONS/HAGGAI Mortgage Bank 2020 FS_Reviewed.pdf" },
  { title: "HMB 2021 Financial Statements", href: "src/assets/INVESTOR RELATIONS/HAGGAI Mortgage Bank 2021 FS.pdf" },
  { title: "HMB 2022 Financial Statements", href: "src/assets/INVESTOR RELATIONS/HMB_FS_2022.pdf" },
  { title: "HMB 2023 Financial Statements", href: "src/assets/INVESTOR RELATIONS/HMB_FS_2023.pdf" },
  { title: "HMB 2024 Financial Statements", href: "src/assets/INVESTOR RELATIONS/AFS 2024 - HAGGAI MORTGAGE BANK LIMITED.pdf" },
];

const ReportLink = ({ item, index }) => {
  return (
    <a
      href={item.href}
      className="group relative flex items-center justify-between border-b border-slate-200 py-6 transition duration-300 hover:border-red-700"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-slate-950 transition duration-300 group-hover:text-red-700">
          {item.title}
        </h3>
      </div>

      <span className="flex h-11 w-11 items-center justify-center border border-slate-300 text-lg transition duration-300 group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white">
        →
      </span>
    </a>
  );
};

const InvestorRelations = () => {
  return (
    <main className="min-h-screen bg-[#f7f3ef] text-slate-950">
      <section className="relative overflow-hidden bg-[#070707] px-5 pb-24 pt-40 text-white sm:px-10 lg:px-16 xl:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(185,28,28,0.35),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.1),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.38em] text-red-400">
            Investor Relations
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            You can count on our figures.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            As a customer and a prospective investor, it is only right that you
            care about our numbers. Here are the audited balances made available
            for your perusal.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16 xl:px-6">
        <aside className="lg:sticky lg:top-32 lg:h-fit">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
            Reports Library
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
            Financial records and audited statements.
          </h2>
        </aside>

        <div className="space-y-20">
          <section>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-300 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                  Abridged Accounts
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                  Annual Abridged Account Links
                </h2>
              </div>

              <p className="hidden text-sm font-bold uppercase tracking-[0.22em] text-slate-400 sm:block">
                2013 — 2024
              </p>
            </div>

            <div>
              {abridgedAccounts.map((item, index) => (
                <ReportLink key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-300 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                  Financial Statements
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                  HMB Financial Statements Links
                </h2>
              </div>

              <p className="hidden text-sm font-bold uppercase tracking-[0.22em] text-slate-400 sm:block">
                2019 — 2024
              </p>
            </div>

            <div>
              {financialStatements.map((item, index) => (
                <ReportLink key={item.title} item={item} index={index} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default InvestorRelations;