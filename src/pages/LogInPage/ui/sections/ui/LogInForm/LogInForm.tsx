import { Input, InputTheme } from "shared/ui/Input/ui/Input";
import cls from "./LogInForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { addUser } from "features/users/api/addUser";
import { inputNames } from "shared/ui/Input/config/types";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/routeConfig/RouteConfig";
import { useDispatch } from "react-redux";
import { addActiveUser, LOCALSTORE_ACTIVE_USER } from "app/store/slices/activeUserSlice";

interface LogInFormProps {
  className?: string;
}

export const LogInForm = ({ className }: LogInFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createNewUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get(inputNames.USER_FIRSTNAME);
    const lastName = formData.get(inputNames.USER_LASTNAME);
    const email = formData.get(inputNames.USER_EMAIL);
    const login = formData.get(inputNames.USER_LOGIN);
    const password = formData.get(inputNames.USER_PASSWORD);

    try {
      const result = await addUser({ name, lastName, email, login, password });
      localStorage.setItem(LOCALSTORE_ACTIVE_USER, JSON.stringify(result))
      dispatch(addActiveUser(result));
      navigate(RoutePath.main);
    } catch (error) {
      navigate(RoutePath.error);
    }
  };

  return (
    <form
      onSubmit={createNewUser}
      className={classNames(cls.logInForm, {}, [className])}
    >
      <div className={classNames(cls.inputInner)}>
        <Input
          name={inputNames.USER_FIRSTNAME}
          theme={InputTheme.SMALL}
          absolutePlaceholder="First name"
          type="text"
          required
        />
        <Input
          name={inputNames.USER_LASTNAME}
          theme={InputTheme.SMALL}
          absolutePlaceholder="Last name"
          type="text"
          required
        />
      </div>
      <div className={classNames(cls.firstInputInner)}>
        <Input
          name={inputNames.USER_EMAIL}
          theme={InputTheme.FULL}
          absolutePlaceholder="Email"
          type="email"
          required
        />
        <Input
          name={inputNames.USER_LOGIN}
          theme={InputTheme.FULL}
          absolutePlaceholder="Login"
          type="text"
          required
        />
        <Input
          name={inputNames.USER_PASSWORD}
          theme={InputTheme.FULL}
          absolutePlaceholder="Password"
          type="password"
          required
        />
      </div>
      <Button type="submit">Create account</Button>
    </form>
  );
};
