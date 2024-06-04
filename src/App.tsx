import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import ThemeModeContextProvider from "./providers/ThemeModeContext";
import CustomThemeProvider from "./providers/CustomTheme";
import ToastContextProvider from "./providers/ToastContext";
import QuerryProvider from "./providers/QuerryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LanguageSelector from "./components/LanguageSelector";
import initI18n from "./i18nConfig";

initI18n();

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeModeContextProvider>
      <QuerryProvider>
        <CustomThemeProvider>
          <ToastContextProvider>
            <GlobalStyles />
            <LanguageSelector />
            <RouterProvider router={router} />
          </ToastContextProvider>
        </CustomThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QuerryProvider>
    </ThemeModeContextProvider>
  );
}

export default App;
