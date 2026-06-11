import React from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const initialFormData = {
  accountName: "",
  accountNumber: "",
  bvn: "",
  phoneNumber: "",
  emailAddress: "",
  address: "",
  acknowledged: false,
};

const DormantAccountForm = () => {
  const [formData, setFormData] = React.useState(initialFormData);
  const [page, setPage] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const requiredFields = [
    formData.accountName,
    formData.accountNumber,
    formData.bvn,
    formData.phoneNumber,
    formData.emailAddress,
    formData.address,
    formData.acknowledged,
  ];

  const completedFields = requiredFields.filter(Boolean).length;
  const completionPercentage = Math.round(
    (completedFields / requiredFields.length) * 100
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    setPage(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Dormant Account Reactivation Request - ${formData.accountNumber}`;

    const body = `
Dormant Account Reactivation Request

Account Name:
${formData.accountName}

Account Number:
${formData.accountNumber}

BVN:
${formData.bvn}

Phone Number:
${formData.phoneNumber}

Email Address:
${formData.emailAddress}

Address:
${formData.address}

Applicant has acknowledged the additional document requirement.

Additional documents should be sent with Account Number in the email subject to:
CustomerServiceOfficers@haggaibank.com
alwayson@haggaibank.com
`;

    window.location.href = `mailto:info@haggaibank.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setPage(1);
    setSubmitted(false);
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
        <span className="animate-pulse text-[7rem] font-black leading-none text-red-700/[0.04] sm:text-[14rem] lg:text-[21rem]">
          DORMANT
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
              Dormant Account
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Reactivate Your Account.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              When you submit this form, it will not automatically collect your
              details like name and email address unless you provide it yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative overflow-hidden bg-slate-950 p-8 text-white shadow-[0_35px_110px_rgba(0,0,0,0.25)] sm:p-10 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both] lg:sticky lg:top-32 lg:h-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-red-950/80" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/30 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
                Required
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
                Page {page} of 2
              </h2>

              <div className="mt-10">
                <div className="mb-3 flex justify-between text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  <span>Completion</span>
                  <span>{completionPercentage}%</span>
                </div>

                <div className="h-3 overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-red-600 transition-all duration-700"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  ["Account Name", formData.accountName],
                  ["Account Number", formData.accountNumber],
                  ["BVN", formData.bvn],
                  ["Phone Number", formData.phoneNumber],
                  ["Email Address", formData.emailAddress],
                  ["Address", formData.address],
                  ["Document Notice", formData.acknowledged],
                ].map(([item, complete], index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-4 border p-4 transition ${
                      complete
                        ? "border-red-700/40 bg-red-700/20"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center text-xs font-black ${
                        complete ? "bg-red-700 text-white" : "bg-white/10"
                      }`}
                    >
                      {complete ? "✓" : index + 1}
                    </span>

                    <span className="text-sm font-semibold text-white/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden bg-white p-7 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[slideFromRight_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-700/5 blur-xl" />

            {!submitted ? (
              <form onSubmit={page === 1 ? handleNext : handleSubmit}>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                  Dormant Account
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                  {page === 1
                    ? "Provide your account details."
                    : "Please Note!!"}
                </h2>

                {page === 1 ? (
                  <div className="mt-10 grid gap-6">
                    {[
                      ["1. Account Name", "accountName", "text"],
                      ["2. Account Number", "accountNumber", "text"],
                      ["3. BVN", "bvn", "text"],
                      ["4. Phone Number", "phoneNumber", "text"],
                      ["5. Email Address", "emailAddress", "email"],
                    ].map(([label, field, type]) => (
                      <div key={field}>
                        <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                          {label}
                        </label>

                        <input
                          required
                          type={type}
                          value={formData[field]}
                          onChange={(e) =>
                            handleChange(field, e.target.value)
                          }
                          placeholder="Enter your answer"
                          className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                        6. Address
                      </label>

                      <textarea
                        required
                        value={formData.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                        placeholder="Enter your answer"
                        rows={4}
                        className="mt-4 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-4 inline-flex w-fit overflow-hidden bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                      <span className="relative inline-flex items-center gap-3">
                        Next
                        <ArrowRight size={18} />
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="mt-10">
                    <div className="space-y-6 text-lg leading-8 text-slate-600">
                      <p>
                        To ensure a smooth and swift reactivation process,
                        please remember that the next step involves submitting
                        the following additional documents:
                      </p>

                      <div className="border border-slate-200 bg-[#f8f4ed] p-6">
                        <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">
                          A recent Utility Bill:
                        </h3>
                        <p className="mt-3">
                          This will help us verify your current residential
                          address. Ensure the utility bill is under your name
                          and the address matches with the one provided in the
                          reactivation form.
                        </p>
                      </div>

                      <div className="border border-slate-200 bg-[#f8f4ed] p-6">
                        <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">
                          Valid ID Card:
                        </h3>
                        <p className="mt-3">
                          A scanned copy of any government-issued ID card (e.g.,
                          driver's license, passport) is required. Please ensure
                          that the ID is currently valid and the details match
                          with the information provided on the form.
                        </p>
                      </div>

                      <div className="border border-slate-200 bg-[#f8f4ed] p-6">
                        <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">
                          Letter of Authorization:
                        </h3>
                        <p className="mt-3">
                          This should be written on your organization's official
                          letterhead. The letter should clearly state your
                          intention to reactivate your account with us and
                          authorize any necessary actions on your behalf.
                        </p>
                      </div>

                      <p>
                        Please send these documents with your Account Number in
                        the email subject to{" "}
                        <span className="font-bold text-red-700">
                          CustomerServiceOfficers@haggaibank.com
                        </span>{" "}
                        &{" "}
                        <span className="font-bold text-red-700">
                          alwayson@haggaibank.com
                        </span>{" "}
                        at your earliest convenience.
                      </p>

                      <p>
                        Once we have received and verified these documents,
                      </p>

                      <p>
                        We will proceed with the reactivation process as soon as
                        we get these documents.
                      </p>

                      <label className="flex cursor-pointer items-start gap-4 border border-red-700/20 bg-red-700/5 p-5">
                        <input
                          required
                          type="checkbox"
                          checked={formData.acknowledged}
                          onChange={(e) =>
                            handleChange("acknowledged", e.target.checked)
                          }
                          className="mt-1 h-5 w-5 accent-red-700"
                        />

                        <span className="text-base font-semibold leading-7 text-slate-700">
                          I understand that I must send the additional documents
                          with my Account Number in the email subject.
                        </span>
                      </label>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setPage(1)}
                        className="inline-flex items-center justify-center gap-3 border border-slate-300 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-slate-700 transition hover:border-red-700 hover:bg-red-700 hover:text-white"
                      >
                        <ArrowLeft size={18} />
                        Back
                      </button>

                      <button
                        type="submit"
                        className="group relative overflow-hidden bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                        <span className="relative">Submit</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto text-red-700" size={64} />

                <h2 className="mx-auto mt-7 max-w-3xl text-5xl font-black leading-tight tracking-[-0.055em]">
                  Dormant account request prepared.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Your email client should open with the completed request
                  addressed to info@haggaibank.com.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-9 bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                >
                  Submit Another Request
                </button>
              </div>
            )}
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
        `}
      </style>
    </main>
  );
};

export default DormantAccountForm;