import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./HeaderNav.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { headerNavRoutes } from "../config/types";
import { AppRoutes } from "shared/routeConfig/RouteConfig";
import { lowerCaseCompare } from "shared/lib/lowerCaseCompare/lowerCaseCompare";
import { HeaderUser } from "shared/ui/HeaderUser/HeaderUser";

interface HeaderNavProps {
  className?: string;
  toFunctional?: boolean;
  toPages?: boolean;
}

export const HeaderNav: FC<HeaderNavProps> = (props) => {
  const { className, toFunctional, toPages } = props;

  const [functionalNav, setFunctionalNav] = useState(
    headerNavRoutes.toFunctional
  );
  const activeUser = useSelector(
    (state: RootState) => state.activeUser.activeUser
  );

  useEffect(() => {
    if (activeUser) {
      const filteredNav = functionalNav.filter(
        (route) => !lowerCaseCompare(route.name, AppRoutes.LOGIN)
      );
      setFunctionalNav(filteredNav);
    }
  }, [activeUser]);


  return (
    <nav className={classNames(cls.nav)}>
      <ul className={cls.nav}>
        {functionalNav && toFunctional ? (
          <>
            {activeUser && <HeaderUser userData={activeUser} />}
            {functionalNav.map((route) => (
              <li key={route.name}>
                <AppLink
                  to={route.pathname}
                  theme={route.theme}
                  icon={route.icon}
                >
                  {route.name}
                </AppLink>
              </li>
            ))}
          </>
        ) : (
          headerNavRoutes.toPages.map((route) => (
            <li key={route.name}>
              <AppLink
                to={route.pathname}
                theme={route.theme}
                icon={route.icon}
              >
                {route.name}
              </AppLink>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};
