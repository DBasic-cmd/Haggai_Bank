import React from "react";
import { Link } from "react-router-dom";

const DataConsent = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      <div className="fixed inset-0 bg-white/82 backdrop-blur-[2px]" />

      <section className="relative z-10 px-5 pb-28 pt-40 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-5xl bg-white px-6 py-12 shadow-[0_40px_120px_rgba(0,0,0,0.22)] sm:px-10 lg:px-14">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700">
            Account Opening
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            DATA CONSENT DECLARATION
          </h1>

          <p className="mt-4 text-2xl text-slate-400">
            Haggai Mortgage Bank
          </p>

          <div className="mt-12 space-y-10 text-[18px] leading-9 text-slate-600">
            <p>
              By proceeding with this account opening process, you confirm that
              you voluntarily give your consent to Haggai Mortgage Bank to
              collect, process, verify, and use your personal information
              strictly for the purpose of opening and managing your bank
              account, in line with applicable regulatory requirements.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                1. Consent to Use Personal Information
              </h2>

              <p className="mt-4">
                I hereby consent to Haggai Mortgage Bank collecting and
                processing my personal information, including but not limited to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>My personal identification details</li>
                <li>Contact information</li>
                <li>Uploaded KYC documents</li>
                <li>Bank Verification Number (BVN)</li>
                <li>National Identification Number (NIN)</li>
              </ul>

              <p className="mt-4">for the purpose of:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Opening and operating my bank account</li>
                <li>
                  Verifying my identity and conducting customer due diligence
                </li>
                <li>
                  Complying with CBN KYC, AML/CFT, and related regulatory
                  requirements
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                2. BVN Consent via NIBSS
              </h2>

              <p className="mt-4">
                I expressly authorize Haggai Mortgage Bank to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Request and obtain my BVN information from the Nigeria
                  Inter-Bank Settlement System (NIBSS)
                </li>
                <li>
                  Send a One-Time Password (OTP) to the phone number registered
                  with my BVN
                </li>
                <li>
                  Validate my consent using the OTP before accessing my BVN
                  details
                </li>
              </ul>

              <p className="mt-4">
                I understand that failure to provide this consent or validate
                the OTP will prevent my account opening from proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                3. Consent to Data Verification & Sharing
              </h2>

              <p className="mt-4">
                I consent to my information being verified and, where required,
                shared with:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Regulatory and supervisory authorities (including CBN and NDIC)
                </li>
                <li>
                  Authorized third parties and service providers (including
                  NIBSS)
                </li>
                <li>
                  Internal bank units responsible for compliance, operations,
                  audit, and risk management
                </li>
              </ul>

              <p className="mt-4">
                strictly for lawful and regulatory purposes related to my
                account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                4. Consent Duration & Withdrawal
              </h2>

              <p className="mt-4">I understand that:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  This consent remains valid for as long as my relationship with
                  the bank exists or as required by law
                </li>
                <li>
                  Withdrawal of consent may result in the inability of the bank
                  to open or continue to operate my account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                5. Consent Confirmation
              </h2>

              <p className="mt-4">By selecting “I Agree”, I confirm that:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>I have read and understood this Data Consent Declaration</li>
                <li>
                  I freely and voluntarily give my consent without any form of
                  coercion
                </li>
                <li>
                  I authorize Haggai Mortgage Bank to process my data as
                  described above
                </li>
              </ul>

              <p className="mt-4">
                If I do not agree, I understand that I cannot proceed with the
                account opening process.
              </p>
            </section>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/open-account"
              className="text-sm font-black uppercase tracking-[0.22em] text-slate-500 transition hover:text-red-700"
            >
              ← Back to Open Account
            </Link>

            <Link
              to="/open-account"
              className="bg-red-700 px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-red-800"
            >
              I Agree
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataConsent;