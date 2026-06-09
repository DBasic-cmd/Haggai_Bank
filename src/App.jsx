import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feedback from "./components/Feedback";
import Offer from "./components/Offer";
import Appointment from "./components/Appointment";
import History from "./components/History";
import Footer from "./components/Footer";

import BoardOfDirectors from "./components/BoardOfDirectors";
import PlaceholderPage from "./components/PlaceholderPage";
import InvestorRelations from "./components/InvestorRelations";
import CompanySecretariat from "./components/CompanySecretariat";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import CustomerComplaintForm from "./components/CustomerComplaintForm";
import SubjectAccessRequestForm from "./components/SubjectAccessRequestForm";
import Career from "./components/Career";
import WhistleBlower from "./components/WhistleBlower";
import ManagementStaff from "./components/ManagementStaff";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Category />
      <Feedback />
      <Offer />
      <Appointment />
      <History />
    </>
  );
};

const App = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/about/management-staff" element={<ManagementStaff />} />
        <Route path="/about/our-story" element={<PlaceholderPage title="Our Story" />} />
        <Route path="/about/investor-relations" element={<InvestorRelations />} />
        <Route path="/about/whistle-blower" element={<WhistleBlower />} />
        <Route path="/about/company-secretariat" element={<CompanySecretariat />} />
        <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about/terms-of-use" element={<TermsOfUse />} />
        <Route
          path="/about/customer-complaint-form"
          element={<CustomerComplaintForm />}
        />
        <Route
          path="/about/subject-access-request-form"
          element={<SubjectAccessRequestForm />}
        />
        <Route path="/about/career" element={<Career />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;