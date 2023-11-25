import React from "react";
import { PrimeReactProvider } from "primereact/api";

import { AuthProvider } from "@contexts/AuthContext";
import { Router } from "@router/index";

export default function App() {
  return (
    <PrimeReactProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </PrimeReactProvider>
  );
}
