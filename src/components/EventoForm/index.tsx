import './evento.css';

import { EventoDTO } from '@interfaces/EventoDTO';
import { EventoService } from '@services/EventosService';
import Block from '@uiw/react-color-block';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

export function EventoForm() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [nome, setNome] = useState<string>("");
  const [nomeCard, setNomeCard] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dataHora, setDataHora] = useState<Date | null>(null);
  const [address, setAddress] = useState<string>("");
  const [cor, setCor] = useState<string>("#ffffff"); // Cor padrão
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const createPhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const colorToogle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const changeColor = (color) => {
    setCor(color.hex);
    setShowColorPicker(false);
  };

  const onSubmit = async () => {
    try {
      const evento = new EventoDTO();
      evento.name = nome;
      evento.address = address;
      evento.cor = cor;
      evento.dateHora = dataHora || new Date();
      evento.description = description;
      await EventoService.createEvento(evento, photo);
      // Opcionalmente, redefina os campos do formulário após a submissão
      // resetForm();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // Manipule o erro, mostre uma mensagem, etc.
    }
  };

  return (
    <div className="h-auto">
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
          <label htmlFor="cor">Cor:</label>
          <button
            onClick={colorToogle}
            className="p-2 h-2 w-2 rounded"
            style={{backgroundColor: cor}}
          ></button>
          {showColorPicker && (
            <Block color={cor} onChange={changeColor} />
          )}
        </section>
        <button onClick={() => onSubmit()}>Salvar</button>
      </section>
    </div>
  );
}
