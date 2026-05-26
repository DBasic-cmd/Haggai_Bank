import React from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button className="cursor-pointer">
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={assets.sun_icon}
          className="size-8.5 p-1.5 border border-none"
          alt=""
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={assets.moon_icon}
          className="size-8.5 p-1.5 border bg-none border-none"
          alt=""
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;