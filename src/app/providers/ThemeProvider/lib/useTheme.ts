import { useContext } from "react";
import { LOCAL_STORE_THEME, Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORE_THEME, newTheme)
  };
  return {theme, toggleTheme}
};
