import { ThemeButton } from "shared/ui/ThemeButton/ThemeButton";
import cls from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Logo } from "widgets/Logo/Logo";
import { HeaderNav } from "./HeaderNavs/HeaderNav";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <div className={classNames(cls.navInner)}>
            <Logo classic={true} />
            <HeaderNav toPages={true} />
          </div>
          <div className={classNames(cls.navInner)}>
            <HeaderNav toFunctional={true} />
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};
