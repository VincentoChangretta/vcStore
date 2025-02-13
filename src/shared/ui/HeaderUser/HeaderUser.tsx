import { FC } from "react";
import cls from "./HeaderUser.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { userDataTypes } from "app/store/slices/activeUserSlice";
import { AppLinkThemes } from "../AppLink/AppLink";

interface HeaderUserProps {
  className?: string;
  userData: userDataTypes;
}

export const userID = "header_user";

interface NavUserTypes {
  id: string;
  name: string;
  theme: AppLinkThemes;
  img: string;
}

export const HeaderUser: FC<HeaderUserProps> = (props) => {
  const { userData, className } = props;

  const name = String(userData.name) + " " + String(userData.lastName);
  const theme = AppLinkThemes.PADDING_LINK;
  const img =
    "https://go.zvuk.com/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2024/12/08/09/6677506/704c0ee036953778bbf61acc3aa0133db0073759.jpg";

  return (
    <li key={userID} className={classNames(cls.headerUser, {}, [className])}>
      <div className={classNames(cls.imgBox)}>
        <img className="img" src={img} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
      </div>
    </li>
  );
};
