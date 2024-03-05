import { RouteObject } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import ErrorPage from "./pages/components/ErrorPage";

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
