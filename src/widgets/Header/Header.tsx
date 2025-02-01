import { ThemeButton } from "shared/ui/ThemeButton/ThemeButton";
import cls from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Logo } from "widgets/Logo/Logo";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <Logo classic={true} />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
