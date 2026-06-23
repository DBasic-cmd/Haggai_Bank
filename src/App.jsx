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
import OurStory from "./components/OurStory";
import InvestorRelations from "./components/InvestorRelations";
import CompanySecretariat from "./components/CompanySecretariat";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import CustomerComplaintForm from "./components/CustomerComplaintForm";
import SubjectAccessRequestForm from "./components/SubjectAccessRequestForm";
import Career from "./components/Career";
import WhistleBlower from "./components/WhistleBlower";
import ManagementStaff from "./components/ManagementStaff";
import ManagementStaffProfile from "./components/ManagementStaffProfile";
import OpenAccount from "./components/OpenAccount";
import DataConsent from "./components/DataConsent";
import ProductPage from "./components/ProductPage";
import RSA from "./components/RSA";
import MortgageCalculator from "./components/MortgageCalculator";
import Downloads from "./components/Downloads";
import FAQs from "./components/FAQs";
import BorrowAmount from "./components/BorrowAmount";
import DormantAccountForm from "./components/DormantAccountForm";
import ContactPage from "./components/ContactPage";
import GetACallBack from "./components/GetACallBack";
import ScrollToTop from "./components/ScrollToTop";

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
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/about/management-staff" element={<ManagementStaff />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/investor-relations" element={<InvestorRelations />} />
        <Route path="/about/whistle-blower" element={<WhistleBlower />} />
        <Route path="/about/company-secretariat" element={<CompanySecretariat />} />
        <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about/terms-of-use" element={<TermsOfUse />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-call-back" element={<GetACallBack />} />

        <Route
          path="/about/management-staff/:slug"
          element={<ManagementStaffProfile />}
        />
        <Route
          path="/about/customer-complaint-form"
          element={<CustomerComplaintForm />}
        />
        <Route
          path="/about/subject-access-request-form"
          element={<SubjectAccessRequestForm />}
        />
        <Route path="/about/career" element={<Career />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="/open-account/data-consent" element={<DataConsent />} />
        <Route path="/about/rsa" element={<RSA />} />

        <Route path="/resources/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/resources/downloads" element={<Downloads />} />
        <Route path="/resources/faqs" element={<FAQs />} />
        <Route
          path="/resources/how-much-can-you-borrow"
          element={<BorrowAmount />}
        />
        <Route
          path="/resources/dormant-account-reactivation-form"
          element={<DormantAccountForm />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;