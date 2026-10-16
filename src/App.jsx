import React from "react";

import {
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";

// Main website components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feedback from "./components/Feedback";
import Offer from "./components/Offer";
import Appointment from "./components/Appointment";
import History from "./components/History";
import Footer from "./components/Footer";
import WhatsAppBubble from "./components/WhatsAppBubble";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

// About Us pages
import BoardOfDirectors from "./components/BoardOfDirectors";
import BoardOfDirectorsProfile from "./components/BoardOfDirectorsProfile";
import OurStory from "./components/OurStory";
import InvestorRelations from "./components/InvestorRelations";
import CompanySecretariat from "./components/CompanySecretariat";
import LegalPrivacy from "./components/LegalPrivacy";
import TermsOfUse from "./components/TermsOfUse";
import CustomerComplaintForm from "./components/CustomerComplaintForm";
import SubjectAccessRequestForm from "./components/SubjectAccessRequestForm";
import Career from "./components/Career";
import WhistleBlower from "./components/WhistleBlower";
import ManagementStaff from "./components/ManagementStaff";
import ManagementStaffProfile from "./components/ManagementStaffProfile";
import RSA from "./components/RSA";

// Banking and product pages
import OpenAccount from "./components/OpenAccount";
import DataConsent from "./components/DataConsent";
import ProductPage from "./components/ProductPage";

// Resource pages
import MortgageCalculator from "./components/MortgageCalculator";
import Downloads from "./components/Downloads";
import FAQs from "./components/FAQs";
import BorrowAmount from "./components/BorrowAmount";
import DormantAccountForm from "./components/DormantAccountForm";

// Contact pages
import ContactPage from "./components/ContactPage";
import GetACallBack from "./components/GetACallBack";

// Admin pages
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminProperties from "./pages/AdminProperties/AdminProperties";

// Admin authentication
import {
  AdminAuthProvider,
  ProtectedAdminRoute,
} from "./auth/AdminAuth";

function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <Category />
      <Feedback />
      <Offer />
      <Appointment />
      <History />
      <WhatsAppBubble />
    </>
  );
}

function WebsiteLayout({ theme, setTheme }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-slate-950 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}

function AdminLayout() {
  return (
    <AdminAuthProvider>
      <Outlet />
    </AdminAuthProvider>
  );
}

function NotFoundPage() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "grid",
        placeContent: "center",
        gap: "16px",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <h1>Page not found</h1>

      <p>The page you requested could not be found.</p>

      <Link to="/">Return to the homepage</Link>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  React.useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Continue without persistent theme storage.
    }
  }, [theme]);

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* CORPORATE WEBSITE */}
        <Route
          element={
            <WebsiteLayout
              theme={theme}
              setTheme={setTheme}
            />
          }
        >
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* ABOUT US */}
          <Route
            path="/about/board-of-directors"
            element={<BoardOfDirectors />}
          />

          <Route
            path="/about/board-of-directors/:slug"
            element={<BoardOfDirectorsProfile />}
          />

          <Route
            path="/about/management-staff"
            element={<ManagementStaff />}
          />

          <Route
            path="/about/management-staff/:slug"
            element={<ManagementStaffProfile />}
          />

          <Route
            path="/about/our-story"
            element={<OurStory />}
          />

          <Route
            path="/about/investor-relations"
            element={<InvestorRelations />}
          />

          <Route
            path="/about/whistle-blower"
            element={<WhistleBlower />}
          />

          <Route
            path="/about/company-secretariat"
            element={<CompanySecretariat />}
          />

          <Route
            path="/about/privacy-policy"
            element={<LegalPrivacy />}
          />

          <Route
            path="/about/terms-of-use"
            element={<TermsOfUse />}
          />

          <Route
            path="/about/customer-complaint-form"
            element={<CustomerComplaintForm />}
          />

          <Route
            path="/about/subject-access-request-form"
            element={<SubjectAccessRequestForm />}
          />

          <Route
            path="/about/career"
            element={<Career />}
          />

          <Route
            path="/about/rsa"
            element={<RSA />}
          />

          {/* PRODUCTS */}
          <Route
            path="/products/:slug"
            element={<ProductPage />}
          />

          {/* ACCOUNT OPENING */}
          <Route
            path="/open-account"
            element={<OpenAccount />}
          />

          <Route
            path="/open-account/data-consent"
            element={<DataConsent />}
          />

          {/* RESOURCES */}
          <Route
            path="/resources/mortgage-calculator"
            element={<MortgageCalculator />}
          />

          <Route
            path="/resources/downloads"
            element={<Downloads />}
          />

          <Route
            path="/resources/faqs"
            element={<FAQs />}
          />

          <Route
            path="/resources/how-much-can-you-borrow"
            element={<BorrowAmount />}
          />

          <Route
            path="/resources/dormant-account-reactivation-form"
            element={<DormantAccountForm />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/get-a-call-back"
            element={<GetACallBack />}
          />

          {/* UNKNOWN WEBSITE ROUTES */}
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <Navigate
                to="/admin/properties"
                replace
              />
            }
          />

          <Route
            path="login"
            element={<AdminLogin />}
          />

          {/* PROTECTED ADMIN ROUTES */}
          <Route element={<ProtectedAdminRoute />}>
            <Route
              path="properties"
              element={<AdminProperties />}
            />
          </Route>

          <Route
            path="*"
            element={
              <Navigate
                to="/admin/login"
                replace
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}