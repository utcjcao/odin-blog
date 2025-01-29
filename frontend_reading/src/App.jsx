import Main from "../pages/Main";
import Error from "../pages/Error";
import Layout from "../pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
