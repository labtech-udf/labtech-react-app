import React from "react";
import { PrimeReactProvider } from "primereact/api";

import { AuthProvider } from "@contexts/AuthContext";
import { Router } from "@router/index";
import 'primereact/resources/themes/lara-light-teal/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

import "./styles/global.css";

export function App() {
  return (
    <PrimeReactProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </PrimeReactProvider>
  );
}
