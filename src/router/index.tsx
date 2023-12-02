import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "@router/AuthGuard";

// Public Pages
import { Login } from "@pages/Auth/Login";
import { Cadastro } from "@pages/Auth/Cadastro";

// Private Pages
import { Home } from "@pages/Home";
import { DashBoard } from "@pages/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* disabled para uso local */}
        {/* <Route element={<AuthGuard isPrivate={false} />}> */}
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        {/* disabled para uso local */}
        {/* <Route element={<AuthGuard isPrivate />}> */}
        <Route>
          <Route path="/" element={<Home />}>
            {/* Qualquer outra rota privada que esteja dentro de home */}
          </Route>
        </Route>
        <Route>
          <Route path="/admin/*" element={<DashBoard/>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
