import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const RccgRemittanceForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    rrrNumber: "",
    purpose: "Monthly Remittance",
    accountToDebit: "",
    churchName: "",
    emailAddress: "",
    phoneNumber: "",
    additionalInstruction: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.churchName,
      email: formData.emailAddress,
      category: `RCCG Remittance: ${formData.purpose}`,
      message: `RRR Number: ${formData.rrrNumber}
Purpose: ${formData.purpose}
Account to Debit: ${formData.accountToDebit}
Church Name: ${formData.churchName}
Phone Number: ${formData.phoneNumber}

Additional Instruction:
${formData.additionalInstruction || "None"}`,
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result = {};
      try {
        result = await res.json();
      } catch (err) {
        // Fallback
      }

      if (res.ok) {
        setTicketId(result.ticketId || `REM-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      } else {
        alert(`Submission failed: ${result.error?.message || result.message || "Server error (status " + res.status + ")"}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/90 p-8 shadow-xl shadow-slate-900/5 border border-slate-100 backdrop-blur sm:p-10 relative overflow-hidden animate-[slideFromRight_900ms_ease_both]">
      <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-3xl font-black tracking-[-0.04em] text-slate-900">
              RCCG Remittance Submission
            </h3>
            <p className="mt-3 text-slate-500 text-sm leading-relaxed">
              When you submit this form, it will not automatically collect your details like name and email address unless you provide them yourself.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* RRR Number */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                1. RRR Number <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.rrrNumber}
                onChange={(e) => updateField("rrrNumber", e.target.value)}
                placeholder="Enter RRR Number"
                className="mt-3 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>

            {/* Purpose */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                2. Purpose <span className="text-red-500">*</span>
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {["Monthly Remittance", "Thanksgiving Remittance", "Others"].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 border p-4 cursor-pointer transition duration-300 font-semibold text-sm ${formData.purpose === option
                      ? "border-red-700 bg-red-50/50"
                      : "border-slate-200 bg-[#f8f4ed] text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value={option}
                      checked={formData.purpose === option}
                      onChange={(e) => updateField("purpose", e.target.value)}
                      className="accent-red-700 h-4 w-4"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Account To Debit */}
            <div>
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                3. Account To Debit <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.accountToDebit}
                onChange={(e) => updateField("accountToDebit", e.target.value)}
                placeholder="Enter account number to debit"
                className="mt-3 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>

            {/* Church Name */}
            <div>
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                4. Church Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.churchName}
                onChange={(e) => updateField("churchName", e.target.value)}
                placeholder="Enter RCCG parish/province/region name"
                className="mt-3 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                5. Email Address <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                value={formData.emailAddress}
                onChange={(e) => updateField("emailAddress", e.target.value)}
                placeholder="Enter your email address"
                className="mt-3 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-black uppercase tracking-[0.28em]">
                6. Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => updateField("phoneNumber", e.target.value)}
                placeholder="Enter your phone number"
                className="mt-3 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>

            {/* Additional Instruction */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-[0.28em] text-red-700">
                7. Additional Instruction
              </label>
              <textarea
                rows="4"
                value={formData.additionalInstruction}
                onChange={(e) => updateField("additionalInstruction", e.target.value)}
                placeholder="Enter any additional instructions"
                className="mt-3 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-6 text-slate-400">
              * Required fields. Please make sure all details match your remittance slip.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-red-700 px-9 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition duration-500 hover:-translate-y-1 hover:bg-red-800 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
              <span className="relative inline-flex items-center gap-3">
                {isSubmitting ? "Submitting..." : "Submit Remittance"}
                <Send size={16} />
              </span>
            </button>
          </div>
        </form>
      ) : (
        <div className="py-12 text-center space-y-6 animate-[fadeIn_500ms_ease_both]">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-red-700">
            <CheckCircle2 size={44} />
          </div>
          <h3 className="text-4xl font-black tracking-[-0.04em] text-slate-900">
            Remittance Submitted!
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-lg mx-auto text-lg">
            Your RCCG remittance request has been received. Your reference ticket ID is <strong className="text-red-700">{ticketId}</strong>.
          </p>
          <p className="text-sm text-slate-400">
            We will verify your RRR details and process the debit from your account shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                rrrNumber: "",
                purpose: "Monthly Remittance",
                accountToDebit: "",
                churchName: "",
                emailAddress: "",
                phoneNumber: "",
                additionalInstruction: "",
              });
            }}
            className="mt-6 px-8 py-4 border border-slate-200 text-xs font-black uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition duration-300"
          >
            Submit Another Remittance
          </button>
        </div>
      )}
    </div>
  );
};

export default RccgRemittanceForm;
