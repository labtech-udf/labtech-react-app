import React from "react";

import searchIcon from "@assets/icons/search-icon.svg";
import categoryIcon from "@assets/icons/categories-icon.svg";
import filterIcon from "@assets/icons/filter-icon.svg";
import spotIcon from "@assets/icons/spot-icon.svg";

export function HomeFiltros() {
  return (
    <div className="w-full h-32 pt-11 flex items-center gap-4">
      <div className="w-72 h-12 bg-slate-50 flex items-center gap-2 rounded-lg px-2 py-3">
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Pesquisar eventos"
          className="w-full h-12 outline-none bg-slate-50"
        />
      </div>

      <div className="w-2/4 flex items-center gap-2 flex-wrap">
        <div className="w-64 bg-white border border-slate-200 flex items-center justify-center gap-2 rounded-2xl px-2 py-3 cursor-pointer">
          <img src={categoryIcon} alt="" />
          <span>Categorias</span>
        </div>

        <div className="w-64 bg-white border border-slate-200 flex items-center justify-center gap-2 rounded-2xl px-2 py-3 cursor-pointer">
          <img src={filterIcon} alt="" />
          <span>Categorias</span>
        </div>

        <div className="w-64 bg-white border border-slate-200 flex items-center justify-center gap-2 rounded-2xl px-2 py-3 cursor-pointer">
          <img src={spotIcon} alt="" />
          <span>Local</span>
        </div>

        <div className="w-64 bg-white border border-slate-200 flex items-center justify-center gap-2 rounded-2xl px-2 py-3 cursor-pointer">
          <img src={filterIcon} alt="" />
          <span>Categorias</span>
        </div>
      </div>
    </div>
  );
}
