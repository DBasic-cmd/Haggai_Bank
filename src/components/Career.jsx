import React from "react";

const culture = [
  {
    title: "Innovation",
    text: "We embrace forward-thinking ideas that improve mortgage banking and customer experience.",
  },
  {
    title: "Professionalism",
    text: "We uphold discipline, integrity, and excellence across every customer and stakeholder interaction.",
  },
  {
    title: "Efficiency",
    text: "We value people who simplify processes, solve problems, and deliver results with precision.",
  },
  {
    title: "Exceptional Service",
    text: "We are committed to creating meaningful impact through courteous and responsive service delivery.",
  },
];

const openPositions = [
  {
    title: "Mortgage Advisory Officer",
    type: "Full-Time",
    location: "Lagos, NG",
    department: "Retail & Mortgage Advisory",
    description: "Guide clients through the mortgage application process, analyze financial data, and recommend the best home finance plans.",
  },
  {
    title: "Electronic Banking Specialist",
    type: "Full-Time",
    location: "Lagos, NG",
    department: "Operations & IT",
    description: "Support electronic banking applications (USSD, Mobile app, Internet Banking, Remita) and manage inter-bank funds transfers.",
  },
  {
    title: "Credit Risk Analyst",
    type: "Full-Time",
    location: "Lagos, NG",
    department: "Credit & Risk Management",
    description: "Evaluate credit applications, assess loan risk portfolios, and ensure regulatory alignment with CBN guidelines.",
  },
];

const fields = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Mr / Mrs / Miss / Dr",
  },
  {
    id: "firstName",
    label: "Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    id: "phonePrefix",
    label: "Phone Prefix",
    type: "text",
    placeholder: "+234",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "course",
    label: "Course of Graduation",
    type: "text",
    placeholder: "Enter your course of graduation",
  },
  {
    id: "grade",
    label: "Grade",
    type: "text",
    placeholder: "Enter your grade",
  },
  {
    id: "graduationYear",
    label: "Graduation Year",
    type: "number",
    placeholder: "2015",
  },
  {
    id: "qualification",
    label: "Qualification",
    type: "text",
    placeholder: "Enter your qualification",
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter your address",
    full: true,
  },
];

const Career = () => {
  return (
    <main className="relative min-h-screen text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=2400&q=90')"
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/55" />

      <section className="relative z-10 px-5 pb-20 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl text-white animate-[heroEnter_950ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-red-300">
              Careers
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Join Our Team.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78">
              Starting a career at Haggai Mortgage Bank Ltd can be a
              transformative step toward personal growth and professional
              achievement.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white/92 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl animate-[introReveal_950ms_cubic-bezier(.16,1,.3,1)_both] sm:p-10 lg:p-12">
            <div className="max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
                Life at Haggai
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
                A place for ambitious people to build meaningful careers.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
                <p>
                  We are built on a strong tradition of innovation,
                  professionalism, efficiency, courtesy, and exceptional service
                  delivery—qualities that have positioned us as a formidable
                  force in Nigeria’s financial sector and established a strong,
                  recognizable brand.
                </p>

                <p>
                  At Haggai Mortgage Bank, we offer rewarding career
                  opportunities for highly motivated, ambitious, and
                  goal-oriented individuals who are driven to excel and make
                  meaningful contributions in their chosen fields.
                </p>

                <p>
                  We are proud to be an equal opportunity employer, fostering an
                  inclusive and supportive work environment where everyone is
                  valued and treated with fairness and respect, free from all
                  forms of discrimination.
                </p>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Human Resources
                </p>

                <p className="mt-3 text-xl font-black text-red-700">
                  humanresources@haggaibank.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-white/90 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-700 hover:-translate-y-3 hover:bg-white"
                style={{
                  animation: `cultureIn 850ms cubic-bezier(.16,1,.3,1) both`,
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-700/5 transition duration-700 group-hover:scale-150 group-hover:bg-red-700/10" />

                <p className="relative text-xs font-black uppercase tracking-[0.3em] text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="relative mt-5 text-2xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="relative mt-5 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-20 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 bg-white/92 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Careers
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Available Positions
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Explore current opportunities to join our team at Haggai Mortgage Bank.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="group relative flex flex-col justify-between bg-[#f8f4ed] p-7 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-red-700/5 hover:border-red-700/30 border border-slate-200/60"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block bg-red-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-red-800 rounded-full">
                        {position.type}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                        {position.location}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-black tracking-[-0.04em] text-slate-900 group-hover:text-red-700 transition duration-300">
                      {position.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                      {position.department}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {position.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-200/60 pt-5">
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById("career-application-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] text-red-700 transition duration-300 hover:text-red-900"
                    >
                      Apply Now <span className="ml-2 group-hover:translate-x-1 transition duration-300">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-5 pb-32 sm:px-10 lg:px-16 xl:px-24">
        <div id="career-application-form" className="mx-auto max-w-6xl">
          <div className="overflow-hidden bg-white shadow-[0_40px_120px_rgba(0,0,0,0.38)] animate-[formReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <aside className="relative overflow-hidden bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1800&q=90')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-red-950/75" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">
                    Let’s Touch Lives Together
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                    Would you love to join the community?
                  </h2>

                  <p className="mt-6 text-base leading-8 text-white/68">
                    Kindly fill the form and we will let you know if there is an
                    opening that matches your background, skills, and ambition.
                  </p>

                  <div className="mt-10 border-t border-white/15 pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                      Applications Sent To
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      humanresources@haggaibank.com
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {["Apply", "Review", "Connect"].map((item, index) => (
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
                action="mailto:humanresources@haggaibank.com"
                method="POST"
                encType="multipart/form-data"
                className="bg-white p-8 sm:p-10 lg:p-12"
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className={`group relative ${
                        field.full ? "sm:col-span-2" : ""
                      } animate-[fieldIn_850ms_cubic-bezier(.16,1,.3,1)_both]`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <label
                        htmlFor={field.id}
                        className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                      >
                        {field.label} *
                      </label>

                      <input
                        id={field.id}
                        name={field.label}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        defaultValue={
                          field.id === "phonePrefix"
                            ? "+234"
                            : field.id === "graduationYear"
                            ? "2015"
                            : ""
                        }
                        className="mt-4 w-full border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                      />
                    </div>
                  ))}

                  <div
                    className="group relative sm:col-span-2 animate-[fieldIn_850ms_cubic-bezier(.16,1,.3,1)_both]"
                    style={{ animationDelay: "880ms" }}
                  >
                    <label
                      htmlFor="attachment"
                      className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                    >
                      Attachment *
                    </label>

                    <label
                      htmlFor="attachment"
                      className="mt-4 flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-[#f8f4ed] px-6 py-10 text-center transition duration-300 hover:border-red-700 hover:bg-white hover:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                    >
                      <span className="text-3xl font-black text-red-700">
                        ↑
                      </span>
                      <span className="mt-3 text-base font-black text-slate-950">
                        Upload your CV or supporting document
                      </span>
                      <span className="mt-2 text-sm text-slate-500">
                        PDF, DOC, or DOCX recommended
                      </span>
                    </label>

                    <input
                      id="attachment"
                      name="Attachment"
                      type="file"
                      required
                      className="hidden"
                    />
                  </div>

                  <div
                    className="group relative sm:col-span-2 animate-[fieldIn_850ms_cubic-bezier(.16,1,.3,1)_both]"
                    style={{ animationDelay: "960ms" }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-black uppercase tracking-[0.28em] text-red-700"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="Your Message"
                      rows="7"
                      placeholder="Tell us about yourself, your interests, and how you hope to contribute to Haggai Mortgage Bank."
                      className="mt-4 w-full resize-none border border-slate-200 bg-[#f8f4ed] px-5 py-4 text-base font-semibold text-slate-950 outline-none transition duration-300 placeholder:text-slate-400 focus:border-red-700 focus:bg-white focus:shadow-[0_18px_45px_rgba(185,28,28,0.12)]"
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-slate-500">
                    We will contact you when there is an opening that aligns
                    with your profile.
                  </p>

                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-red-700 px-9 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition duration-500 hover:-translate-y-1 hover:bg-red-800"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <span className="relative">Submit Application</span>
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

          @keyframes introReveal {
            0% {
              opacity: 0;
              transform: translateY(70px) scale(0.96);
              filter: blur(16px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes cultureIn {
            0% {
              opacity: 0;
              transform: translateY(70px) rotate(1deg) scale(0.96);
              filter: blur(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) rotate(0) scale(1);
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

export default Career;