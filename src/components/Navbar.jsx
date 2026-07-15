import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { productGroups } from "../data/productsData";

const leadershipLinks = [
  { label: "Board of Directors", href: "/about/board-of-directors" },
  { label: "Management ", href: "/about/management-staff" },
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
  { label: "Careers", href: "/about/career" },
  { label: "RSA", href: "/about/rsa" },
];

const resourceLinks = [
  { label: "Our Resource Center", href: "/resources" },
  { label: "Mortgage Calculator", href: "/resources/mortgage-calculator" },
  { label: "Downloads", href: "/resources/downloads" },
  { label: "FAQs", href: "/resources/faqs" },
  {
    label: "Know How Much You Can Borrow",
    href: "/resources/how-much-can-you-borrow",
  },
  {
    label: "Dormant Account Reactivation Form",
    href: "/resources/dormant-account-reactivation-form",
  },
];

const contactLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Get a Call Back", href: "/get-a-call-back" },
];

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Haggai History", href: "/history" },
];

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileLeadershipOpen, setMobileLeadershipOpen] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const [mobileContactOpen, setMobileContactOpen] = React.useState(false);

  const closeMenus = () => {
    setSidebarOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
    setContactOpen(false);
    setMobileAboutOpen(false);
    setMobileLeadershipOpen(false);
    setMobileProductsOpen(false);
    setMobileResourcesOpen(false);
    setMobileContactOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-8 lg:px-14 xl:px-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/35 px-4 py-3 text-white shadow-2xl backdrop-blur-2xl lg:px-5">
          <Link to="/" onClick={closeMenus} className="flex items-center gap-3">
            <img
              src={assets.haggai_logo}
              className="h-10 w-auto rounded-sm bg-white/95 px-2 py-1 sm:h-11"
              alt="Haggai Mortgage Bank"
            />
          </Link>

          {sidebarOpen && (
            <button
              type="button"
              onClick={closeMenus}
              aria-label="Close mobile menu overlay"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
          )}

          <div
            className={`fixed bottom-0 top-0 z-50 flex h-dvh w-[min(92vw,420px)] flex-col overflow-y-auto bg-[#080808] px-8 pb-16 pt-24 text-white shadow-2xl transition-all duration-500 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:static lg:z-auto lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none ${sidebarOpen ? "right-0" : "-right-full"
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

            <div className="flex min-h-full flex-col gap-6 lg:min-h-0 lg:flex-row lg:items-center lg:gap-7">
              <Link
                to="/"
                onClick={closeMenus}
                className="relative text-sm font-medium text-white/85 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>

              {/* ABOUT */}
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
                    className={`text-red-400 transition duration-300 ${aboutOpen || mobileAboutOpen ? "rotate-180" : ""
                      }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`hidden lg:absolute lg:left-1/2 lg:top-full lg:block lg:w-[820px] lg:-translate-x-1/2 lg:pt-7 lg:transition-all lg:duration-300 ${aboutOpen
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
                        Explore leadership, investor resources, policies,
                        company records, forms and career opportunities.
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

                        <div className="pointer-events-none absolute left-full top-0 z-50 ml-1 w-64 translate-x-2 border border-white/10 bg-[#111111] p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover/leadership:pointer-events-auto group-hover/leadership:translate-x-0 group-hover/leadership:opacity-100">
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
                  className={`mt-5 grid gap-3 border-l border-white/10 pl-4 lg:hidden ${mobileAboutOpen ? "block" : "hidden"
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
                    className={`grid gap-3 border-l border-red-700/40 pl-4 ${mobileLeadershipOpen ? "block" : "hidden"
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

              {/* PRODUCTS */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white"
                >
                  Products
                  <span
                    className={`text-red-400 transition duration-300 ${productsOpen || mobileProductsOpen ? "rotate-180" : ""
                      }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`hidden lg:absolute lg:left-1/2 lg:top-full lg:block lg:w-[1100px] lg:-translate-x-1/2 lg:pt-7 lg:transition-all lg:duration-300 ${productsOpen
                    ? "lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
                    : "lg:pointer-events-none lg:-translate-y-2 lg:opacity-0"
                    }`}
                >
                  <div className="absolute left-0 right-0 top-0 h-8" />

                  <div className="grid grid-cols-[0.85fr_1.4fr] overflow-hidden border border-white/10 bg-[#090909]/95 shadow-2xl backdrop-blur-2xl">
                    <div className="bg-red-700 p-8">
                      <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100">
                        Products
                      </p>

                      <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                        Mortgage, Retail & Digital Banking Solutions.
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-white/75">
                        Explore home financing, retail banking, current
                        accounts, savings, remittance services, and secure
                        electronic banking channels.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5 p-5">
                      {productGroups.map((group) => (
                        <div key={group.slug}>
                          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-red-300">
                            {group.title}
                          </p>

                          <div className="space-y-1">
                            {group.products.map((product) => (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                onClick={closeMenus}
                                className="block border border-transparent px-3 py-2 text-sm font-semibold text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-5 grid gap-5 border-l border-white/10 pl-4 lg:hidden ${mobileProductsOpen ? "block" : "hidden"
                    }`}
                >
                  {productGroups.map((group) => (
                    <div key={group.slug}>
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-300">
                        {group.title}
                      </p>

                      <div className="grid gap-3 border-l border-red-700/40 pl-4">
                        {group.products.map((product) => (
                          <Link
                            key={product.slug}
                            to={`/products/${product.slug}`}
                            onClick={closeMenus}
                            className="text-sm font-medium text-white/60 transition hover:text-white"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RESOURCES */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white"
                >
                  Resources
                  <span
                    className={`text-red-400 transition duration-300 ${resourcesOpen || mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`hidden lg:absolute lg:left-1/2 lg:top-full lg:block lg:w-[720px] lg:-translate-x-1/2 lg:pt-7 lg:transition-all lg:duration-300 ${resourcesOpen
                    ? "lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
                    : "lg:pointer-events-none lg:-translate-y-2 lg:opacity-0"
                    }`}
                >
                  <div className="absolute left-0 right-0 top-0 h-8" />

                  <div className="grid grid-cols-[0.9fr_1.1fr] overflow-hidden border border-white/10 bg-[#090909]/95 shadow-2xl backdrop-blur-2xl">
                    <div className="bg-red-700 p-8">
                      <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100">
                        Resources
                      </p>

                      <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                        Tools, downloads and mortgage guidance.
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-white/75">
                        Access calculators, downloads, FAQs, borrowing guides
                        and customer service forms.
                      </p>
                    </div>

                    <div className="grid gap-1 p-5">
                      {resourceLinks.map((link) => (
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
                  className={`mt-5 grid gap-3 border-l border-white/10 pl-4 lg:hidden ${mobileResourcesOpen ? "block" : "hidden"
                    }`}
                >
                  {resourceLinks.map((link) => (
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

              {/* CONTACT */}
              <div
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white"
                >
                  Contact
                  <span
                    className={`text-red-400 transition duration-300 ${contactOpen || mobileContactOpen ? "rotate-180" : ""
                      }`}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`hidden lg:absolute lg:left-1/2 lg:top-full lg:block lg:w-72 lg:-translate-x-1/2 lg:pt-7 lg:transition-all lg:duration-300 ${contactOpen
                    ? "lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
                    : "lg:pointer-events-none lg:-translate-y-2 lg:opacity-0"
                    }`}
                >
                  <div className="absolute left-0 right-0 top-0 h-8" />

                  <div className="border border-white/10 bg-[#090909]/95 p-3 shadow-2xl backdrop-blur-2xl">
                    {contactLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={closeMenus}
                        className="block border border-transparent px-4 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-5 grid gap-3 border-l border-white/10 pl-4 lg:hidden ${mobileContactOpen ? "block" : "hidden"
                    }`}
                >
                  {contactLinks.map((link) => (
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

              {navLinks.map((link) => {
                const isRoute = link.href?.startsWith("/");

                return isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeMenus}
                    className="relative text-sm font-medium text-white/85 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenus}
                    className="relative text-sm font-medium text-white/85 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-6 lg:hidden">
                <a
                  href="https://online.haggaisecure.com/haggaionline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="rounded-full border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:border-red-500 hover:bg-red-700"
                >
                  Old Internet Banking
                </a>

                <Link
                  to="/open-account"
                  onClick={closeMenus}
                  className="rounded-full bg-red-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:bg-red-800"
                >
                  Open Account
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://online.haggaisecure.com/haggaionline/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-red-500 hover:bg-red-700 md:inline-flex"
            >
              Old Internet Banking
            </a>

            <Link
              to="/open-account"
              className="hidden rounded-full bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-red-800 md:inline-flex"
            >
              Open Account
            </Link>

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

      <div className="fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-red-700 sm:bottom-8 sm:right-8">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
};

export default Navbar;