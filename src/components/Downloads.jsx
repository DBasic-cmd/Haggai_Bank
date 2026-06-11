import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";

const downloads = [
  {
    title: "Haggai Account Opening Form Individual",
    category: "Account Opening",
    url: "#",
  },
  {
    title: "NMRC Application Form",
    category: "Mortgage",
    url: "#",
  },
  {
    title: "Terms & Conditions",
    category: "Legal",
    url: "#",
  },
  {
    title: "Mortgage Application Form",
    category: "Mortgage",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Mortgage%20Application%20Form.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9Nb3J0Z2FnZSBBcHBsaWNhdGlvbiBGb3JtLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI2MzIsImV4cCI6MTgxMjcyODYzMn0.E8AW0E5sBpfKs0ZoIlYlwkdBSOC54Rnbeaj55UupBc0",
  },
  {
    title: "Prerequisites For a Loan - Individual",
    category: "Loans",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Loan%20Prerequisites.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9Mb2FuIFByZXJlcXVpc2l0ZXMucGRmIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTE5MjYxOSwiZXhwIjoxODEyNzI4NjE5fQ.lttQE7tMAfxPfKpDxaQhNGloNDmV9lO-n-o7GBvxaSU",
  },
  {
    title: "Prerequisites For a Loan - Churches",
    category: "Loans",
    url: "#",
  },
  {
    title: "Funds Transfer Form",
    category: "Banking",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Fund%20Transfer%20Form%20(1).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9GdW5kIFRyYW5zZmVyIEZvcm0gKDEpLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI1NzQsImV4cCI6MTgxMjcyODU3NH0.TIRbz4A5mOX72CsPlUKBBoYxQ-mdANGrU0-xKcYMBgc",
  },
  {
    title: "Treasury Agreement Form",
    category: "Treasury",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Treasury%20Agreement%20Form.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9UcmVhc3VyeSBBZ3JlZW1lbnQgRm9ybS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTkyNjYxLCJleHAiOjE4MTI3Mjg2NjF9.J0mN5RtAW4yIuK4eVdxheulT5QEtOXlLUU3VoO9hT7Q",
  },
  {
    title: "Outright Purchase Application Form",
    category: "Mortgage",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Outright%20Purchase%20Application%20Form.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9PdXRyaWdodCBQdXJjaGFzZSBBcHBsaWNhdGlvbiBGb3JtLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI2NDcsImV4cCI6MTgxMjcyODY0N30.9AketVBQfzKPm7QjSOeH9bK8JbkGfH1iLWWH_mDtH4I",
  },
  {
    title: "Shareholder Form for E-Dividend",
    category: "Investor Relations",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/E-Dividend%20Form%20(1).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9FLURpdmlkZW5kIEZvcm0gKDEpLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI1NTIsImV4cCI6MTgxMjcyODU1Mn0.FNPxru_yquLntfsluAy3Cxvb3HHdPLPn8K-NjidGQgQ",
  },
  {
    title: "Internet Banking Application Form",
    category: "Electronic Banking",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/iBank%20Application%20Form.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9pQmFuayBBcHBsaWNhdGlvbiBGb3JtLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI1ODYsImV4cCI6MTgxMjcyODU4Nn0.YX_B68CiMJ8C3G_35Uzk56vBQBeJ2WO3CTG8ilkpE60",
  },
  {
    title: "Internet Banking Agreement Form",
    category: "Electronic Banking",
    url: "#",
  },
  {
    title: "Dud Cheque Form",
    category: "Operations",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Dud%20Cheque%20Form%20(1).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9EdWQgQ2hlcXVlIEZvcm0gKDEpLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI1NDEsImV4cCI6MTgxMjcyODU0MX0.BC0gAz1_2IcnkC0ZWuyDSGjI6xw1shBzCoFZJik2l-k",
  },
  {
    title: "Customer Request Form",
    category: "Customer Service",
    url: "https://dkcxshokjuwsqtuaycry.supabase.co/storage/v1/object/sign/HAGGAI%20BANK%20WEBSITE/DOWNLOADS/Customer%20Request%20Form%20(1).pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDk5YzY3Yy00NmFlLTQ0ZjEtYTNiNi02MzY4ZGZhZTRhZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJIQUdHQUkgQkFOSyBXRUJTSVRFL0RPV05MT0FEUy9DdXN0b21lciBSZXF1ZXN0IEZvcm0gKDEpLnBkZiIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODExOTI0NzMsImV4cCI6MjA5NjU1MjQ3M30.EvmjKndntsdupRnAuuVebHv7Yj2kcKNN9PhAxrVDHWg",
  },
];

const Downloads = () => {
  const [query, setQuery] = React.useState("");
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const filteredDownloads = downloads.filter((item) => {
    const searchText = `${item.title} ${item.category}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
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
        <span className="animate-pulse text-[7rem] font-black leading-none text-red-700/[0.04] sm:text-[14rem] lg:text-[20rem]">
          DOWNLOADS
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

            <div className="relative mx-auto max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700">
                Downloads
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Resources At Your Disposal.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Why spend more time in the bank when you can do the paperwork
                right there? Check here to see the paperwork you need and
                download it in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
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
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search forms..."
                  className="w-full border border-slate-200 bg-[#f8f4ed] py-4 pl-12 pr-5 text-sm font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white shadow-[0_35px_110px_rgba(0,0,0,0.18)] animate-[vaultReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            {filteredDownloads.length > 0 ? (
              filteredDownloads.map((item, index) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between gap-6 border-b border-slate-200 px-6 py-8 transition-all duration-500 last:border-b-0 hover:bg-[#f8f4ed] sm:flex-row sm:items-center sm:px-8"
                  style={{
                    animation: "rowIn 700ms cubic-bezier(.16,1,.3,1) both",
                    animationDelay: `${index * 55}ms`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-700 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:w-2" />

                  <div className="flex items-start gap-6">
                    <span className="min-w-10 text-xl font-black text-red-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 transition duration-300 group-hover:text-red-700">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-red-700">
                    <span className="text-sm font-black uppercase tracking-[0.2em]">
                      Download
                    </span>

                    <ArrowUpRight
                      size={22}
                      className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                    />
                  </div>
                </a>
              ))
            ) : (
              <div className="p-10 text-center">
                <h3 className="text-3xl font-black tracking-[-0.04em]">
                  No document found.
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Try searching with a different form name or category.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 overflow-hidden bg-slate-950 p-8 text-center text-white shadow-[0_35px_110px_rgba(0,0,0,0.24)] sm:p-12 animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
              Need Assistance?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Can't find the document you're looking for?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contact our team and we'll be happy to help you locate the right
              form or guide for your banking request.
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