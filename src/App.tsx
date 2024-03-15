import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
