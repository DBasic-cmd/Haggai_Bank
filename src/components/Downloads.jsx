
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";

// ============================================================
// HAGGAI MORTGAGE BANK - DOCUMENT DOWNLOADS
// Local public folder: /public/documents/
// ============================================================

const downloads = [
  {
    title: "Haggai Account Opening Form Individual",
    category: "Account Opening",
    url: null,
  },
  {
    title: "NMRC Application Form",
    category: "Mortgage",
    url: null,
  },
  {
    title: "Terms & Conditions",
    category: "Legal",
    url: null,
  },
  {
    title: "Mortgage Application Form",
    category: "Mortgage",
    url: "/documents/Mortgage%20Application%20Form.pdf",
  },
  {
    title: "Prerequisites For a Loan - Individual",
    category: "Loans",
    url: "/documents/Loan%20Prerequisites.pdf",
  },
  {
    title: "Prerequisites For a Loan - Churches",
    category: "Loans",
    url: null,
  },
  {
    title: "Funds Transfer Form",
    category: "Banking",
    url: "/documents/Fund%20Transfer%20Form%20(1).pdf",
  },
  {
    title: "Treasury Agreement Form",
    category: "Treasury",
    url: "/documents/Treasury%20Agreement%20Form.pdf",
  },
  {
    title: "Outright Purchase Application Form",
    category: "Mortgage",
    url: "/documents/Outright%20Purchase%20Application%20Form.pdf",
  },
  {
    title: "Shareholder Form for E-Dividend",
    category: "Investor Relations",
    url: "/documents/E-Dividend%20Form%20.pdf",
  },
  {
    title: "E-Dividend Form (2)",
    category: "Investor Relations",
    url: "/documents/E-Dividend%20Form%20.pdf",
  },
  {
    title: "Internet Banking Application Form",
    category: "Electronic Banking",
    url: "/documents/iBank%20Application%20Form.pdf",
  },
  {
    title: "Internet Banking Agreement Form",
    category: "Electronic Banking",
    url: null,
  },
  {
    title: "Dud Cheque Form",
    category: "Operations",
    url: "/documents/Dud%20Cheque%20Form%20(1).pdf",
  },
  {
    title: "Customer Request Form",
    category: "Customer Service",
    url: "/documents/Customer%20Request%20Form%20.pdf",
  },
];

// ============================================================
// DOWNLOADS COMPONENT
// ============================================================

const Downloads = () => {
  const [query, setQuery] = React.useState("");
  const [mouse, setMouse] = React.useState({
    x: 50,
    y: 50,
  });

  // Filter documents by title or category
  const filteredDownloads = downloads.filter((item) => {
    const searchText =
      `${item.title} ${item.category}`.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  // Interactive background spotlight
  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setMouse({
      x:
        ((event.clientX - rect.left) /
          rect.width) *
        100,
      y:
        ((event.clientY - rect.top) /
          rect.height) *
        100,
    });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#f8f4ed] text-slate-950"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2600&q=90')",
        }}
      />

      {/* BACKGROUND OVERLAY */}
      <div className="fixed inset-0 z-0 bg-white/84 backdrop-blur-[2px]" />

      {/* BACKGROUND WATERMARK */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span className="animate-pulse text-[7rem] font-black leading-none text-red-700/[0.04] sm:text-[14rem] lg:text-[20rem]">
          DOWNLOADS
        </span>
      </div>

      {/* INTERACTIVE SPOTLIGHT */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(185,28,28,0.18), transparent 24%)`,
        }}
      />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative z-10 px-5 pb-16 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white/92 p-8 text-center shadow-[0_45px_130px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-12 lg:p-16 animate-[heroReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/10 blur-[70px]" />

            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-950/10 blur-[70px]" />

            <div className="relative mx-auto max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700">
                Downloads
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Resources At Your Disposal.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Why spend more time in the bank when you
                can do the paperwork right there? Check
                here to see the paperwork you need and
                download it in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT DOWNLOADS SECTION
      ===================================================== */}
      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">

          {/* SEARCH PANEL */}
          <div className="mb-8 overflow-hidden bg-white/92 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-xs font-black uppercase tracking-[0.32em] text-red-700">
                  Document Vault
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  Search available downloads
                </h2>
              </div>

              <div className="relative w-full md:max-w-sm">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Search forms..."
                  aria-label="Search documents"
                  className="w-full border border-slate-200 bg-[#f8f4ed] py-4 pl-12 pr-5 text-sm font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              DOCUMENT LIST
          ================================================= */}
          <div className="overflow-hidden bg-white shadow-[0_35px_110px_rgba(0,0,0,0.18)] animate-[vaultReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">

            {filteredDownloads.length > 0 ? (
              filteredDownloads.map((item, index) => {
                const isAvailable = Boolean(item.url);

                const rowClassName = `
                  group relative flex flex-col
                  justify-between gap-6
                  border-b border-slate-200
                  px-6 py-8
                  transition-all duration-500
                  last:border-b-0
                  sm:flex-row sm:items-center sm:px-8
                  ${
                    isAvailable
                      ? "hover:bg-[#f8f4ed]"
                      : "opacity-65"
                  }
                `;

                const rowContent = (
                  <>
                    {/* HOVER ACCENT */}
                    <div
                      className={`absolute left-0 top-0 h-full w-1 bg-red-700 opacity-0 transition duration-500 ${
                        isAvailable
                          ? "group-hover:opacity-100 group-hover:w-2"
                          : ""
                      }`}
                    />

                    {/* DOCUMENT INFORMATION */}
                    <div className="flex items-start gap-6">
                      <span className="min-w-10 text-xl font-black text-red-700">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div>
                        <h3
                          className={`text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 transition duration-300 ${
                            isAvailable
                              ? "group-hover:text-red-700"
                              : ""
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* DOWNLOAD ACTION */}
                    <div
                      className={`flex items-center gap-3 ${
                        isAvailable
                          ? "text-red-700"
                          : "text-slate-400"
                      }`}
                    >
                      <span className="text-sm font-black uppercase tracking-[0.2em]">
                        {isAvailable
                          ? "Download"
                          : "Coming Soon"}
                      </span>

                      {isAvailable && (
                        <ArrowUpRight
                          size={22}
                          className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                        />
                      )}
                    </div>
                  </>
                );

                const animationStyle = {
                  animation:
                    "rowIn 700ms cubic-bezier(.16,1,.3,1) both",
                  animationDelay: `${index * 55}ms`,
                };

                // Available PDFs open in a new tab.
                if (isAvailable) {
                  return (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={rowClassName}
                      style={animationStyle}
                      aria-label={`Open ${item.title} PDF`}
                    >
                      {rowContent}
                    </a>
                  );
                }

                // Missing documents do not create broken links.
                return (
                  <div
                    key={item.title}
                    className={rowClassName}
                    style={animationStyle}
                    aria-label={`${item.title} - not yet available`}
                  >
                    {rowContent}
                  </div>
                );
              })
            ) : (
              <div className="p-10 text-center">
                <h3 className="text-3xl font-black tracking-[-0.04em]">
                  No document found.
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Try searching with a different form name
                  or category.
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              ASSISTANCE SECTION
          ================================================= */}
          <div className="mt-12 overflow-hidden bg-slate-950 p-8 text-center text-white shadow-[0_35px_110px_rgba(0,0,0,0.24)] sm:p-12 animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
              Need Assistance?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Can't find the document you're looking
              for?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contact our team and we'll be happy to
              help you locate the right form or guide
              for your banking request.
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
                className="border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
              >
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAGE ANIMATIONS
      ===================================================== */}
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

          @keyframes vaultReveal {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.97);
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

          @keyframes rowIn {
            0% {
              opacity: 0;
              transform: translateX(-50px);
              filter: blur(10px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default Downloads;
