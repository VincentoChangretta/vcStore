import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <button className={classNames(cls.button, {}, [className])} {...otherProps}>
      {children}
    </button>
  );
};
