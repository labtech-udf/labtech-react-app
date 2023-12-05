import { Cadastro } from '@pages/Auth/Cadastro';
import { Login } from '@pages/Auth/Login';
import { DashBoard } from '@pages/Dashboard';
import { Home } from '@pages/Home';
import React, { BrowserRouter, Route, Routes } from 'react-router-dom';

// Public Pages
// Private Pages
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
          <Route path="/admin/:selectedPage" element={<DashBoard/>} ></Route>
          <Route path="/admin/" element={<DashBoard/>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
