import React from "react";
import "./home.css";
import {listEventos} from "../../../apis/eventoapi.js";

export default function Home() {
  listEventos().then((response)=>{
    console.log(response)
  })
  return (
    <section>
      <h1>LABTECH</h1>
    </section>
  );
}
