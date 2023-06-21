import Layout from "./Layouts/Layout";
import App from "./pages/App";
import NotFoundPage from "./pages/NotFoundPage";
import Example from './pages/Example';

const AppRoutes = [
  {
    path: '/example',
    element: <Example />
  },
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
