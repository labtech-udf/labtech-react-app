import React, { useState } from "react";
import "./evento.css";
import { InputText } from "primereact/inputtext";
import { EventoDTO } from "@interfaces/EventoDTO";
import { EventoService } from "@services/EventosService";
import { Calendar } from 'primereact/calendar';

export function Evento() {

  const [imageUrl, setImageUrl] = useState("");
  const [photo, setPhoto] = useState(null);
  const [nome, setNome] = useState("");
  const [nomeCard, setNomeCard] = useState("");
  const [description, setDescription] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [address, setAddress] = useState("");
  const [cor, setCor] = useState("");

  const createPhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const onSUbmit = () => {
    const evento = new EventoDTO();
    evento.name = nome;
    evento.address = address;
    evento.cor = cor;
    evento.dateHora = new Date(dataHora);
    evento.description = description;
    EventoService.createEvento(evento, photo);
  }

  return (
    <div>
      <section className="eventoImage">
        <img src={imageUrl} alt={imageUrl ? "usuário" : "upload"} />

        <label htmlFor="imageUrl">+ Upload</label>
        <input
          type="file"
          id="imageUrl"
          className="form-control"
          name="imageUrl"
          onChange={(e) => createPhoto(e)}
        />
      </section>
      <section className="formEvento">
        <section className="inputEvento">
          <label htmlFor="nomeEvento">Nome:</label>
          <InputText
            id="nameCard"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="nameCard">nameCard:</label>
          <InputText
            id="nameCard"
            value={nomeCard}
            onChange={(e) => setNomeCard(e.target.value)}
          />
        </section>
        <section className="inputEvento">
          <label htmlFor="description">description:</label>
          <InputText
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="dateHora">dateHora:</label>
          <Calendar
            id="dateHora"
            value={dataHora}
            onChange={(e) => setDataHora(e.value)}
            showIcon
          />
        </section>
        <section className="inputEvento">
          <label htmlFor="address">address:</label>
          <InputText
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="cor">cor:</label>
          <InputText
            id="cor"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
          />
        </section>
        <button onClick={() => onSUbmit()}>Salvar</button>
      </section>
    </div>
  );
}
