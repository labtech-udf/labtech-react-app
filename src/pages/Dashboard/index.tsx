import { EventoList } from "@components/EventoList";
import { HeaderDash } from "@components/HeaderDash";
import { SidebarDash } from "@components/SidebarDash";
import React from "react";
import { useParams } from "react-router-dom";
import { HomeDash } from "./Home";
import { EventoForm } from "@components/EventoForm";

export function DashBoard() {
  const { selectedPage } = useParams();
  return (
    <section className="w-full h-screen max-h-screen flex flex-col surface-bg">
      <section className="w-full h-14 surface-card">
        <HeaderDash />
      </section>
      <section className="flex flex-row h-full w-full p-8 gap-8">
        <section className="w-72">
          <SidebarDash />
        </section>
        <section className="w-full surface-card rounded-md h-full">
          <section className="overscroll-contain h-full">
            {selectedPage === "eventos" && <EventoList />}
            {selectedPage === "home" && <HomeDash />}
            {selectedPage === "evento-new" && <EventoForm />}
          </section>
        </section>
      </section>
    </section>
  );
}
