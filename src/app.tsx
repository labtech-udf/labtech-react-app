import React from "react";
import { PrimeReactProvider } from "primereact/api";

import { AuthProvider } from "@contexts/AuthContext";
import { Router } from "@router/index";

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
