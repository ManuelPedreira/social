import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import ThemeModeContextProvider from "./providers/ThemeModeContext";
import CustomThemeProvider from "./providers/CustomTheme";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeModeContextProvider>
      <CustomThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </ThemeModeContextProvider>
  );
}

export default App;
