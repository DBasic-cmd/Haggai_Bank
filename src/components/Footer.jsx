import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Footer = () => {
  const footerSections = [
    {
      title: "About Haggai",
      links: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Board of Directors", href: "/about/board-of-directors" },
        { name: "Management Staff", href: "/about/management-staff" },
        { name: "Career", href: "/about/career" },
      ],
    },
    {
      title: "Mortgage Products",
      links: [
        { name: "Haggai Plot Advance", href: "/products/haggai-plot-advance" },
        {
          name: "Haggai House Completion",
          href: "/products/haggai-house-completion",
        },
        {
          name: "Haggai House Purchase",
          href: "/products/haggai-house-purchase",
        },
        { name: "Haggai Renovation", href: "/products/haggai-renovation" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Mortgage Calculator",
          href: "/resources/mortgage-calculator",
        },
        { name: "Downloads", href: "/resources/downloads" },
        { name: "FAQs", href: "/resources/faqs" },
        {
          name: "Know How Much You Can Borrow",
          href: "/resources/how-much-can-you-borrow",
        },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Get A Call Back", href: "/get-a-call-back" },
        {
          name: "Customer Complaint Form",
          href: "/about/customer-complaint-form",
        },
        { name: "Whistle Blower", href: "/about/whistle-blower" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden py-16 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2600&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/78 " />

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full  blur-[160px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full  blur-[160px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 border-b border-white/10 pb-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">
            Haggai Mortgage Bank Limited
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.055em] md:text-6xl">
            Building Homes. Creating Futures.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            Haggai Mortgage Bank Limited remains committed to providing
            innovative mortgage and banking solutions that empower individuals,
            families, churches, and businesses to achieve their dreams of
            property ownership and financial growth.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-lg font-bold text-white">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center text-sm text-white/60 transition duration-300 hover:text-white"
                    >
                      <span className="mr-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.title === "About Haggai" && (
                <div className="mt-6">
                  <img
                    src={assets.ndpr_audit_compliant}
                    alt="NDPR Audit Compliant 2024"
                    className="h-24 w-auto rounded-lg bg-white p-1"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-10 grid gap-6 border-y border-white/10 py-8 md:grid-cols-3">
          <div>
            <h4 className="mb-2 font-bold text-white">Head Office</h4>
            <p className="text-sm leading-7 text-white/60">
              119, Bode Thomas Street,
              <br />
              Surulere, Lagos State, Nigeria
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-white">Email</h4>
            <a
              href="mailto:info@haggaibank.com"
              className="text-sm text-white/60 transition hover:text-red-300"
            >
              info@haggaibank.com
            </a>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-white">Support</h4>
            <a
              href="mailto:alwayson@haggaibank.com"
              className="text-sm text-white/60 transition hover:text-red-300"
            >
              alwayson@haggaibank.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} Haggai Mortgage Bank Limited. All
            rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/about/privacy-policy"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/about/terms-of-use"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              to="/about/subject-access-request-form"
              className="text-sm text-white/45 transition hover:text-white"
            >
              Subject Access Request
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;