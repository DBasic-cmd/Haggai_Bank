import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  FileText,
  Image as ImageIcon,
  Trash2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const initialFormData = {
  accountName: "",
  accountNumber: "",
  bvn: "",
  phoneNumber: "",
  emailAddress: "",
  address: "",
  acknowledged: false,
};

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".pneg", ".pdf"];
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/pdf",
];
const MAX_TOTAL_BYTES = 2 * 1024 * 1024; // 2MB

const formatBytes = (bytes) => {
  if (!bytes || bytes === 0) return "0 KB";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Extract pure base64 string after the data URL header
      const base64Content = reader.result.split(",")[1];
      resolve({
        filename: file.name,
        type: file.type,
        size: file.size,
        content: base64Content,
      });
    };
    reader.onerror = (error) => reject(error);
  });
};

const DormantAccountForm = () => {
  const [formData, setFormData] = React.useState(initialFormData);
  const [files, setFiles] = React.useState([]);
  const [fileError, setFileError] = React.useState("");
  const [isDragging, setIsDragging] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [ticketId, setTicketId] = React.useState("");
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });
  const fileInputRef = React.useRef(null);

  const totalFilesBytes = files.reduce((acc, f) => acc + f.size, 0);
  const totalFilesMB = (totalFilesBytes / (1024 * 1024)).toFixed(2);
  const usagePercentage = Math.min(
    100,
    Math.round((totalFilesBytes / MAX_TOTAL_BYTES) * 100)
  );

  const requiredFields = [
    formData.accountName,
    formData.accountNumber,
    formData.bvn,
    formData.phoneNumber,
    formData.emailAddress,
    formData.address,
    files.length > 0,
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

  const validateAndAddFiles = (newFilesList) => {
    const incoming = Array.from(newFilesList);
    if (incoming.length === 0) return;

    let updated = [...files];
    let error = "";

    for (const file of incoming) {
      const ext = "." + file.name.split(".").pop().toLowerCase();
      const isValid =
        ALLOWED_MIME_TYPES.includes(file.type) ||
        ALLOWED_EXTENSIONS.includes(ext);

      if (!isValid) {
        error = `"${file.name}" is not supported. Please upload JPEG, PNG, or PDF files.`;
        break;
      }

      // Skip duplicate files
      if (updated.some((f) => f.name === file.name && f.size === file.size)) {
        continue;
      }

      updated.push(file);
    }

    const newTotal = updated.reduce((acc, f) => acc + f.size, 0);
    if (newTotal > MAX_TOTAL_BYTES) {
      setFileError(
        `Total file size (${(newTotal / (1024 * 1024)).toFixed(
          2
        )} MB) exceeds the 2MB limit. Please remove some files or compress them.`
      );
      return;
    }

    if (error) {
      setFileError(error);
      return;
    }

    setFileError("");
    setFiles(updated);
  };

  const handleFileInputChange = (e) => {
    validateAndAddFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    const updated = files.filter((_, i) => i !== indexToRemove);
    setFiles(updated);
    const newTotal = updated.reduce((acc, f) => acc + f.size, 0);
    if (newTotal <= MAX_TOTAL_BYTES) {
      setFileError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    if (totalSize > MAX_TOTAL_BYTES) {
      setFileError(
        "Total file size exceeds the 2MB limit. Please remove or compress files before submitting."
      );
      return;
    }

    if (!formData.acknowledged) {
      setSubmitError("Please confirm your acknowledgment before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert all files to base64 for Resend
      const base64Attachments = await Promise.all(files.map(fileToBase64));

      const payload = {
        name: formData.accountName,
        email: formData.emailAddress,
        category: "Dormant Account Reactivation",
        subject: `Dormant Account Reactivation Request - ${formData.accountNumber}`,
        message: `
Dormant Account Reactivation Request
====================================
Account Name: ${formData.accountName}
Account Number: ${formData.accountNumber}
BVN: ${formData.bvn}
Phone Number: ${formData.phoneNumber}
Email Address: ${formData.emailAddress}
Residential Address: ${formData.address}

Attached Documents (${files.length}):
${
  files.length > 0
    ? files
        .map(
          (f, i) =>
            `${i + 1}. ${f.name} (${formatBytes(f.size)})`
        )
        .join("\n")
    : "No documents attached"
}
Total Attachment Size: ${formatBytes(totalSize)}

Applicant has acknowledged the reactivation requirement.
        `.trim(),
        attachments: base64Attachments,
      };

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (e) {
        // Fallback for non-JSON response
      }

      if (res.ok && data.success) {
        setTicketId(data.ticketId || `TICK-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(
          data.error?.message ||
            data.message ||
            data.error ||
            (res.status === 404
              ? "API endpoint not reachable. Please check your connection."
              : `Server error (${res.status}). Please try again later.`)
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(
        "A network error occurred while submitting your request. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setFiles([]);
    setFileError("");
    setSubmitError("");
    setPage(1);
    setSubmitted(false);
    setTicketId("");
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#f8f4ed] text-slate-950 dark:bg-[#05070d] dark:text-white transition-colors duration-300"
    >
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2600&q=90')",
        }}
      />

      <div className="fixed inset-0 z-0 bg-white/84 backdrop-blur-[2px] dark:bg-[#05070d]/90" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <span className="animate-pulse text-[7rem] font-black leading-none text-red-700/[0.04] sm:text-[14rem] lg:text-[21rem] dark:text-red-500/[0.05]">
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
          <div className="relative overflow-hidden border border-transparent bg-white/92 p-8 text-center shadow-[0_45px_130px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-12 lg:p-16 animate-[heroReveal_1000ms_cubic-bezier(.16,1,.3,1)_both] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/10 blur-[70px]" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-950/10 blur-[70px] dark:bg-white/5" />

            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-700 dark:text-red-400">
              Dormant Account
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl dark:text-white">
              Reactivate Your Account.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-white/60">
              Submit your account details and upload your verification documents to
              reactivate your dormant Haggai Bank account.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative overflow-hidden border border-white/10 bg-slate-950 p-8 text-white shadow-[0_35px_110px_rgba(0,0,0,0.25)] sm:p-10 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both] lg:sticky lg:top-32 lg:h-fit">
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

              <div className="mt-10 space-y-3">
                {[
                  ["Account Name", formData.accountName],
                  ["Account Number", formData.accountNumber],
                  ["BVN", formData.bvn],
                  ["Phone Number", formData.phoneNumber],
                  ["Email Address", formData.emailAddress],
                  ["Address", formData.address],
                  ["Documents (Max 2MB)", files.length > 0],
                  ["Document Notice", formData.acknowledged],
                ].map(([item, complete], index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-4 border p-3.5 transition ${
                      complete
                        ? "border-red-700/40 bg-red-700/20"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center text-xs font-black ${
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

          <div className="relative overflow-hidden border border-slate-200/80 bg-white p-7 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[slideFromRight_900ms_cubic-bezier(.16,1,.3,1)_both] dark:border-white/10 dark:bg-[#0c0f17] dark:shadow-black/30">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-700/5 blur-xl dark:bg-red-700/10" />

            {!submitted ? (
              <form onSubmit={page === 1 ? handleNext : handleSubmit}>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 dark:text-red-400">
                  Dormant Account Reactivation
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl dark:text-white">
                  {page === 1
                    ? "Provide your account details."
                    : "Upload Required Documents"}
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
                        <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
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
                          className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-red-500 dark:focus:bg-white/10"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
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
                        className="mt-4 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-red-700 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-red-500 dark:focus:bg-white/10"
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
                    <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-white/60">
                      <p>
                        To ensure a smooth and swift reactivation process,
                        please upload the following verification documents
                        (Utility Bill, Valid ID Card, and/or Letter of Authorization).
                      </p>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="border border-slate-200 bg-[#f8f4ed] p-4 dark:border-white/10 dark:bg-white/5">
                          <h3 className="text-base font-black tracking-tight text-slate-950 dark:text-white">
                            1. Utility Bill
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 leading-5 dark:text-white/60">
                            Recent bill matching your residential address.
                          </p>
                        </div>

                        <div className="border border-slate-200 bg-[#f8f4ed] p-4 dark:border-white/10 dark:bg-white/5">
                          <h3 className="text-base font-black tracking-tight text-slate-950 dark:text-white">
                            2. Valid ID Card
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 leading-5 dark:text-white/60">
                            Govt ID (Passport, Driver's License, NIN, etc.).
                          </p>
                        </div>

                        <div className="border border-slate-200 bg-[#f8f4ed] p-4 dark:border-white/10 dark:bg-white/5">
                          <h3 className="text-base font-black tracking-tight text-slate-950 dark:text-white">
                            3. Authorization
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 leading-5 dark:text-white/60">
                            Signed request letter on letterhead if corporate.
                          </p>
                        </div>
                      </div>

                      {/* File Upload Dropzone */}
                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
                            Attach Documents (JPEG, PNG, PDF • Max 2MB Total)
                          </label>
                          {files.length > 0 && (
                            <span
                              className={`text-xs font-bold ${
                                totalFilesBytes > MAX_TOTAL_BYTES
                                  ? "text-red-700 dark:text-red-400"
                                  : "text-slate-600 dark:text-white/60"
                              }`}
                            >
                              {totalFilesMB} MB / 2.00 MB ({files.length} file
                              {files.length === 1 ? "" : "s"})
                            </span>
                          )}
                        </div>

                        {/* Drop area */}
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`relative cursor-pointer border-2 border-dashed p-8 text-center transition ${
                            isDragging
                              ? "border-red-700 bg-red-50/50 dark:border-red-500 dark:bg-red-950/20"
                              : "border-slate-300 bg-[#f8f4ed] hover:border-red-700 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:border-red-500 dark:hover:bg-white/10"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept=".jpeg,.jpg,.png,.pneg,.pdf,image/jpeg,image/png,application/pdf"
                            onChange={handleFileInputChange}
                            className="hidden"
                          />

                          <Upload className="mx-auto h-10 w-10 text-red-700/80 mb-3 dark:text-red-400" />
                          <p className="text-base font-bold text-slate-900 dark:text-white">
                            Click to browse or drag & drop files here
                          </p>
                          <p className="text-xs text-slate-500 mt-1 dark:text-white/50">
                            Accepted formats:{" "}
                            <span className="font-semibold text-slate-700 dark:text-white/80">
                              JPEG, PNG, PNEG, PDF
                            </span>{" "}
                            • Total size limit:{" "}
                            <span className="font-semibold text-slate-700 dark:text-white/80">
                              2 MB
                            </span>
                          </p>
                        </div>

                        {/* Size progress bar */}
                        {files.length > 0 && (
                          <div className="mt-3">
                            <div className="h-2 w-full overflow-hidden bg-slate-200 dark:bg-white/10">
                              <div
                                className={`h-full transition-all duration-300 ${
                                  totalFilesBytes > MAX_TOTAL_BYTES
                                    ? "bg-red-600"
                                    : usagePercentage > 85
                                    ? "bg-amber-500"
                                    : "bg-green-600"
                                }`}
                                style={{ width: `${usagePercentage}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* File error message */}
                        {fileError && (
                          <div className="mt-3 flex items-center gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <span>{fileError}</span>
                          </div>
                        )}

                        {/* Selected files list */}
                        {files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-white/50">
                              Selected Documents ({files.length}):
                            </p>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {files.map((file, idx) => {
                                const isPdf =
                                  file.name.toLowerCase().endsWith(".pdf") ||
                                  file.type === "application/pdf";
                                return (
                                  <div
                                    key={`${file.name}-${idx}`}
                                    className="flex items-center justify-between border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5"
                                  >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                      {isPdf ? (
                                        <FileText className="h-5 w-5 shrink-0 text-red-700 dark:text-red-400" />
                                      ) : (
                                        <ImageIcon className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                                      )}
                                      <div className="overflow-hidden">
                                        <p
                                          className="truncate text-xs font-bold text-slate-900 dark:text-white"
                                          title={file.name}
                                        >
                                          {file.name}
                                        </p>
                                        <p className="text-[11px] text-slate-500 dark:text-white/40">
                                          {formatBytes(file.size)}
                                        </p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveFile(idx)}
                                      className="p-1 text-slate-400 hover:text-red-700 transition dark:text-white/40 dark:hover:text-red-400"
                                      title="Remove file"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <label className="flex cursor-pointer items-start gap-4 border border-red-700/20 bg-red-700/5 p-5 mt-6 dark:border-red-500/20 dark:bg-red-950/20">
                        <input
                          required
                          type="checkbox"
                          checked={formData.acknowledged}
                          onChange={(e) =>
                            handleChange("acknowledged", e.target.checked)
                          }
                          className="mt-1 h-5 w-5 accent-red-700"
                        />

                        <span className="text-base font-semibold leading-7 text-slate-700 dark:text-white/80">
                          I confirm that all provided information and attached
                          documents are accurate and authentic for the purpose of
                          reactivating my dormant account.
                        </span>
                      </label>
                    </div>

                    {submitError && (
                      <div className="mt-4 flex items-center gap-2 border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setPage(1)}
                        className="inline-flex items-center justify-center gap-3 border border-slate-300 bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-slate-700 transition hover:border-red-700 hover:bg-red-700 hover:text-white disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-red-500 dark:hover:bg-red-700 dark:hover:text-white"
                      >
                        <ArrowLeft size={18} />
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative flex-1 overflow-hidden bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-red-700 flex items-center justify-center gap-3"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                        {isSubmitting ? (
                          <span className="relative inline-flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Submitting Request...
                          </span>
                        ) : (
                          <span className="relative">
                            Submit Reactivation Request
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto text-red-700 dark:text-red-500" size={64} />

                <h2 className="mx-auto mt-7 max-w-3xl text-5xl font-black leading-tight tracking-[-0.055em] dark:text-white">
                  Reactivation Request Submitted!
                </h2>

                {ticketId && (
                  <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-slate-800 dark:text-white/90">
                    Reference ID:{" "}
                    <span className="text-red-700 font-mono bg-red-50 px-3 py-1 border border-red-200 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                      {ticketId}
                    </span>
                  </p>
                )}

                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
                  Your dormant account reactivation request along with your
                  uploaded verification documents ({files.length} document
                  {files.length === 1 ? "" : "s"}) have been sent to Haggai Bank
                  Customer Service (
                  <strong className="text-slate-800 dark:text-white">
                    alwayson@haggaibank.com
                  </strong>
                  ).
                </p>

                <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 dark:text-white/50">
                  Our team will review your submitted documents and reach out to
                  you via{" "}
                  <strong className="text-slate-700 dark:text-white/80">
                    {formData.emailAddress}
                  </strong>{" "}
                  or{" "}
                  <strong className="text-slate-700 dark:text-white/80">
                    {formData.phoneNumber}
                  </strong>
                  .
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