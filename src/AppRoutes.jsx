import Layout from "./Layouts/Layout";
import App from "./pages/App";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default AppRoutes;
