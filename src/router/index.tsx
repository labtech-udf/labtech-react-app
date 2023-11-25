import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "@router/AuthGuard";

// Public Pages
import { Login } from "@pages/Auth/Login";
import { Cadastro } from "@pages/Auth/Cadastro";

// Private Pages
import { Home } from "@pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Home />}>
            {/* Qualquer outra rota privada que esteja dentro de home */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
