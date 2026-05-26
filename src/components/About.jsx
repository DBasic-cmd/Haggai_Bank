import React from "react";
import assets from "../assets/assets";
import Sphere3D from "../components/Sphere3D";

const team = [
  {
    name: "Mrs. Kofoworola Owode",
    role: "Managing Director / Chief Executive Officer",
    image: assets.md_ceo,
    text: `Mrs. Kofoworola Owode, Managing Director/Chief Executive Officer of Haggai Mortgage Bank Limited, has over three decades of managerial, strategic business development, and leadership experience in mortgage banking and financial services.

She was appointed MD/CEO in 2022 and has a proven track record in driving revenue growth, optimizing operational performance, and leading high-performing teams across corporate and mortgage banking environments.

She has led major transformation initiatives including digital banking advancement, risk management strengthening, and corporate financing leadership.

She is a Fellow of CIBN, FICA, and holds multiple board-level professional memberships. She is an ordained Assistant Pastor in RCCG and is passionate about mentorship, youth development, and housing advocacy.`
  },

  {
    name: "Mr. Ajani Johnson",
    role: "Head, Electronic Banking",
    image: "src/assets/AjaniJohnson.png",
    text: `Mr. Ajani Johnson is a seasoned banking professional with over 17 years of experience in financial services, spanning electronic banking, digital transformation, treasury operations, and card services.

He has led the design and deployment of innovative digital banking products focused on customer experience and operational efficiency.

Since joining Haggai Mortgage Bank in 2019, he has driven several key digital transformation initiatives that improved service delivery and strengthened customer engagement.

He holds degrees in Mathematics (University of Ilorin) and Risk Management (University of Lagos) and is a member of several professional banking bodies.`
  },

  {
    name: "ADEWOLE Michael Olawale, FCIPM, FNIM",
    role: "Head, Corporate Services",
    image: "src/assets/michaelolawale.png",
    text: `Adewole Michael Olawale is a seasoned HR and corporate services executive with over 20 years of experience across manufacturing, IT, logistics, and financial services.

He specializes in HR strategy, talent management, employee relations, compensation systems, and organizational development.

He holds multiple academic qualifications including degrees in Agricultural Economics, Psychology, and Industrial & Labour Relations.

He is a Fellow of CIPM and NIM, and serves on governance boards including Vision University.`
  },

  {
    name: "Monday A. Kadiri",
    role: "Head, IT & E-Banking",
    image: "src/assets/modaykadiri.png",
    text: `Monday A. Kadiri is a technology executive with over 20 years of experience in digital transformation, cybersecurity, IT governance, and banking systems architecture.

He leads Haggai Bank’s technology infrastructure, digital banking platforms, and enterprise cybersecurity frameworks.

He has previously held senior roles at Dimension Data, Intercontinental Bank Plc, and Global Bank.

He holds an MBA from Hult International Business School and has executive training from Lagos Business School.`
  },

  {
    name: "Oluwatayo Kunle Awopegba, FCA, ACTI",
    role: "Chief Financial Officer",
    image: "src/assets/olawale.png",
    text: `Oluwatayo Kunle Awopegba is a finance executive with over 20 years of experience in banking finance, regulatory compliance, and financial strategy.

As CFO, he oversees financial reporting, treasury operations, budgeting, and regulatory compliance in line with IFRS standards.

He has strong working relationships with CBN, NDIC, and tax authorities, ensuring full regulatory alignment.

He is a Fellow of ICAN and an Associate of CITN, with an MBA in Finance Management.`
  }
];

const AboutPage = ({ theme }) => {
  return (
    <div
      id="about"
      className="relative bg-white text-gray-900 px-4 sm:px-12 lg:px-24 xl:px-40 py-28 overflow-hidden"
    >
      {/* 3D BACKGROUND (NOW PROPERLY BEHIND EVERYTHING) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
      <Sphere3D theme={theme} />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-24 max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            Leadership
          </h1>

          <div className="w-20 h-[1px] bg-red-600 mt-6 mb-6" />

          <p className="text-gray-600 text-lg leading-relaxed">
            Meet the individuals driving strategy, governance, innovation, and
            financial excellence at Haggai Mortgage Bank.
          </p>
        </div>

        {/* TEAM */}
        <div className="space-y-28">

          {team.map((member, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center group`}
            >

              {/* IMAGE */}
              <div
                className={`border border-gray-200 p-2 transition-all duration-500 group-hover:border-red-600/40 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[460px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* TEXT */}
              <div
                className={`transition-all duration-500 ${
                  index % 2 === 1 ? "md:order-1 md:text-right" : ""
                }`}
              >
                <h2 className="text-3xl font-light tracking-tight">
                  {member.name}
                </h2>

                <div className="w-16 h-[1px] bg-gray-300 mt-4 mb-5 mx-0 md:ml-auto md:mr-0" />

                <p className="text-red-700 uppercase tracking-widest text-xs mb-6">
                  {member.role}
                </p>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line max-w-xl md:ml-auto">
                  {member.text}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AboutPage;