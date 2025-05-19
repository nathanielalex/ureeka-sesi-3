"use client";

import { Button } from "./ui/button";
import { useLayoutEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode");
      const isDark = storedDarkMode === "true";
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
      return newDarkMode;
    });
  };

  return (
    <Button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-800 text-white rounded-full dark:bg-gray-200 dark:text-black cursor-pointer"
    >
      {darkMode ? "🌙" : "🌞"}
    </Button>
  );
};

export default DarkModeToggle;
