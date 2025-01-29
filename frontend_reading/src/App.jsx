import Main from "../pages/Main";
import Error from "../pages/Error";
import Layout from "../pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../pages/Blog";
import NewBlog from "../pages/NewBlog";
import UserBlogs from "../pages/UserBlogs";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/blogs",
          element: <Main />,
        },
        {
          path: "/blogs/user",
          element: <UserBlogs />,
        },
        {
          path: "/blogs/:id",
          element: <Blog />,
        },
        {
          path: "/blogs/new",
          element: <NewBlog />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
