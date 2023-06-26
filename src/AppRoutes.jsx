import HomeLayout from "./Layouts/HomeLayout";
import Layout from "./Layouts/Layout";
import App from "./pages/App";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Search from "./pages/Search";
import Result from "./pages/Result";

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
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default AppRoutes;
