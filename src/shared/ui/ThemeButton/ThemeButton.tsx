import cls from "./ThemeButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeButton, {}, [className])}
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={theme === Theme.LIGHT ? faMoon : faSun} />
    </Button>
  );
};
