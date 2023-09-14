"use client";
import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";
import Button from "../Button/Button";

import { useState, useEffect } from "react";
import { changeTheme } from "@/app/utils/themeHandler";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<undefined | string>(undefined);
  const [isTheme, setIsTheme] = useState(false);

  function toggleTheme() {
    changeTheme();
    setTheme(localStorage.getItem("theme") || "light");
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      setIsTheme(true);
    } else {
      setTheme("light");
      setIsTheme(true);
    }
  }, []);

  return (
    <Button
      className="flex items-center gap-4 relative group/show"
      handleClick={toggleTheme}
    >
      {!isTheme ? (
        <div className="lds-ring w-6 h-6">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        theme && (theme === "light" ? <DarkIcon /> : <LightIcon />)
      )}
    </Button>
  );
};
export default ThemeSwitcher;
