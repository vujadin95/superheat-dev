"use client";
import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";
import Button from "../Button/Button";

import { useState, useEffect } from "react";
import { changeTheme } from "@/app/utils/themeHandler";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  function toggleTheme() {
    changeTheme();
    setTheme(localStorage.getItem("theme") || "light");
  }

  return (
    <Button className="flex items-center gap-4" handleClick={toggleTheme}>
      {theme && theme === "light" ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
export default ThemeSwitcher;
