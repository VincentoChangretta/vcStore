import { useNavigate } from "react-router-dom";
import cls from "./ErrorPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "shared/routeConfig/RouteConfig";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const navigate = useNavigate();
  const reloadPage = () => {
    navigate(RoutePath.main);
  };

  return (
    <section className={classNames(cls.errorPage, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner, {}, [])}>
          <h2>Something went wrong</h2>
          <button className="button" onClick={() => reloadPage()}>
            Reload
          </button>
        </div>
      </div>
    </section>
  );
};
