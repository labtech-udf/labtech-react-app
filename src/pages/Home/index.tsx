import React from "react";
import { Header } from "@components/Header";
import { HomeCarrosel } from "@components/HomeCarrosel";
import { HomeFiltros } from "@components/HomeFiltros";
import { HomeEventos } from "@components/HomeEventos";
import { Footer } from "@components/Footer";
// import { useAuth } from "@hooks/useAuth.ts";

const mockListEventos = [
  {
    id: 1,
    nome: "Comic Con Experience",
  },
  {
    id: 2,
    nome: "Brasil Game Show",
  },
  {
    id: 3,
    nome: "Google Dev Fest",
  },
  {
    id: 4,
    nome: "JS Con",
  },
  {
    id: 5,
    nome: "Acabaram as ideias de evento",
  },
];

export function Home() {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  return (
    <section className="w-full h-screen flex flex-col justify-between">
      <Header />
      <div className="h-full">
        <div className="px-16 pt-8 w-full h-96">
          <HomeCarrosel />
        </div>
        <HomeFiltros />
        <HomeEventos label="Novos eventos" eventos={mockListEventos} />

        {/* Parte que precisa estar autenticado para exibir os eventos específicos do usuário*/}
        {isAuthenticated && (
          <>
            <HomeEventos
              label="Vistos recentemente"
              eventos={mockListEventos}
            />
            <HomeEventos
              label="Baseado nos seus favoritos"
              eventos={mockListEventos}
            />
          </>
        )}
      </div>
      <Footer />
    </section>
  );
}
