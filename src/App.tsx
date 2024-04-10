import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
