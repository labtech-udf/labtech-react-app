import React from "react";
import PatoGIF from "@assets/images/pato.gif"

export function ExemploComponente() {
  return (
    <>
      <h1 className="text-center">LABTECH</h1>
      <section className="w-full flex justify-content-center md:w-6 h-20rem">
        <img
          className="border-circle w-auto h-full"
          src={PatoGIF}
          alt="Pato GIF"
        />
      </section>
      <h1 className="text-bold text-3xl md:text-5xl">EM DESENVOLVIMENTO</h1>
    </>
  )
}