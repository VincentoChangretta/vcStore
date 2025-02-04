import { FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum InputTheme {
  SMALL = "small",
  FULL = "full",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme: InputTheme;
  absolutePlaceholder: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, theme, absolutePlaceholder, ...otherProps } = props;

  return (
    <div className={classNames(cls.inputBox, {}, [className])}>
      <p className={classNames(cls.absolutePlaceholder)}>
        {absolutePlaceholder}
      </p>
      <input
        
        className={classNames(
          cls.input,
          {
            [cls[InputTheme.SMALL]]: theme === InputTheme.SMALL,
            [cls[InputTheme.FULL]]: theme === InputTheme.FULL,
          },
          []
        )}
        {...otherProps}
      />
    </div>
  );
};
