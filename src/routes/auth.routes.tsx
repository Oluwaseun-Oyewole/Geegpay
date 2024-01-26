import { Navigate, RouteObject } from "react-router-dom";
import Login from "../views/auth/login";
import { Routes } from "./routes";

export const authRoutes = [
  {
    path: Routes.login,
    element: <Login />,
  },

  { path: Routes.auth, element: <Navigate to={Routes.login} replace={true} /> },
] as RouteObject[];
