import { MainPage } from "pages/MainPage";
import { useTheme } from "./providers/ThemeProvider/";
import { Header } from "widgets/Header/Header";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="main">
        <MainPage />
      </main>
      <footer>footer</footer>
    </div>
  );
};
