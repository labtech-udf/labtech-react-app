import { Avatar } from "primereact/avatar";
import React from "react";
import defaultUser from "@assets/default/user.jpg";
export function HeaderDash() {
  return (
    <section className="flex flex-row justify-between items-end p-1">
      <span className="flex h-full text-lg m-0">Olá,
        <p className="m-0 text-xl font-bold">Nome Pessoa</p>
      </span>
      <Avatar
        image={defaultUser}
        size="large"
        shape="circle"
        style={{ color: "#ffffff" }}
      />
    </section>
  );
}
