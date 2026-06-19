import React from "react";
import { Link } from "react-router-dom";

const formatCurrency = (value) => {
  if (!value || Number.isNaN(value)) return "NGN 0";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
};

const MortgageCalculator = () => {
  const [startMonth, setStartMonth] = React.useState("Jan");
  const [startYear, setStartYear] = React.useState("2020");
  const [loanAmount, setLoanAmount] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [durationType, setDurationType] = React.useState("years");
  const [duration, setDuration] = React.useState("");
  const [result, setResult] = React.useState(null);

  const calculateMortgage = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const period = Number(duration);

    if (!principal || !annualRate || !period) {
      setResult(null);
      return;
    }

    const months = durationType === "years" ? period * 12 : period;
    const monthlyRate = annualRate / 100 / 12;

    const monthlyPayment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    const totalRepayment = monthlyPayment * months;
    const interestPaid = totalRepayment - principal;

    setResult({
      months,
      monthlyPayment,
      totalRepayment,
      interestPaid,
    });
  };

  const resetCalculator = () => {
    setLoanAmount("");
    setInterestRate("");
    setDuration("");
    setResult(null);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f4ed] text-slate-950">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2600&q=90')",
        }}
      />

      <div className="fixed inset-0 z-0 bg-white/82 backdrop-blur-[2px]" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span className="animate-pulse text-[12rem] font-black leading-none text-red-700/[0.04] sm:text-[22rem] lg:text-[30rem]">
          ₦
        </span>
      </div>

      <section className="relative z-10 px-5 pb-16 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white/92 p-8 text-center shadow-[0_45px_130px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-12 lg:p-16 animate-[heroReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/10 blur-[70px]" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-950/10 blur-[70px]" />

            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700">
              Mortgage Calculator By Reducing Balance
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Do the Maths Easily.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Know how much repayment you will need to make each month on your
              mortgage from the comfort of your home. Please note that this is
              only a guide and is not absolute.
            </p>

            {/* <Link
              to="/resources/mortgage-calculator-annuity"
              className="mt-8 inline-flex border border-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-red-700 transition hover:bg-red-700 hover:text-white"
            >
              Click here to calculate by annuity
            </Link> */}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden bg-white p-7 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-700/5 blur-xl" />

            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Loan Information
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              Build your mortgage scenario.
            </h2>

            <div className="mt-10 grid gap-6">
              <div>
                <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                  Select the start date:
                </label>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <select
                    value={startMonth}
                    onChange={(e) => setStartMonth(e.target.value)}
                    className="w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                  >
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month) => (
                      <option key={month}>{month}</option>
                    ))}
                  </select>

                  <input
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                    className="w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                  Enter the loan amount(NGN):
                </label>

                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Amount"
                  className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-2xl font-black outline-none transition focus:border-red-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                  Enter the annual interest rate:
                </label>

                <div className="mt-4 flex overflow-hidden border border-slate-200 bg-[#f8f4ed] focus-within:border-red-700 focus-within:bg-white">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="Interest Rate"
                    className="w-full bg-transparent px-5 py-5 text-2xl font-black outline-none"
                  />

                  <span className="flex items-center bg-red-700 px-6 text-2xl font-black text-white">
                    %
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                  Calculate based on months or years?
                </label>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <select
                    value={durationType}
                    onChange={(e) => setDurationType(e.target.value)}
                    className="w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>

                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder={durationType === "years" ? "Years" : "Months"}
                    className="w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={calculateMortgage}
                  className="group relative flex-1 overflow-hidden bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                  <span className="relative">Calculate</span>
                </button>

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="border border-slate-300 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-slate-700 transition hover:border-red-700 hover:bg-red-700 hover:text-white"
                >
                  Reset
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
                Your estimated repayment.
              </h2>

              <div className="mt-10 grid gap-5">
                <div className="bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/45">
                    Monthly Repayment
                  </p>
                  <p className="mt-4 text-4xl font-black text-white">
                    {formatCurrency(result?.monthlyPayment)}
                  </p>
                </div>

                <div className="bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/45">
                    Interest Paid NGN
                  </p>
                  <p className="mt-4 text-4xl font-black text-white">
                    {formatCurrency(result?.interestPaid)}
                  </p>
                </div>

                <div className="bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/15">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/45">
                    Total Repayment
                  </p>
                  <p className="mt-4 text-4xl font-black text-white">
                    {formatCurrency(result?.totalRepayment)}
                  </p>
                </div>

                <div className="bg-red-700 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-red-100">
                    Loan Timeline
                  </p>
                  <p className="mt-4 text-2xl font-black">
                    {result ? `${result.months} months` : "Awaiting input"}
                  </p>
                  <p className="mt-2 text-white/70">
                    Start date: {startMonth} {startYear}
                  </p>
                </div>
              </div>
            </div>
          </aside>
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
        `}
      </style>
    </main>
  );
};

export default MortgageCalculator;