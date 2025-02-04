import { LogIn } from "pages/LogInPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  CONTACT = "contact",
  BLOG = "blog",
  LOGIN = "login",
  BASKET = "basket",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.CONTACT]: "/contact",
  [AppRoutes.BLOG]: "/blog",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.BASKET]: "/basket",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: "123",
  },
  [AppRoutes.CONTACT]: {
    path: RoutePath.contact,
    element: "123",
  },
  [AppRoutes.BLOG]: {
    path: RoutePath.blog,
    element: "123",
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LogIn />,
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: "123",
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: "123",
  },
};
