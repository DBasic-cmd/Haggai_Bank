import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calculator, RotateCcw } from "lucide-react";

const formatCurrency = (value) => {
  if (!value || Number.isNaN(value)) return "NGN 0";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(value);
};

const BorrowAmount = () => {
  const [grossAnnualIncome, setGrossAnnualIncome] = React.useState("");
  const [grossAnnualNetIncome, setGrossAnnualNetIncome] =
    React.useState("");
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const grossIncome = Number(grossAnnualIncome);
  const netIncome = Number(grossAnnualNetIncome);

  const monthlyNetIncome = netIncome / 12;
  const permissibleMonthlyRepayment = monthlyNetIncome / 3;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const resetCalculator = () => {
    setGrossAnnualIncome("4000000");
    setGrossAnnualNetIncome("3500000");
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

      <div className="fixed inset-0 z-0 bg-white/84 backdrop-blur-[2px]" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span className="animate-pulse text-[8rem] font-black leading-none text-red-700/[0.04] sm:text-[15rem] lg:text-[22rem]">
          BORROW
        </span>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(185,28,28,0.18), transparent 24%)`,
        }}
      />

      <section className="relative z-10 px-5 pb-16 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white/92 p-8 text-center shadow-[0_45px_130px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-12 lg:p-16 animate-[heroReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/10 blur-[70px]" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-950/10 blur-[70px]" />

            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700">
              Mortgage Amount
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Know How Much You Can Borrow.
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
              This simple calculation based on your annual net and gross income
              will help you discover how much you can borrow from Haggai. This
              will put you in control of your mortgage and not allow you to get
              overrun in debts. We are always on the lookout for you.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden bg-white p-7 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-700/5 blur-xl" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Loan Monthly Repayment Limit
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                Maximum Loan Repayments Permissible
              </h2>

              <div className="mt-10 grid gap-6">
                <div>
                  <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                    Gross annual income
                  </label>

                  <input
                    type="number"
                    value={grossAnnualIncome}
                    onChange={(e) => setGrossAnnualIncome(e.target.value)}
                    className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-2xl font-black outline-none transition focus:border-red-700 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                    Gross annual net income
                  </label>

                  <input
                    type="number"
                    value={grossAnnualNetIncome}
                    onChange={(e) => setGrossAnnualNetIncome(e.target.value)}
                    className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-2xl font-black outline-none transition focus:border-red-700 focus:bg-white"
                  />
                </div>

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="group inline-flex w-fit items-center gap-3 border border-slate-300 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-700 transition hover:border-red-700 hover:bg-red-700 hover:text-white"
                >
                  <RotateCcw size={17} />
                  Reset Sample
                </button>
              </div>
            </div>
          </div>

          <aside className="relative overflow-hidden bg-slate-950 p-7 text-white shadow-[0_35px_110px_rgba(0,0,0,0.25)] sm:p-10 animate-[slideFromRight_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-red-950/80" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/30 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
                Result
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
                Your repayment capacity.
              </h2>

              <div className="mt-10 grid gap-5">
                <div className="group bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/45">
                    Monthly net income
                  </p>

                  <p className="mt-4 text-4xl font-black text-white">
                    {formatCurrency(monthlyNetIncome)}
                  </p>
                </div>

                <div className="group bg-red-700 p-6 transition hover:-translate-y-1 hover:bg-red-800">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-red-100">
                    Amount permissible to service loan with monthly
                  </p>

                  <p className="mt-4 text-5xl font-black text-white">
                    {formatCurrency(permissibleMonthlyRepayment)}
                  </p>
                </div>

                <div className="bg-white/10 p-6 backdrop-blur-xl">
                  <div className="mb-3 flex justify-between text-xs font-black uppercase tracking-[0.2em] text-white/45">
                    <span>Repayment ratio</span>
                    <span>33.33%</span>
                  </div>

                  <div className="h-3 overflow-hidden bg-white/10">
                    <div className="h-full w-1/3 bg-red-600 transition-all duration-700" />
                  </div>
                </div>

                <Link
                  to="/resources/mortgage-calculator"
                  className="group relative mt-2 inline-flex overflow-hidden bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-1 hover:bg-red-700 hover:text-white"
                >
                  <span className="relative inline-flex items-center gap-2">
                    Go To Mortgage Calculator
                    <ArrowUpRight
                      size={18}
                      className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-12 max-w-7xl overflow-hidden bg-white p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-12 animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">
          <Calculator className="mx-auto text-red-700" size={42} />

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
            Plan smarter before you borrow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            This estimate is designed to guide your mortgage planning. For a
            complete assessment, speak with a Haggai Mortgage advisor.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/#contact"
              className="bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Contact Us
            </Link>

            <Link
              to="/open-account"
              className="border border-slate-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-1 hover:border-red-700 hover:bg-red-700 hover:text-white"
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

          @keyframes slideFromLeft {
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

          @keyframes slideFromRight {
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

          @keyframes panelRise {
            0% {
              opacity: 0;
              transform: translateY(70px) scale(0.97);
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

export default BorrowAmount;