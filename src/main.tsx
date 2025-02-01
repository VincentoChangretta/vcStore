import { createRoot } from "react-dom/client";
import "app/styles/index.scss";
import "app/styles/reset.scss";
import { App } from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
