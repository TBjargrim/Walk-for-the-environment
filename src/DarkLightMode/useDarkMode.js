import { useEffect, useState } from "react";

//Skapar en egen hook som används i App.js och renderas ut i AccountPage
// Det valda temat sparas i LocalStorage
// retunerar statet, tema och funktionen som togglar de olika teman.
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};
