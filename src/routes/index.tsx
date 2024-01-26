import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/dashboard";
import ErrorPage from "../views/error";
import { authRoutes } from "./auth.routes";
import { dashboardRoutes } from "./dashboard.routes";
import RouteProtection from "./routeProtection";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.auth,
    element: (
      <RouteProtection validations={[]} redirect={Routes.dashboard}>
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authRoutes],
  },

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
