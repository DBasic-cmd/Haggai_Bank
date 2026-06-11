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

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Call Back Request - ${formData.fullName}`;

    const body = `
GET A CALL BACK REQUEST

Full Name:
${formData.fullName}

Phone Number:
${formData.phoneNumber}

Email Address:
${formData.emailAddress}
`;

    window.location.href = `mailto:info@haggaibank.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f4ed]">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2500&q=90')",
        }}
      />

      <div className="fixed inset-0 z-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="relative z-10 px-5 pt-40 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="overflow-hidden bg-white p-10 shadow-[0_40px_120px_rgba(0,0,0,0.15)] sm:p-16">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
              Get A Call Back
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
              Speak With A Haggai Expert.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              When you submit this form, it will not automatically collect your
              details like name and email address unless you provide it
              yourself.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 overflow-hidden bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.15)] sm:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-8">
                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                      1. Full Name
                    </label>

                    <input
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        updateField("fullName", e.target.value)
                      }
                      placeholder="Enter your answer"
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                      2. Phone Number
                    </label>

                    <input
                      required
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        updateField("phoneNumber", e.target.value)
                      }
                      placeholder="Enter your answer"
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
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
                      className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
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
                  className="mx-auto text-red-700"
                />

                <h2 className="mt-6 text-5xl font-black tracking-[-0.05em]">
                  Request Submitted
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
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