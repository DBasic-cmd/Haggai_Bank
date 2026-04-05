import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feedback from "./components/Feedback";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

const App = () => {

  const [theme, setTheme] = React.useState("light");
  return (
    <div className="bg-red-700 dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Banner />
      <Category />
      <Feedback />
      <Appointment />
      <Footer />
    </div>
  );
};

export default App;
