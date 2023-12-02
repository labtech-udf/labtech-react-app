import { HeaderDash } from "@components/Dashboard";
import React from "react";
import { useParams } from "react-router-dom";

import { Evento } from "./evento";

export function DashBoard() {
  const { selectedPage } = useParams();
  return (
    <section className="w-full h-screen flex items-center bg-slate-200">
      <section className="w-full flex flex-row p-2 gap-2">
        <section style={{ width: "15%" }}>
          <HeaderDash />
        </section>
        <section className="w-full flex flex-col gap-1 p-2 shadow-md rounded-2xl">
          {selectedPage === "evento" && <Evento />}
        </section>
      </section>
    </section>
  );
}
