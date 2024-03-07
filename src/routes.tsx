import { RouteObject } from "react-router-dom";
import PostList from "./pages/PostList";
import ErrorPage from "./components/ErrorPage";
import PostDetail from "./pages/PostDetail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PostList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "post/:postId",
    element: <PostDetail />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
