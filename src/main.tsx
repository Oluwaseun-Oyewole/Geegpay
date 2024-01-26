import { ConfigProvider } from "antd";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader";
import { ThemeProvider } from "./context";
import "./index.css";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Plus Jakarta Sans",
        },
      }}
    >
      <ThemeProvider>
        <Suspense fallback={<Loader screen />}>
          <RouterProvider router={routes} fallbackElement={<Loader screen />} />
        </Suspense>
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>
);
