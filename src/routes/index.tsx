import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import ErrorPage from "../views/error";
import { dashboardRoutes } from "./dashboard.routes";
import RouteProtection from "./routeProtection";

const routes = createBrowserRouter([
  {
    path: "",
    element: (
      <RouteProtection validations={[]}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes()],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
