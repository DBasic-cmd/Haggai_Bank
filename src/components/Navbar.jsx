import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const leadershipLinks = [
  { label: "Board of Directors", href: "/about/board-of-directors" },
  { label: "Management Staff", href: "/about/management-staff" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about/our-story" },
  { label: "Investor Relations", href: "/about/investor-relations" },
  { label: "Whistle Blower", href: "/about/whistle-blower" },
  { label: "Company Secretariat", href: "/about/company-secretariat" },
  { label: "Privacy Policy", href: "/about/privacy-policy" },
  { label: "Term Of Use", href: "/about/terms-of-use" },
  { label: "Customer Complaint Form", href: "/about/customer-complaint-form" },
  {
    label: "Subject Access Request Form",
    href: "/about/subject-access-request-form",
  },
  { label: "Career", href: "/about/career" },
];

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
  { label: "Haggai History", href: "/#history" },
];

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileLeadershipOpen, setMobileLeadershipOpen] = React.useState(false);

  const closeMenus = () => {
    setSidebarOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
    setMobileLeadershipOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-8 lg:px-14 xl:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/35 px-4 py-3 text-white shadow-2xl backdrop-blur-2xl lg:px-5">
        <Link to="/" onClick={closeMenus} className="flex items-center gap-3">
          <img
            src={assets.haggai_logo}
            className="h-10 w-auto rounded-sm bg-white/95 px-2 py-1 sm:h-11"
            alt="Haggai Mortgage Bank"
          />
        </Link>

        <div
          className={`fixed bottom-0 top-0 z-50 flex w-80 flex-col bg-[#080808] px-8 pt-24 text-white shadow-2xl transition-all duration-500 lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none ${
            sidebarOpen ? "right-0" : "-right-96"
          }`}
        >
          <button
            type="button"
            onClick={closeMenus}
            className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 p-2 lg:hidden"
            aria-label="Close menu"
          >
            <img src={assets.close_icon} alt="" className="h-5 w-5 invert" />
          </button>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-7">
            <Link
              to="/"
              onClick={closeMenus}
              className="relative text-sm font-medium text-white/85 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white"
              >
                About Us
                <span
                  className={`text-red-400 transition duration-300 ${
                    aboutOpen || mobileAboutOpen ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              <div
                className={`hidden lg:absolute lg:left-1/2 lg:top-full lg:block lg:w-[820px] lg:-translate-x-1/2 lg:pt-7 lg:transition-all lg:duration-300 ${
                  aboutOpen
                    ? "lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
                    : "lg:pointer-events-none lg:-translate-y-2 lg:opacity-0"
                }`}
              >
                <div className="absolute left-0 right-0 top-0 h-8" />

                <div className="grid grid-cols-[0.9fr_1.25fr] overflow-visible border border-white/10 bg-[#090909]/95 shadow-2xl backdrop-blur-2xl">
                  <div className="bg-red-700 p-8">
                    <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100">
                      About Haggai
                    </p>

                    <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                      Governance, trust and mortgage leadership.
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/75">
                      Explore leadership, investor resources, policies, company
                      records, forms and career opportunities.
                    </p>
                  </div>

                  <div className="relative grid grid-cols-2 gap-x-2 gap-y-1 p-5">
                    <div className="group/leadership relative">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between border border-transparent px-4 py-3 text-left text-sm font-semibold text-white/75 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                      >
                        Leadership
                        <span className="text-red-400 transition duration-300 group-hover/leadership:translate-x-1">
                          ›
                        </span>
                      </button>

                      <div className="absolute left-full top-0 z-50 ml-1 w-64 translate-x-2 border border-white/10 bg-[#111111] p-3 opacity-0 shadow-2xl transition-all duration-300 pointer-events-none group-hover/leadership:translate-x-0 group-hover/leadership:opacity-100 group-hover/leadership:pointer-events-auto">
                        <div className="absolute -left-2 top-0 h-full w-3" />

                        {leadershipLinks.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={closeMenus}
                            className="block border border-transparent px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {aboutLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={closeMenus}
                        className="border border-transparent px-4 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`mt-5 grid gap-3 border-l border-white/10 pl-4 lg:hidden ${
                  mobileAboutOpen ? "block" : "hidden"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileLeadershipOpen(!mobileLeadershipOpen)
                  }
                  className="flex items-center justify-between text-left text-sm font-bold text-white/80"
                >
                  Leadership
                  <span className="text-red-400">
                    {mobileLeadershipOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid gap-3 border-l border-red-700/40 pl-4 ${
                    mobileLeadershipOpen ? "block" : "hidden"
                  }`}
                >
                  {leadershipLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeMenus}
                      className="text-sm font-medium text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {aboutLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMenus}
                    className="text-sm font-medium text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                className="relative text-sm font-medium text-white/85 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <a
            href="/#internet-banking"
            className="hidden rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-red-500 hover:bg-red-700 md:inline-flex"
          >
            Internet Banking
          </a>

          <a
            href="/#create-account"
            className="hidden rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-red-800 md:inline-flex"
          >
            Open Account
          </a>

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-full border border-white/20 bg-black/40 p-2 shadow-xl backdrop-blur lg:hidden"
            aria-label="Open menu"
          >
            <img
              src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
              alt=""
              className="h-7 w-7 invert"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;