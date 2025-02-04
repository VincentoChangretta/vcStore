import { Input, InputTheme } from "shared/ui/Input/Input";
import cls from "./LogInForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

interface LogInFormProps {
  className?: string;
}

export const LogInForm = ({ className }: LogInFormProps) => {

  return (
    <form className={classNames(cls.logInForm, {}, [className])}>
      <div className={classNames(cls.inputInner)}>
        <Input
          theme={InputTheme.SMALL}
          absolutePlaceholder="First name"
          type="text"
          required
        />
        <Input
          theme={InputTheme.SMALL}
          absolutePlaceholder="Last name"
          type="text"
          required
        />
      </div>
      <div className={classNames(cls.firstInputInner)}>
        <Input
          theme={InputTheme.FULL}
          absolutePlaceholder="Email"
          type="email"
          required
        />
        <Input
          theme={InputTheme.FULL}
          absolutePlaceholder="Password"
          type="password"
          required
        />
      </div>
      <Button type="button">
        Create account
      </Button>
    </form>
  );
};
