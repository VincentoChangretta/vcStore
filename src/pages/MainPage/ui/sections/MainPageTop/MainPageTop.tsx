import { greekMainTop, greekMainTopLight } from "shared/assets";
import cls from "./MainPageTop.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface MainPageTopProps {
  className?: string;
}

export const MainPageTop = ({ className }: MainPageTopProps) => {
  const { theme } = useTheme();

  const setMainTopImage = () => {
    return theme === Theme.DARK ? greekMainTop : greekMainTopLight;
  };

  return (
    <section className={classNames(cls.mainPageTop, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.mainImage)}>
          <img className="img" src={setMainTopImage()} alt="main image" />
          <div className={cls.mainImageShadow}></div>
        </div>
      </div>
    </section>
  );
};
