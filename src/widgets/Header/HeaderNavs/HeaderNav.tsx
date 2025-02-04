import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink";
import cls from "./HeaderNav.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface HeaderNavProps {
  className?: string;
  toFunctional?: boolean;
  toPages?: boolean;
}

const mainRoutes = {
  toFunctional: [
    {
      name: "Login",
      pathname: "/login",
      theme: AppLinkThemes.PADDING_LINK,
      icon: faUser,
    },
    {
      name: "Search",
      pathname: "/search",
      theme: AppLinkThemes.PADDING_LINK,
      icon: faSearch,
    },
    {
      name: "Basket",
      pathname: "/basket",
      theme: AppLinkThemes.PADDING_LINK,
      icon: faCartShopping,
    },
  ],
  toPages: [
    {
      name: "Home",
      pathname: "/home",
      theme: AppLinkThemes.STANDART,
      icon: faUser,
    },
    {
      name: "About",
      pathname: "/about",
      theme: AppLinkThemes.STANDART,
      icon: faSearch,
    },
    {
      name: "Contact",
      pathname: "/contact",
      theme: AppLinkThemes.STANDART,
      icon: faCartShopping,
    },
    {
      name: "Blog",
      pathname: "/blog",
      theme: AppLinkThemes.STANDART,
      icon: faCartShopping,
    },
  ],
};

export const HeaderNav: FC<HeaderNavProps> = (props) => {
  const { className, toFunctional, toPages } = props;
  return (
    <nav className={classNames(cls.nav)}>
      <ul className={cls.nav}>
        {toFunctional
          ? mainRoutes.toFunctional.map((route) => (
              <li key={route.pathname}>
                <AppLink
                  to={route.pathname}
                  theme={route.theme}
                  icon={route.icon}
                >
                  {route.name}
                </AppLink>
              </li>
            ))
          : mainRoutes.toPages.map((route) => (
              <li key={route.pathname}>
                <AppLink
                  to={route.pathname}
                  theme={route.theme}
                  icon={route.icon}
                >
                  {route.name}
                </AppLink>
              </li>
            ))}
      </ul>
    </nav>
  );
};
