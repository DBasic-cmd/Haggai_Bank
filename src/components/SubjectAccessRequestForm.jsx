import React from "react";

const rights = [
  "Confirmation that your personal data is being processed",
  "Access to your personal data",
  "How we use your personal data and why",
  "Details of data sharing or transfers",
  "How long we hold your personal data",
  "Your rights under the NDPR",
];

const infoPanels = [
  {
    title: "No Standard Fee",
    text: "No fee is payable under normal circumstances. A reasonable fee may apply for manifestly unfounded, excessive, or repetitive requests.",
  },
  {
    title: "Identity Verification",
    text: "After receiving your request, we may contact you to request supporting information and/or proof of identity to safeguard your privacy.",
  },
  {
    title: "Response Timeline",
    text: "We will respond to subject access requests within one month of receipt and aim to provide required information within the same period.",
  },
  {
    title: "Alternative Submission",
    text: "You do not have to use this form. You may write to us by email or post using the same contact details.",
  },
];

const fields = [
  { id: "title", label: "Title", type: "text", placeholder: "Enter your title" },
  {
    id: "forenames",
    label: "Forename(s)",
    type: "text",
    placeholder: "Enter your forename(s)",
  },
  {
    id: "surname",
    label: "Surname",
    type: "text",
    placeholder: "Enter your surname",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    full: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
  },
];

const SubjectAccessRequestForm = () => {
  const [openPanel, setOpenPanel] = React.useState(0);

  return (
    <main className="relative min-h-screen text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/55" />

      <section className="relative z-10 px-5 pb-20 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl text-white animate-[heroEnter_950ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-300">
              Subject Access Request Form
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Access. Transparency. Control.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">
              Under the Nigeria Data Protection Regulation, you have the right
              to know how your personal data is collected, processed, stored,
              and shared by Haggai Mortgage Bank Limited.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {rights.map((right, index) => (
              <div
                key={right}
                className="group relative overflow-hidden bg-white/90 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-700 hover:-translate-y-3 hover:bg-white"
                style={{
                  animation: `rightsIn 850ms cubic-bezier(.16,1,.3,1) both`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />

                <p className="relative text-xs font-black uppercase tracking-[0.3em] text-red-700">
                  Right {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="relative mt-5 text-2xl font-black leading-tight tracking-[-0.04em]">
                  {right}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden bg-white/92 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl animate-[panelLeft_950ms_cubic-bezier(.16,1,.3,1)_both] sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Important Information
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
              Before making your request.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Haggai Mortgage Bank Limited collects, holds, and processes
              certain personal data of its customers. As a data subject, you
              have a legal right under the NDPR effective 25th January, 2019 to
              find out about our use of your personal data.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Return By Email
              </p>

              <p className="mt-3 text-xl font-black text-red-700">
                audit@haggaibank.com
              </p>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Return By Post
              </p>

              <p className="mt-3 text-base font-semibold leading-7 text-slate-700">
                119, Bode Thomas Street, Surulere, Lagos State
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {infoPanels.map((panel, index) => {
              const isOpen = openPanel === index;

              return (
                <button
                  key={panel.title}
                  type="button"
                  onClick={() => setOpenPanel(isOpen ? null : index)}
                  className="group w-full overflow-hidden bg-white/92 text-left shadow-xl shadow-black/10 backdrop-blur-xl transition duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
                  style={{
                    animation: `panelRight 900ms cubic-bezier(.16,1,.3,1) both`,
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="flex items-center justify-between gap-6 p-7">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                        {panel.title}
                      </h3>
                    </div>

                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 text-2xl transition duration-500 ${
                        isOpen
                          ? "rotate-45 border-red-700 bg-red-700 text-white"
                          : "group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid overflow-hidden transition-all duration-700 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="border-t border-slate-100 px-7 pb-7 pt-5 text-base leading-8 text-slate-600">
                        {panel.text}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden bg-white shadow-[0_40px_120px_rgba(0,0,0,0.38)] animate-[formReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <aside className="relative overflow-hidden bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=90')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-950/75" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">
                    Request Form
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                    Personal data access request.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-white/68">
                    By completing this form, you are making a subject access
                    request under the NDPR for personal data collected,
                    processed, and held about you by Haggai Mortgage Bank.
                  </p>

                  <div className="mt-10 border-t border-white/15 pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                      Submitted To
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      audit@haggaibank.com
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {["Receive", "Verify", "Respond"].map((item, index) => (
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
                action="mailto:audit@haggaibank.com"
                method="POST"
                encType="text/plain"
                className="bg-white p-8 sm:p-10 lg:p-12"
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className={`group relative ${
                        field.full ? "sm:col-span-2" : ""
                      } animate-[fieldIn_850ms_cubic-bezier(.16,1,.3,1)_both]`}
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
                    className="group relative sm:col-span-2 animate-[fieldIn_850ms_cubic-bezier(.16,1,.3,1)_both]"
                    style={{ animationDelay: "630ms" }}
                  >
                    <label
                      htmlFor="informationRequested"
                      className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                    >
                      7. Information Being Requested
                    </label>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Please provide specific details, including relevant dates,
                      of the information being requested and any additional
                      information that may help us locate your personal data and
                      confirm your identity.
                    </p>

                    <textarea
                      id="informationRequested"
                      name="Information Being Requested"
                      required
                      rows="9"
                      placeholder="Enter your request details"
                      className="mt-5 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-slate-500">
                    When you submit this form, it will not automatically collect
                    your details unless you provide them yourself.
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

          @keyframes rightsIn {
            0% {
              opacity: 0;
              transform: translateY(70px) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes panelLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px) rotate(-1deg) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes panelRight {
            0% {
              opacity: 0;
              transform: translateX(100px) rotate(1deg) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) rotate(0) scale(1);
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

export default SubjectAccessRequestForm;