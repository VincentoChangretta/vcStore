import cls from "./ErrorPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  return (
    <section className={classNames(cls.errorPage, {}, [className])}>
      <div className="container">
        <div className={classNames(cls.inner, {}, [])}>
          <h2>Something went wrong</h2>
          <button className="button">Reload</button>
        </div>
      </div>
    </section>
  );
};
