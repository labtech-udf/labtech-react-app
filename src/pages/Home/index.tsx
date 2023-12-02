import React from "react";
import { Header } from "@components/Header";
import { HomeCarrosel } from "@components/HomeCarrosel";
import { HomeFiltros } from "@components/HomeFiltros";
import { Footer } from "@components/Footer";

export function Home() {
  return (
    <section className="w-full h-screen flex flex-col justify-between">
      <Header />
      <div className="h-full">
        <div className="px-16 pt-8 w-full h-96">
          <HomeCarrosel />
        </div>
        <HomeFiltros />
      </div>
      <Footer />
    </section>
  );
}
