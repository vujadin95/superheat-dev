"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ToggleThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="change theme button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:bg-zinc-600 ml-auto mr-4"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsSunFill className="w-5 h-5 text-orange-300" />
      ) : (
        <BsMoonFill className="w-5 h-5 text-darkColor" />
      )}
    </button>
  );
};
export default ToggleThemeButton;
