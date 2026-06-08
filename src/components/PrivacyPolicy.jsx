import React from "react";

const sections = [
  {
    title: "Who We Are",
    body: `At Haggai Mortgage Bank Ltd, we provide mortgage loans, and as such, we treat your Personal Data as private and confidential. This Privacy Policy describes what Personal Data we collect, what we do with it, and how we protect it.

Our registered office is at 119, Bode Thomas Street, Surulere, Lagos. We act as the Data Controller when processing your Personal Data. Our designated Data Protection Officer can be reached via email at dpo@haggaibank.com.

This policy describes how we handle your personal data. By continuing to visit our website, you accept and consent to the practices described in this policy.`,
  },
  {
    title: "What We Do",
    body: `At Haggai Mortgage Bank Limited, we gather and process your Personal Data in accordance with this privacy notice and in compliance with relevant data protection regulations and laws.

This notice provides information regarding your rights, our obligations, and explains how, why, and when we process your personal data.`,
  },
  {
    title: "Information That We Collect",
    list: [
      "Name",
      "Date of Birth",
      "Home Address",
      "Personal Email",
      "Home Telephone Number",
      "Mobile Telephone Number",
      "Passport Number / Driver's License Number",
      "National Identification Number (NIN)",
      "Taxpayer ID",
      "Sensitive Data including BVN, health/medical information, religion, sexuality, etc.",
    ],
  },
  {
    title: "How We Collect Information",
    list: [
      "Online form",
      "Website",
      "Hard copy form",
      "Email",
      "Employment CVs",
    ],
  },
  {
    title: "How We Use Your Personal Data",
    body: `We take your privacy very seriously and will never disclose, share, or sell your data without your consent, unless required by law.

We process personal data to perform contracts, provide services, meet legal and compliance obligations, conduct KYC checks, interact with regulatory bodies and credit bureaus, and occasionally send beneficial marketing information where permitted.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access Personal Data that we process about you and request information about the data we hold, the purposes of processing, categories of data, recipients, retention periods, and source of data where it was not collected directly from you.

You may request correction, completion, erasure, restriction of processing, object to direct marketing, exercise data portability rights, and request information about automated decision-making where applicable.`,
  },
  {
    title: "Sharing and Disclosing Your Personal Data",
    body: `We do not share or disclose your Personal Data without consent, except for the purposes specified in this notice or where legally required.

Third-party processors acting on our behalf only process your data according to our instructions and must comply with privacy, confidentiality, and security standards.`,
  },
  {
    title: "Safeguarding Measures",
    body: `We take reasonable measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.

Our security measures include network security, password policies, SSL, TLS, encryption, pseudonymization, restricted access, IT authentication, firewalls, antivirus and malware protection.`,
  },
  {
    title: "Transfers Outside Nigeria",
    body: `Haggai Mortgage Bank does not transfer or store personal data outside Nigeria.`,
  },
  {
    title: "How Long We Keep Your Data",
    body: `Haggai Mortgage Bank retains Personal Data only for as long as necessary by regulation.

Under Nigerian laws and CBN Guidelines, basic personal data such as name, address, and contact details may be retained for not more than 7 years after termination of the business relationship.`,
  },
  {
    title: "Sensitive Data",
    body: `Where Haggai Mortgage Bank processes sensitive Personal Data for legal or regulatory reasons, we only request and process the minimum necessary data for the specified purpose.

Where consent is required, explicit consent will be obtained through a signature or other explicit mechanism.`,
  },
  {
    title: "Cookie Notice",
    body: `Cookies help our website remember useful information and improve your experience.

Session cookies expire when you leave the site or close your browser, while persistent cookies remain stored until they expire or are deleted.`,
  },
  {
    title: "Your Personal Data Is Used In",
    list: [
      "Updating and enhancing our records",
      "Executing your instructions",
      "Establishing your identity and assessing applications",
      "Administering products and services",
      "Managing our relationship with you",
      "Managing risk",
      "Investigating illegal activity such as fraud",
      "Reviewing credit or loan eligibility",
      "Preventing money laundering or terrorism financing",
      "Complying with legal obligations",
      "Processing your job application where applicable",
    ],
  },
  {
    title: "Information We Share",
    list: [
      "Haggai Mortgage Bank branches and subsidiaries",
      "Regulators and supervisors",
      "Government agencies and courts",
      "External auditors",
      "Haggai Bank staff",
      "Credit agencies",
      "Correspondent banks",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    body: `We may update this Privacy Policy from time to time. Updates will be posted on this page and may be communicated by email or prominent notice where applicable.`,
  },
  {
    title: "Contact Us",
    list: [
      "Email: info@haggaibank.com",
      "Address: 119, Bode Thomas Street, Surulere, Lagos",
      "Telephone: 08144772676",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f8f4ed] text-slate-950">
      <section className="relative overflow-hidden px-5 pb-24 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#f8f4ed]/90" />

        <div className="absolute right-0 top-0 hidden h-full w-[44%] overflow-hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
              clipPath:
                "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 12% 68%, 0 35%)",
            }}
          />
          <div
            className="absolute inset-0 bg-red-700/10"
            style={{
              clipPath:
                "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 12% 68%, 0 35%)",
            }}
          />
        </div>

        <div className="absolute left-[7%] top-[22%] hidden h-44 w-44 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(0 0, 100% 16%, 84% 100%, 0 84%)",
            }}
          />
        </div>

        <div className="absolute bottom-[10%] left-[36%] hidden h-56 w-40 overflow-hidden border-[10px] border-[#f8f4ed] shadow-2xl lg:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=90')",
              clipPath: "polygon(18% 0, 100% 0, 82% 100%, 0 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-red-700">
              Privacy Policy
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Your privacy, protected with care.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              This policy explains how Haggai Mortgage Bank collects, uses,
              protects, stores, and shares personal data in line with applicable
              data protection requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-10 lg:px-16 xl:px-6">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`group relative overflow-hidden bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-10 ${
                index % 2 === 0
                  ? "animate-[slideFromLeft_900ms_ease_both]"
                  : "animate-[slideFromRight_900ms_ease_both]"
              }`}
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-red-700 transition duration-500 group-hover:w-2" />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-red-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em]">
                    {section.title}
                  </h2>

                  {section.body && (
                    <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate-600">
                      {section.body}
                    </p>
                  )}

                  {section.list && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base leading-7 text-slate-600"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-slate-200 text-2xl text-slate-400 transition group-hover:border-red-700 group-hover:bg-red-700 group-hover:text-white lg:flex">
                  ↗
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes slideFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-80px) scale(0.98);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes slideFromRight {
            0% {
              opacity: 0;
              transform: translateX(80px) scale(0.98);
              filter: blur(12px);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default PrivacyPolicy;