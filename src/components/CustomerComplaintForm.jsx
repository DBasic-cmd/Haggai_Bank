import React from "react";

const fields = [
  {
    id: "customerName",
    label: "Customer Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: "accountNumber",
    label: "Customer Account Number",
    type: "text",
    placeholder: "Enter your account number",
  },
  {
    id: "phone",
    label: "Customer Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "email",
    label: "Customer Email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    id: "complaintTitle",
    label: "Complaint Title",
    type: "text",
    placeholder: "Enter complaint title",
  },
];

const CustomerComplaintForm = () => {
  return (
    <main className="relative min-h-screen text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/45" />

      <section className="relative z-10 px-5 pb-20 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl text-white animate-[heroEnter_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-300">
              Customer Complaint Form
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Your concern deserves our attention.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">
              Submit your complaint securely to Haggai Mortgage Bank. Your
              details will only be collected when you provide them yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] animate-[formReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <aside className="relative overflow-hidden bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=90')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-950/70" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">
                    Required
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                    Complaint submission details.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-white/65">
                    Please provide accurate information so the appropriate team
                    can review, route, and respond to your complaint.
                  </p>

                  <div className="mt-10 border-t border-white/15 pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                      Submitted To
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      info@haggaibank.com
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {["Review", "Route", "Resolve"].map((item, index) => (
                      <div key={item} className="border border-white/10 p-4">
                        <p className="text-2xl font-black text-red-300">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <form
                action="mailto:info@haggaibank.com"
                method="POST"
                encType="text/plain"
                className="bg-white p-8 sm:p-10 lg:p-12"
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className={`group relative ${
                        field.id === "complaintTitle" ? "sm:col-span-2" : ""
                      } animate-[fieldIn_800ms_cubic-bezier(.16,1,.3,1)_both]`}
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <label
                        htmlFor={field.id}
                        className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                      >
                        {index + 1}. {field.label}
                      </label>

                      <input
                        id={field.id}
                        name={field.label}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                      />
                    </div>
                  ))}

                  <div
                    className="group relative sm:col-span-2 animate-[fieldIn_800ms_cubic-bezier(.16,1,.3,1)_both]"
                    style={{ animationDelay: "540ms" }}
                  >
                    <label
                      htmlFor="complaintDetails"
                      className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                    >
                      6. Complaint Details
                    </label>

                    <textarea
                      id="complaintDetails"
                      name="Complaint Details"
                      required
                      rows="8"
                      placeholder="Enter your complaint details"
                      className="mt-4 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-slate-500">
                    By submitting, you confirm that the information provided is
                    accurate to the best of your knowledge.
                  </p>

                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-red-700 px-9 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition duration-500 hover:-translate-y-1 hover:bg-red-800"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <span className="relative">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes heroEnter {
            0% {
              opacity: 0;
              transform: translateY(50px);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes formReveal {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.96);
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

          @keyframes fieldIn {
            0% {
              opacity: 0;
              transform: translateX(42px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default CustomerComplaintForm;