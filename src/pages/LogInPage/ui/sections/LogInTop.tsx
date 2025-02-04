import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { LogInForm } from "./ui/LogInForm/LogInForm";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppLink, AppLinkThemes } from "shared/ui/AppLink/AppLink";
import cls from "./LogInTop.module.scss";

interface LogInTopProps {
  className?: string;
}

export const LogInTop: FC<LogInTopProps> = (props) => {
  const { className } = props;
  return (
    <section className={classNames(cls.logInTop, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <div>
            <div className={classNames(cls.titleInner)}>
              <AppLink
                to="/"
                theme={AppLinkThemes.STANDART}
                className={classNames(cls.toBackLink)}
              >
                <FontAwesomeIcon className={cls.backIcon} icon={faArrowLeft} />
                To back
              </AppLink>
              <h4 className={classNames(cls.subtitle, {}, ["subtitle"])}>
                Start for free
              </h4>
              <h2 className={classNames(cls.title, {}, ["title"])}>
                Create new account
              </h2>
              <h4>
                Already A Member? <Link to="/">Log In</Link>
              </h4>
            </div>
            <LogInForm />
          </div>
        </div>
      </div>
    </section>
  );
};
