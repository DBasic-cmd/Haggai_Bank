import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* White Overlay */}
      <div className="fixed inset-0 z-0 bg-white/75 backdrop-blur-[2px]" />

      <section className="relative z-10 px-5 pt-40 pb-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
            Account Opening
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl">
            Open Your Account
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Begin your banking relationship with Haggai Mortgage Bank. Before
            proceeding, please review our Data Consent Declaration which
            explains how your personal information, BVN, NIN, KYC documents and
            regulatory verification details are collected and processed.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            <Link
              to="/open-account/data-consent"
              className="group overflow-hidden border border-slate-200 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-2"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                Required
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Data Consent Declaration
              </h2>

              <p className="mt-5 text-slate-600 leading-8">
                Review and acknowledge how your information is collected,
                verified and processed during account opening.
              </p>

              <span className="mt-8 inline-block text-red-700 font-semibold">
                View Declaration →
              </span>
            </Link>

            <div className="border border-dashed border-slate-300 bg-white/80 p-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                Coming Next
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Digital Account Opening Form
              </h2>

              <p className="mt-5 text-slate-600 leading-8">
                The online account opening workflow will be integrated here.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default OpenAccount;