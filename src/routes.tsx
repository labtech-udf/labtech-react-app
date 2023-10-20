import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { DashBoard } from "@pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // Exemplo
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);


