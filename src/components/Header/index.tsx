import React from "react";
import {TreeSelect} from 'primereact/treeselect';
import spotIcon from "@assets/icons/spot-icon.svg";

// Remover depois
const selectOptionsMockData = [
    {id: '1', label: "lorem"},
    {id: '2', label: "ipsum"}
  ]

export function Header() {

  function openModalLogin() {
    console.log("Abrindo modal de login")
  }

  return (
    <header className="w-full h-20 border-b border-slate-200 flex items-center justify-between py-2 px-3">
      <div className="flex items-center justify-center gap-14 text-neutral-600">
        <span className="cursor-pointer">Início</span>

        <div className="flex items-center gap-1 cursor-pointer">
          <img src={spotIcon} alt="spot icon" className="h-4"/>
          <TreeSelect
            className="gap-1"
            placeholder="Onde você está?"
            options={selectOptionsMockData}
          >
          </TreeSelect>
        </div>
      </div>

      <span className="text-neutral-800 font-bold text-3xl">Logo</span>

      <div className="flex items-center justify-center gap-14 text-neutral-600">
        <span className="cursor-pointer" onClick={openModalLogin}>Entrar</span>
        <span className="cursor-pointer">Cadastre-se</span>
      </div>
    </header>
  );
}
