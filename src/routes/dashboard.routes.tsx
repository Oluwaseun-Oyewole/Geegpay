import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

export const Dashboard = lazy(() => import("../views/dashboard"));

// all dashboard related routes
export const dashboardRoutes = () => {
  return [
    {
      id: 1,
      path: Routes.dashboard,
      element: <Dashboard />,
    },

    { path: "/app", element: <Navigate to={Routes.dashboard} replace /> },
  ] as RouteObject[];
};
