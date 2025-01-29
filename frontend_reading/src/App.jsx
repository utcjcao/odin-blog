import Main from "../pages/Main";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Main />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
