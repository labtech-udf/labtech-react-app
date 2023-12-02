import { HeaderDash } from '@components/Dashboard';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Evento } from './evento';

export function DashBoard() {
  return (
    <section
      className="w-full h-screen flex items-center"
      style={{ backgroundColor: "var(--highlight-bg)" }}
    >
      <section className="w-full flex flex-row p-2 gap-2">
        <section style={{ width: "15%" }}>
          <HeaderDash />
        </section>
        <section
          className="w-full flex flex-col gap-1 p-2"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--primary-color-text)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <Routes>
            <Route path="evento" element={<Evento />} />
            {/* Adicione mais rotas aqui conforme necessário */}
          </Routes>
          <Outlet />
        </section>
      </section>
    </section>
  );
}
