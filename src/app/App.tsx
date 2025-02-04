import { useTheme } from "./providers/ThemeProvider/";
import { Header } from "widgets/Header/Header";
import { AppRouter } from "./router";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="main">
        <AppRouter/>
      </main>
      <footer>footer</footer>
    </div>
  );
};
