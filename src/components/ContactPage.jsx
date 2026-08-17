import React from "react";
import {
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const departments = [
  {
    title: "Mortgage Banking",
    contacts: [
      "GBADEBO - 08032210273",
      "ALWAYS ON - 08144772676",
      "CHIOMA - 07045994842",
    ],
  },
  {
    title: "Marketing",
    contacts: ["GBADEBO - 08032210273"],
  },
  {
    title: "Camp Branch Dept",
    contacts: ["LEKAN - 08023507007", "MERCY - 08133266871"],
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

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

  async function handleFormSubmit(event) {
    event.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      category: formData.subject,
      message: formData.message,
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
        alert(`Feedback submitted successfully! Your reference: ${result.ticketId}`);
        setSubmitted(true);
      } else {
        alert(`Submission failed: ${result.error?.message || result.message || 'Server error (status ' + res.status + ')'}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  }

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
        <span className="animate-pulse text-[7rem] font-black leading-none text-red-700/[0.04] sm:text-[15rem] lg:text-[24rem]">
          CONTACT
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
              Contact
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Get in Touch With Us.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Kindly fill in the form below for your general enquiries or
              comments.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <form
            onSubmit={handleFormSubmit}
            className="relative overflow-hidden bg-white p-7 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both]"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-red-700" />
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-700/5 blur-xl" />

            <div className="relative">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-[fadeIn_500ms_ease_both]">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-700">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">
                    Message Drafted!
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-md mx-auto text-base">
                    We have opened your email client with your message details drafted. Please send the draft to finalize.
                  </p>
                  <p className="text-sm text-slate-400">
                    If your email client didn't open, you can mail us directly at{" "}
                    <a href="mailto:[EMAIL_ADDRESS]" className="text-red-700 underline font-semibold">
                      info@haggaibank.com
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-3 border border-slate-200 text-xs font-black uppercase tracking-[0.2em] text-slate-700 hover:bg-slate-50 transition duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                    Send a message
                  </p>

                  <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                    Tell us how we can help.
                  </h2>

                  <div className="mt-10 grid gap-6">
                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                        Your E-mail
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                        Your Subject
                      </label>
                      <input
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="mt-4 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-5 text-lg font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-2 inline-flex w-fit overflow-hidden bg-red-700 px-8 py-5 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                      <span className="relative inline-flex items-center gap-3">
                        Send Message
                        <Send size={18} />
                      </span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>

          <aside className="relative overflow-hidden bg-slate-950 p-7 text-white shadow-[0_35px_110px_rgba(0,0,0,0.25)] sm:p-10 animate-[slideFromRight_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-red-950/80" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/30 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-200">
                Contact Our Branches
              </p>

              <div className="mt-8 space-y-6">
                <div className="border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 text-red-200">
                    <Building2 size={22} />
                    <h3 className="text-2xl font-black tracking-[-0.04em]">
                      Head Office
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-white/70">
                    Haggai Mortgage Bank Limited
                    <br />
                    119, Bode Thomas Street
                    <br />
                    Surulere, Lagos Nigeria
                    <br />
                    07045994840-4
                  </p>
                </div>

                <div className="border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 text-red-200">
                    <Phone size={22} />
                    <h3 className="text-2xl font-black tracking-[-0.04em]">
                      Ebanking Support
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-white/70">
                    Call - +234 814 477 2676
                    <br />
                    E-mail - alwayson@haggaibank.com
                  </p>
                </div>

                <div className="border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 text-red-200">
                    <MapPin size={22} />
                    <h3 className="text-2xl font-black tracking-[-0.04em]">
                      Camp Branch
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-white/70">
                    Haggai Mortgage Bank Limited
                    <br />
                    Km 46, Lagos Ibadan Express Way
                    <br />
                    Ogun State
                    <br />
                    08144772676, 07045994847
                  </p>
                </div>

                <div className="border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 text-red-200">
                    <Mail size={22} />
                    <h3 className="text-2xl font-black tracking-[-0.04em]">
                      E-mail
                    </h3>
                  </div>

                  <p className="mt-5 leading-8 text-white/70">
                    info@haggaibank.com
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white p-8 shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-10 animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Get in touch With Departments
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              Department Contacts
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {departments.map((department, index) => (
                <div
                  key={department.title}
                  className="group relative overflow-hidden border border-slate-200 bg-[#f8f4ed] p-6 transition duration-700 hover:-translate-y-2 hover:border-red-700 hover:bg-white hover:shadow-2xl"
                  style={{
                    animation: "cardIn 750ms cubic-bezier(.16,1,.3,1) both",
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />

                  <h3 className="text-2xl font-black tracking-[-0.04em]">
                    {department.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {department.contacts.map((contact) => (
                      <p
                        key={contact}
                        className="text-base font-semibold text-slate-600"
                      >
                        {contact}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl overflow-hidden bg-white shadow-[0_45px_130px_rgba(0,0,0,0.22)] animate-[mapReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 p-8 sm:flex-row sm:items-end sm:p-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Map Location
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                Visit Our Head Office.
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=119%2C%20Bode%20Thomas%20Street%2C%20Surulere%2C%20Lagos%2C%20Nigeria"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-red-700 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Open Map
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>

          <iframe
            title="Haggai Mortgage Bank Head Office Map"
            src="https://www.google.com/maps?q=119%2C%20Bode%20Thomas%20Street%2C%20Surulere%2C%20Lagos%2C%20Nigeria&output=embed"
            className="h-[520px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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

          @keyframes cardIn {
            0% {
              opacity: 0;
              transform: translateY(45px);
              filter: blur(10px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes mapReveal {
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
        `}
      </style>
    </main>
  );
};

export default ContactPage;