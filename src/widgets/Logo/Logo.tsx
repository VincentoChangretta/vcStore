import { chdir } from "process";
import { FC, ReactNode } from "react";
import cls from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

interface LogoProps {
  className?: string;
  classic?: boolean;
  children?: ReactNode;
}

export const Logo: FC<LogoProps> = (props) => {
  const { classic, children, className } = props;
  return (
    <Link
      to="/"
      className={classNames("", { [cls.logo]: classic }, [className])}
    >
      {classic ? "vcShop" : children}
    </Link>
  );
};
