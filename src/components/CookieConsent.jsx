import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("haggai-cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly for a smooth transition
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("haggai-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("haggai-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 p-6 rounded-2xl bg-slate-950/95 border border-white/10 text-white shadow-2xl backdrop-blur-md transition-all duration-500 ease-out transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Cookie SVG Icon */}
        <div className="flex-shrink-0 bg-red-700/25 p-2.5 rounded-xl border border-red-500/20">
          <svg
            className="w-6 h-6 text-red-500 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m12.728 0l-.707.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            We Value Your Privacy
          </h4>
          <p className="mt-2 text-xs text-white/60 leading-relaxed">
            Haggai Mortgage Bank uses cookies to enhance your browsing experience,
            deliver personalized content, and analyze our site traffic. By clicking{" "}
            <span className="text-white">"Accept All"</span>, you consent to our use of
            cookies. Read our{" "}
            <Link
              to="/about/privacy-policy"
              className="text-red-400 hover:text-red-300 underline underline-offset-2 transition"
            >
              Privacy Policy
            </Link>{" "}
            to learn more.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={handleAccept}
              type="button"
              className="flex-1 bg-red-700 hover:bg-red-800 text-white py-2.5 px-4 rounded-xl text-2xs font-black uppercase tracking-[0.18em] transition-all duration-300 shadow-lg shadow-red-950/20 active:scale-[0.98]"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              type="button"
              className="flex-1 border border-white/20 hover:bg-white/10 text-white/70 hover:text-white py-2.5 px-4 rounded-xl text-2xs font-black uppercase tracking-[0.18em] transition-all duration-300 active:scale-[0.98]"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
