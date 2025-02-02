import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export enum AppLinkThemes {
  PADDING_LINK = "paddingLink",
  STANDART = "standart"
}

interface BaseAppLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  icon?: IconProp;
}

interface PaddingLinkProps extends BaseAppLinkProps {
  theme: AppLinkThemes.PADDING_LINK;
  icon: IconProp;
}

interface OtherLinkProps extends BaseAppLinkProps {
  theme: Exclude<AppLinkThemes, AppLinkThemes.PADDING_LINK>;
}

type AppLinkProps = PaddingLinkProps | OtherLinkProps;

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme, icon, ...otherProps } = props;
  const isPaddingLink = theme === AppLinkThemes.PADDING_LINK;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { [cls[theme]]: theme }, [className])}
      {...otherProps}
    >
      {isPaddingLink && icon && <FontAwesomeIcon className={cls.icon} icon={icon} />}
      {children}
    </Link>
  );
};
