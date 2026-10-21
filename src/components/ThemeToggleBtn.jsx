import React from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`cursor-pointer flex items-center justify-center p-1.5 rounded-full transition-all duration-200 active:scale-95 hover:opacity-90 ${isDark ? "bg-transparent text-white" : "bg-white text-slate-800 shadow-sm"
        }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <img
          src={assets.sun_icon}
          className="size-7 p-1 border-none"
          alt="Sun icon"
        />
      ) : (
        <img
          src={assets.moon_icon}
          className="size-7 p-1 border-none"
          alt="Moon icon"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;