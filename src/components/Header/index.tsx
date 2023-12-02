import React from "react";
import spotIcon from "@assets/icons/spot-icon.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full h-20 border-b border-slate-200 flex items-center justify-between py-2 px-3">
      <div className="flex items-center justify-center gap-14 text-neutral-600">
        <span>Início</span>

        <div className="flex items-center gap-1">
          <img src={spotIcon} alt="spot icon" className="h-4" />
          <span>Onde vc está</span>
        </div>
      </div>

      <span className="text-neutral-800 font-bold text-3xl">Logo</span>

      <div className="flex items-center justify-center gap-14 text-neutral-600">
      <Link to="/login">Entrar</Link>
        <span>Onde vc está</span>
      </div>
    </header>
  );
}
