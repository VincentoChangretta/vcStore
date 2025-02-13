import { FC, useState } from "react";
import cls from "./HeaderUser.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { userDataTypes } from "app/store/slices/activeUserSlice";
import { AppLinkThemes } from "../AppLink/AppLink";
import { DropDown } from "../Dropdown/Dropdown";
import { userLogOut } from "features/users/lib/logOut";
import { useDispatch } from "react-redux";

interface HeaderUserProps {
  className?: string;
  userData: userDataTypes;
  theme: AppLinkThemes;
}

export const userID = "header_user";

export const HeaderUser: FC<HeaderUserProps> = (props) => {
  
  const dispatch = useDispatch()
  const { userData, className } = props;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const name = String(userData.name) + " " + String(userData.lastName);
  const theme = AppLinkThemes.PADDING_LINK;
  const img = "https://go.zvuk.com/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2024/12/08/09/6677506/704c0ee036953778bbf61acc3aa0133db0073759.jpg";

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <li
      key={userID}
      className={classNames(cls.headerUser, { [cls[theme]]: theme }, [
        className,
      ])}
      onClick={toggleDropdown}
    >
      <div className={classNames(cls.inner)}>
        <div className={classNames(cls.imgBox)}>
          <img className="img" src={img} alt="user-img" />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <DropDown dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}>
        <div onClick={() => userLogOut(dispatch)}>Log out</div>
      </DropDown>
    </li>
  );
};
