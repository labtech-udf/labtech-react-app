import { EventoDTO } from "@interfaces/EventoDTO";
import { EventoService } from "@services/EventosService";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function EventosTable() {
  const [eventos, setEventos] = useState<EventoDTO[]>([]);

  useEffect(() => {
    EventoService.listEventos().then((res) => {
      console.log(res);
      setEventos(res);
    });
  }, []);

  const header = (
    <div className="flex py-2 flex-wrap items-center justify-between gap-2">
      <span className="text-xl text-900 font-bold">Products</span>
      <Link to="/admin/evento-new">
        <button className="w-12 h-12 text-green-500  shadow-md rounded-full shadow-green-500/40 hover:shadow-green-500/75">
          <i className="pi pi-plus"></i>
        </button>
      </Link>
    </div>
  );

  const footer = `In total there are ${eventos ? eventos.length : 0} products.`;
  const imageBodyTemplate = (eventos: EventoDTO) => {
    return (
      <img
        src={`http://localhost:8180/arquivo/${eventos?.photo?.id}/download`}
        className="w-24 h-16 shadow-md rounded-md"
      />
    );
  };
  return (
    <div>
      <DataTable
        value={eventos}
        header={header}
        footer={footer}
        style={{ minWidth: "100%", gap: "10px" }}
      >
        <Column field="name" header="Name"></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
      </DataTable>
    </div>
  );
}
