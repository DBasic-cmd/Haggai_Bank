import React from 'react'

const Footer = () => {
  const footerSections = [
    {
      title: "About Haggai",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Leadership Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News & Updates", href: "#" }
      ]
    },
    {
      title: "Our Products",
      links: [
        { name: "Mortgage Loans", href: "#" },
        { name: "Plot Advance", href: "#" },
        { name: "House Completion", href: "#" },
        { name: "Investment Options", href: "#" }
      ]
    },
    {
      title: "Forms & Resources",
      links: [
        { name: "Application Forms", href: "#" },
        { name: "Loan Calculator", href: "#" },
        { name: "Property Guides", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    },
    {
      title: "Contact Us",
      links: [
        { name: "Customer Support", href: "#" },
        { name: "Branch Locator", href: "#" },
        { name: "Email Us", href: "#" },
        { name: "Live Chat", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black dark:bg-gray-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white dark:text-gray-700 font-bold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-red-800 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 dark:border-gray-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 Haggai Bank. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-red-800 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-red-800 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-red-800 transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer