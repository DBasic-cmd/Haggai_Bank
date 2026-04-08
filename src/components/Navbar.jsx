import React from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20  backdrop-blur-xl font-medium ">
      <img
        src={theme === "dark" ? assets.haggai_logo : assets.haggai_logo}
        className="w-32 sm:w-40"
        alt=""
        width={20}
        height={20}
      />

      <div className={`flex text-gray-700 dark:text-white lg:text-sm ${!sidebarOpen ? 'max-lg:w-0 overflow-hidden': 'max-lg:w-60 max-lg:pl-10'} max-lg:fixed top-0 bottom-0 right-0 max-lg:min-h-screen max-lg:h-full max-lg:flex-col max-lg:bg-white max-lg:text-white max-lg:pt-20 lg:items-center gap-5 transition-all`}>
        
        <img src={assets.close_icon} alt="" className="w-5 absolute right-4 top-4 lg:hidden " onClick={() => setSidebarOpen(false)}/>
        
        <a href="#" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Home
        </a>
        <a href="#about" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          About
        </a>
        <a href="#products" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Products
        </a>
        <a href="#projects" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Projects
        </a>
        <a href="#resources" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Resources
        </a>
        <a href="#contact" className="sm:hover:border-b" onClick={() => setSidebarOpen(false)}>
          Contact
        </a>
      </div>

      <div className="flex items-center sm:gap-4 gap-2">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className="w-8 lg:hidden"/>
        

         <a
          href="#internet-banking"
          className=" border border-red-700 text-sm rounded-lg dark:bg-white dark:border-0  px-4 py-2  hover:bg-red-700 hover:text-white text-red-700 transition-colors hidden md:inline-flex items-center gap-2"
        >
          Internet Banking
          
        </a>

        <a
          href="#create-account"
          className="bg-red-700 text-sm rounded-lg  px-4 py-2   hover:text-white hover:bg-red-800 text-white transition-colors hidden md:inline-flex items-center gap-2"
        >
          Open Account
          {/* <img src={assets.arrow_icon} alt="" /> */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
