import { FC, ReactNode } from "react";
import cls from "./DropDown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface DropDownProps {
  className?: string;
  children: ReactNode;
  dropdownOpen: boolean;
  setDropdownOpen: (prev: boolean) => void
}

export const DropDown: FC<DropDownProps> = (props) => {
  const { className, children, dropdownOpen, setDropdownOpen } = props;
  return (
    <div className={classNames(cls.dropdown, {[cls.open]: dropdownOpen}, [className])}>
      {children}
    </div>
  );
};
