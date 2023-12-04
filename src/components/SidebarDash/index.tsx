import React, { ReactNode, useState } from "react";
import defaultUser from "@assets/default/user.jpg";
import { Avatar } from "primereact/avatar";
import { Tooltip } from "primereact/tooltip";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

interface TreeNodeProps {
  label: string;
  children: ReactNode;
}

const TreeNode: React.FC<TreeNodeProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className="w-full flex items-center justify-between text-xl"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <p>
          <i className="pi pi-calendar-plus"></i> {label}
        </p>
        <i className={isOpen ? "pi pi-caret-down" : "pi pi-caret-left"}></i>
      </div>
      {isOpen && <div className="px-2 flex flex-col gap-1">{children}</div>}
    </div>
  );
};

TreeNode.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export function SidebarDash() {
  return (
    <div className="h-full surface-card justify-between flex flex-col gap-1 p-2 shadow-md rounded-2xl">
      <section className="flex flex-col gap-4 p-2">
        <Link to="/admin/home">
          <span className="flex gap-1 items-center text-xl">
            <i className="pi pi-home"></i>
            <p>Home</p>
          </span>
        </Link>
        <section>
          <TreeNode label="Eventos">
            <Link to="/admin/eventos">
              <span className="flex gap-1 items-center text-base">
                <i className="pi pi-home"></i>
                <p>Eventos</p>
              </span>
            </Link>
            <Link to="/admin/home">
              <span className="flex gap-1 items-center text-base">
                <i className="pi pi-home"></i>
                <p>Categorias</p>
              </span>
            </Link>
            <Link to="/admin/home">
              <span className="flex gap-1 items-center text-base">
                <i className="pi pi-home"></i>
                <p>Eventos</p>
              </span>
            </Link>
          </TreeNode>
        </section>
        <span className="flex gap-1 items-center text-xl">
          <i className="pi pi-user"></i>
          <p>Usuários</p>
        </span>
        <span className="flex gap-1 items-center text-xl">
          <i className="pi pi-calendar-plus"></i>
          <p>Evento</p>
        </span>
      </section>
      <section className="py-5 flex flex-col gap-2">
        <hr className="mb-3 mx-3 border-top-1 surface-border" />
        <section className="flex justify-between p-1 items-center">
          <section className="flex items-center gap-1">
            <Avatar
              image={defaultUser}
              shape="circle"
              style={{ color: "#ffffff" }}
            />
            <p className="m-0">Nome</p>
          </section>
          <section>
            <Link to="/">
              <Tooltip target=".logout" />
              <span
                className="logout"
                data-pr-tooltip="Sair"
                data-pr-position="right"
              >
                <i
                  className="pi pi-arrow-circle-left"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </span>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
}
