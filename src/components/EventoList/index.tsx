import { TabPanel, TabView } from "primereact/tabview";
import React from "react";
import { EventosTable } from "./table";
export function EventoList() {
  return (
    <section className="flex flex-col w-full p-2">
      <section>
        <TabView>
          <TabPanel header="All Events">
            <EventosTable />
          </TabPanel>
          {/* Adicione mais TabPanel conforme necessário */}
        </TabView>
      </section>
    </section>
  );
}
