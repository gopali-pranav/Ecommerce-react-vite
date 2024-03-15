import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    applyDarkModeClass(isDarkMode);
  }, []);

  const applyDarkModeClass = (isDarkMode) => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    applyDarkModeClass(newDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default DarkMode;
