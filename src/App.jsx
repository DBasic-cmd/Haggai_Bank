import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feedback from "./components/Feedback";
import Offer from "./components/Offer";
import Appointment from "./components/Appointment";
import History from "./components/History";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Banner />
      <Category />
      <Feedback />
      <Offer />
      <Appointment />
      <History />
      <About theme={theme} />
      <Footer />
    </div>
  );
};

export default App;