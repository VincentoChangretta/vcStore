import { createRoot } from "react-dom/client";
import "app/styles/index.scss";
import "app/styles/reset.scss";
import { App } from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/";
import { Provider } from "react-redux";
import store from "app/store/store";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
);
