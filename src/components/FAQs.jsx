import React from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "How Can I Open an Account in Haggai Bank ?",
    answer:
      "Walk into any Haggai Bank Branch and meet with the Customer Service Officer, the staff will enlighten you on how & what type of account that would suit your purpose.",
  },
  {
    question: "What is the Initial Deposit for Account Opening in Haggai Bank?",
    answer:
      "This varies per Product type. You can also confirm from our Products page.",
  },
  {
    question: "What Are The Requirements For Account Opening In Haggai Bank?",
    answer:
      "Depending on the type of Product or Account to be opened, the requirements for each Product varies. Please check our Account Opening/Products page..",
  },
  {
    question:
      "Can I Operate My Account From Any Other Branch of Haggai Bank Outside where I Opened The Account?",
    answer: "Yes, you can operate your account from any Haggai Bank Branch.",
  },
  {
    question: "What Are The Requirements For Account Opening In Haggai Bank?",
    answer:
      "Depending on the type of Product or Account to be opened, the requirements for each Product varies. Please check our Account Opening/Products page..",
  },
  {
    question: "Are There Specific Products For Renovation of My Existing Building?",
    answer:
      "Yes. There are specific Products for building of new Houses and there are for renovation of existing properties. Please contact the Products page..",
  },
  {
    question: "Does Haggai Bank Offer SMS Alert on Transactions?",
    answer:
      "Yes. This is however based on Customers’ requests as Alerts are only enabled on interested customers' accounts. Kindly walk into any of our Branches and meet the Customer Service Officer for enquiries on how to activate Alerts on Accounts.",
  },
  {
    question: "How do I obtain my Account statements?",
    answer:
      "Unless agreed otherwise, we’ll provide you with statements every month, free of charge, provided that there have been payment transactions on the account during the month. We can however provide you with a copy of a previously issued statement for an additional charge.",
  },
  {
    question: "What if I prefer paperless statements?",
    answer:
      "Electronic statements can also be sent to the registered email addresses on the account.",
  },
  {
    question: "Questioning a transaction on your statement?",
    answer:
      "If you're unsure about a transaction on your statement, feel free to pop into any of our branches during normal working hours (Mon-Fri 8am-4pm).",
  },
  {
    question: "How do I get a replacement Cheque book?",
    answer:
      "If you reach the end of your cheque book and haven't received a new one, please visit us and your request will be processed at the usual charge. If your cheque book is lost or stolen, visit us and we will cancel the cheque book and process a replacement at an extra charge.",
  },
  {
    question: "The Bank is too far from my location!",
    answer: `We also operate accounts with Corresponding Banks for customers distant from any of our branches. You can pay into our accounts with the following Banks: Account Name: HAGGAI MORTGAGE BANK
GTB 0004241103
ECOBANK 0052013105
ZENITH BANK 1010801164
STANBIC 9200121158
Inform HMB about the transaction details and your HMB account will be credited.
Speak to an officer for more details. 07046144945.`,
  },
  {
    question: "Where is The Head Office of Haggai Mortgage Bank?",
    answer: `Our Head Office is located at 119, Bode Thomas Street, Surulere, Lagos State.
Our Branch Office in Redemption Camp at KM 46, Lagos-Ibadan Express Way, Ogun State.`,
  },
  {
    question: "Not found what you want?",
    answer: "Contact us or visit any of our branches.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const filteredFaqs = faqs.filter((faq) => {
    const searchText = `${faq.question} ${faq.answer}`.toLowerCase();
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
        <span className="animate-pulse text-[9rem] font-black leading-none text-red-700/[0.04] sm:text-[18rem] lg:text-[28rem]">
          FAQs
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
                FAQs
              </p>

              <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                Frequently Asked Questions.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Get quick answers about opening accounts, account operation,
                banking services, statements, cheque books, branch access and
                Haggai Mortgage Bank locations.
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
                  Help Desk
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  Search questions
                </h2>
              </div>

              <div className="relative w-full md:max-w-sm">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Search FAQs..."
                  className="w-full border border-slate-200 bg-[#f8f4ed] py-4 pl-12 pr-5 text-sm font-semibold outline-none transition focus:border-red-700 focus:bg-white"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="overflow-hidden bg-slate-950 p-7 text-white shadow-[0_35px_110px_rgba(0,0,0,0.24)] sm:p-8 animate-[slideFromLeft_900ms_cubic-bezier(.16,1,.3,1)_both] lg:sticky lg:top-32 lg:h-fit">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-red-950/80" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-red-200">
                  Active Answer
                </p>

                {filteredFaqs.length > 0 ? (
                  <>
                    <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                      {filteredFaqs[activeIndex]?.question}
                    </h2>

                    <p className="mt-7 whitespace-pre-line text-lg leading-8 text-white/68">
                      {filteredFaqs[activeIndex]?.answer}
                    </p>

                    <div className="mt-9 h-2 overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-red-600 transition-all duration-700"
                        style={{
                          width: `${
                            ((activeIndex + 1) / filteredFaqs.length) * 100
                          }%`,
                        }}
                      />
                    </div>

                    <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/35">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(filteredFaqs.length).padStart(2, "0")}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">
                      No result found.
                    </h2>

                    <p className="mt-7 text-lg leading-8 text-white/68">
                      Try searching with another keyword.
                    </p>
                  </>
                )}
              </div>
            </aside>

            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const open = index === activeIndex;

                  return (
                    <button
                      key={`${faq.question}-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative w-full overflow-hidden p-6 text-left shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition duration-700 hover:-translate-y-2 hover:shadow-[0_35px_110px_rgba(0,0,0,0.2)] ${
                        open ? "bg-red-700 text-white" : "bg-white text-slate-950"
                      } ${
                        index % 2 === 0
                          ? "animate-[slideFromRight_800ms_cubic-bezier(.16,1,.3,1)_both]"
                          : "animate-[slideFromLeft_800ms_cubic-bezier(.16,1,.3,1)_both]"
                      }`}
                      style={{
                        animationDelay: `${Math.min(index * 55, 700)}ms`,
                      }}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full w-1 transition duration-500 group-hover:w-2 ${
                          open ? "bg-white" : "bg-red-700"
                        }`}
                      />

                      <div
                        className={`absolute -right-24 -top-24 h-64 w-64 rounded-full transition duration-700 group-hover:scale-150 ${
                          open ? "bg-white/10" : "bg-red-700/5"
                        }`}
                      />

                      <div className="relative z-10 flex items-start justify-between gap-6">
                        <div className="flex gap-5">
                          <span
                            className={`mt-1 text-lg font-black ${
                              open ? "text-white" : "text-red-700"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className="text-2xl font-black leading-tight tracking-[-0.04em]">
                              {faq.question}
                            </h3>

                            <div
                              className={`grid transition-all duration-700 ${
                                open
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p
                                  className={`mt-6 whitespace-pre-line text-lg leading-8 ${
                                    open ? "text-white/78" : "text-slate-600"
                                  }`}
                                >
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition duration-500 ${
                            open
                              ? "border-white/30 bg-white text-red-700"
                              : "border-slate-200 bg-[#f8f4ed] text-red-700 group-hover:border-red-700"
                          }`}
                        >
                          {open ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="bg-white p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
                  <h3 className="text-3xl font-black tracking-[-0.04em]">
                    No question found.
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Try searching with a different keyword.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 overflow-hidden bg-white p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,0.18)] sm:p-12 animate-[panelRise_900ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
              Need More Help?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
              Not found what you want?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Contact us or visit any of our branches.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/#contact"
                className="group relative overflow-hidden bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-red-800"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Contact Us</span>
              </Link>

              <Link
                to="/open-account"
                className="group border border-slate-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-1 hover:border-red-700 hover:bg-red-700 hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  Open Account
                  <ArrowUpRight
                    size={18}
                    className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
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

          @keyframes slideFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-70px) rotate(-1deg) scale(0.97);
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
              transform: translateX(70px) rotate(1deg) scale(0.97);
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

export default FAQs;