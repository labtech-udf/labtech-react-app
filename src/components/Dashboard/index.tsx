import { Avatar } from "primereact/avatar";
import React from "react";
import { Link } from "react-router-dom";

export function HeaderDash() {
  return (
    <div className="w-auto flex flex-col gap-1 p-2 shadow-md rounded-2xl">
      <section className="flex gap-1 items-center">
        <Avatar
          icon="pi pi-user"
          size="large"
          shape="circle"
          style={{ color: "#ffffff" }}
        />
        <p className="m-0">Nome Pessoa</p>
      </section>
      <section className="flex flex-col gap-1">
        <Link to="/admin/evento" className="py-5">
          <span className="flex gap-1 items-center text-xl">
            <link rel="stylesheet" href="" />
            <i className="pi pi-calendar-plus"></i>
            <p>Evento</p>
          </span>
        </Link>
        <span className="flex gap-1 items-center text-xl">
          <i className="pi pi-calendar-plus"></i>
          <p>Usuarios</p>
        </span>
        <span className="flex gap-1 items-center text-xl">
          <i className="pi pi-calendar-plus"></i>
          <p>Evento</p>
        </span>

        <Link to="/" className="py-5">
          <span className="flex gap-1 items-center text-xl">
            <link rel="stylesheet" href="" />
            <i className="pi pi-home"></i>
            <p>logout</p>
          </span>
        </Link>
      </section>
    </div>
  );
}
