import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import AppRoute from "@app/AppRoute";
import { changeTheme } from "../utils/theme-utils";
changeTheme();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppRoute />
    </Router>
  </React.StrictMode>
);
