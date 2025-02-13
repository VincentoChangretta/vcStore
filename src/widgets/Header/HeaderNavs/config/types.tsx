import {
  faCartShopping,
  faSearch,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { userDataTypes } from "app/store/slices/activeUserSlice";
import { RoutePath } from "shared/routeConfig/RouteConfig";
import { AppLinkThemes } from "shared/ui/AppLink/AppLink";

interface RouteItem {
  id: string;
  name: string;
  pathname?: string;
  theme?: AppLinkThemes;
  icon?: IconDefinition;
}

interface HeaderNavRouteTypes {
  toFunctional: RouteItem[];
  toPages: RouteItem[];
}

export const headerNavRoutes: HeaderNavRouteTypes = {
  toFunctional: [
    {
      id: RoutePath.main,
      name: "Login",
      pathname: RoutePath.login,
      theme: AppLinkThemes.PADDING_LINK,
      icon: faUser,
    },
    {
      id: "search",
      name: "Search",
      theme: AppLinkThemes.PADDING_LINK,
      icon: faSearch,
    },
    {
      id: RoutePath.basket,
      name: "Basket",
      pathname: RoutePath.basket,
      theme: AppLinkThemes.PADDING_LINK,
      icon: faCartShopping,
    },
  ],
  toPages: [
    {
      id: RoutePath.main,
      name: "Home",
      pathname: RoutePath.main,
      theme: AppLinkThemes.STANDART,
      icon: faUser,
    },
    {
      id: RoutePath.about,
      name: "About",
      pathname: RoutePath.about,
      theme: AppLinkThemes.STANDART,
      icon: faSearch,
    },
    {
      id: RoutePath.contact,
      name: "Contact",
      pathname: RoutePath.contact,
      theme: AppLinkThemes.STANDART,
      icon: faCartShopping,
    },
    {
      id: RoutePath.blog,
      name: "Blog",
      pathname: RoutePath.blog,
      theme: AppLinkThemes.STANDART,
      icon: faCartShopping,
    },
  ],
};
