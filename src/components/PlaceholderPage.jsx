import React from "react";

const PlaceholderPage = ({ title }) => {
  return (
    <main className="min-h-screen bg-[#f7f3ef] px-5 pb-24 pt-40 text-slate-950 transition-colors duration-300 dark:bg-[#05070d] dark:text-white sm:px-10 lg:px-16 xl:px-24">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
          Haggai Mortgage Bank
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
          Content for this page will be added .
        </p>
      </section>
    </main>
  );
};

export default PlaceholderPage;