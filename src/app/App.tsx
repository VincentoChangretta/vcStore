import { ThemeButton } from "shared/ui/ThemeButton/ThemeButton";
import { useTheme } from "./providers/ThemeProvider/";
import { Header } from "widgets/Header/Header";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header/>
      <main>

      </main>
    </div>
  );
};
