import React from "react";

const WhatsAppBubble = () => {
  const [open, setOpen] = React.useState(false);

  const phoneNumber = "2348144772676";
  const message = encodeURIComponent(
    "Hello Haggai Mortgage Bank, I would like to make an enquiry."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-24 right-5 z-[70] sm:right-8">
      {open && (
        <div className="mb-4 w-[300px] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl dark:bg-[#101010]">
          <div className="bg-[#25D366] px-5 py-4 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em]">
              WhatsApp Chat
            </p>
            <h3 className="mt-1 text-lg font-bold">Haggai Mortgage Bank</h3>
          </div>

          <div className="p-5">
            <div className="rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-700 dark:bg-white/10 dark:text-white/75">
              Hello 👋 How can we help you today?
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {open ? "×" : "☏"}
      </button>
    </div>
  );
};

export default WhatsAppBubble;
