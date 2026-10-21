import React, { useState } from "react";
import { PhoneCall, CheckCircle2 } from "lucide-react";

const GetACallBack = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.fullName,
      email: formData.emailAddress,
      category: "Call Back Request",
      message: `Request for a call back.\nPhone Number: ${formData.phoneNumber}`,
    };

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let result = {};
      try {
        result = await res.json();
      } catch (err) {
        // Fallback for non-JSON responses (like HTML 404 pages)
      }

      if (res.ok) {
        alert(`Callback request submitted successfully! Reference: ${result.ticketId}`);
        setSubmitted(true);
      } else {
        alert(`Submission failed: ${result.error?.message || result.message || 'Server error (status ' + res.status + ')'}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f4ed] text-slate-950 transition-colors duration-300 dark:bg-[#05070d] dark:text-white">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2500&q=90')",
        }}
      />

      <div className="fixed inset-0 z-0 bg-white/85 backdrop-blur-[2px] transition-colors duration-300 dark:bg-[#05070d]/90" />

      <div className="relative z-10 px-5 pt-40 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="overflow-hidden border border-transparent bg-white p-10 shadow-[0_40px_120px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 sm:p-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700 dark:text-red-400">
              Get A Call Back
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] text-slate-950 dark:text-white sm:text-7xl">
              Speak With A Haggai Expert.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-white/60">
              When you submit this form, it will not automatically collect your
              details like name and email address unless you provide it
              yourself.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 overflow-hidden border border-transparent bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)] dark:border-white/10 dark:bg-[#0c0f17] dark:shadow-black/30 sm:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-8">
                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                      1. Full Name
                    </label>

                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        updateField("fullName", e.target.value)
                      }
                      placeholder="Enter your answer"
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold text-slate-950 outline-none transition focus:border-red-700 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-red-500 dark:focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                      2. Phone Number
                    </label>

                    <input
                      required
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        updateField("phoneNumber", e.target.value)
                      }
                      placeholder="Enter your answer"
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold text-slate-950 outline-none transition focus:border-red-700 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-red-500 dark:focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
                      3. Email Address
                    </label>

                    <input
                      required
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) =>
                        updateField("emailAddress", e.target.value)
                      }
                      placeholder="Enter your answer"
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold text-slate-950 outline-none transition focus:border-red-700 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-red-500 dark:focus:bg-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-3 inline-flex w-fit items-center gap-3 bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                  >
                    Submit
                    <PhoneCall
                      size={18}
                      className="transition group-hover:rotate-12"
                    />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center">
                <CheckCircle2
                  size={70}
                  className="mx-auto text-red-700 dark:text-red-400"
                />

                <h2 className="mt-6 text-5xl font-black tracking-[-0.05em] text-slate-950 dark:text-white">
                  Request Submitted
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
                  Thank you for reaching out. A member of the Haggai Mortgage
                  Bank team will contact you using the details you provided.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetACallBack;