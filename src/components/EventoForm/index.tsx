import "./evento.css";

import { EventoDTO } from "@interfaces/EventoDTO";
import { EventoService } from "@services/EventosService";
import Block from "@uiw/react-color-block";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Tooltip } from "primereact/tooltip";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function EventoForm() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [nome, setNome] = useState<string>("");
  const [nomeCard, setNomeCard] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dataHora, setDataHora] = useState<Date | null>(null);
  const [address, setAddress] = useState<string>("");
  const [cor, setCor] = useState<string>("#6891F2"); // Cor padrão
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [estaNomesendoEditado, setEstaSendoEditado] = useState(false);
  const [estaDescsendoEditado, setDescSendoEditado] = useState(false);

  const createPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const url = URL.createObjectURL(file);
      console.log(url);
      setImageUrl(url);
    }
  };

  const colorToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const changeColor = (color: { hex: string }) => {
    setCor(color.hex);
    setShowColorPicker(false);
  };

  const começarEdiçãoNomeCard = () => {
    setEstaSendoEditado(true);
  };

  const pararEdiçãoNomeCard = () => {
    setEstaSendoEditado(false);
  };
  const editDesc = () => {
    setDescSendoEditado(true);
  };

  const stoptEditDesc = () => {
    setDescSendoEditado(false);
  };

  const handleNomeCardChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNomeCard(e.target.value);
  };
  const handleDescChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const evento = new EventoDTO();
      evento.name = nome;
      evento.nameCard = nomeCard;
      evento.photo = photo;
      evento.description = description;
      evento.dateHora = dataHora;
      evento.address = address;
      evento.cor = cor;

      if (photo) {
        await EventoService.createEvento(evento, photo);
        // Opcionalmente, redefina os campos do formulário após a submissão
        // resetForm();
      } else {
        // Tratar caso em que 'photo' é null
        console.error("Foto não selecionada.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // Manipule o erro, mostre uma mensagem, etc.
    }
  };
  return (
    <section className="w-full flex flex-col h-full gap-2 px-8">
      <section className="flex justify-between pt-3">
        <Link to="/admin/eventos">
          <span className="flex items-center">
            <i className="pi pi-angle-left"></i>
            <p className="m-0">Voltar</p>
          </span>
        </Link>
        <button
          onClick={() => onSubmit()}
          className="py-1 px-3 rounded-md text-white"
          style={{ backgroundColor: cor }}
        >
          Salvar
        </button>
      </section>
      <section className="w-full h-auto py-2">
        <section
          className="rounded-2xl h-80 flex justify-between gap-4"
          style={{
            background: imageUrl
              ? `url(${imageUrl}) no-repeat center/cover`
              : cor,
          }}
        >
          <section className="w-1/2 flex flex-col justify-between gap-8">
            <label
              htmlFor="nameCard"
              className="font-bold py-3 px-2 text-white"
              style={{
                textShadow: `0px 3px 3px rgba(255,255,255,0.5), 2px 2px 2px ${cor}`,
              }}
            >
              Titulo em estaque :
            </label>
            {estaNomesendoEditado ? (
              <div className="h-full p-1 flex flex-col justify-around">
                <section className="h-full w-3/4 pl-8">
                  <InputTextarea
                    id="nameCard"
                    value={nomeCard ? nomeCard : "Clique para editar"}
                    onChange={handleNomeCardChange}
                    maxLength={40}
                    className="font-normal text-6xl w-full h-full text-start reset text-white"
                    style={{
                      textShadow: `0px 3px 3px rgba(255,255,255,0.5), 2px 2px 2px ${cor}`,
                    }}
                  />
                </section>
                <section className="w-full flex justify-end px-5">
                  <button
                    onClick={pararEdiçãoNomeCard}
                    className="py-1 px-3 rounded-md bg-green-500 text-white hover:shadow-green-500/75"
                  >
                    Salvar
                  </button>
                </section>
              </div>
            ) : (
              <section className="h-full w-3/4 py-1 pl-8 text-white">
                <span
                  style={{
                    textShadow: `0px 3px 3px rgba(255,255,255,0.5), 2px 2px 2px ${cor}`,
                  }}
                  className="font-normal text-6xl line-height-1 text-start"
                  onClick={começarEdiçãoNomeCard}
                >
                  {nomeCard ? nomeCard : "Clique para editar"}
                </span>
              </section>
            )}
          </section>
          <section
            className="w-1/2 justify-around h-full flex rounded-r-2xl
           flex-col py-8 items-center gap-2 backdrop-blur-sm"
            style={{ backgroundColor: "hsla(0,0%,100%,.5)" }}
          >
            <section style={{ color: cor }}>
              <i className="pi pi-image text-8xl"></i>
            </section>
            <section className="evento flex">
              <label
                htmlFor="imageUrl"
                className="flex gap-1 rounded-2xl py-1 px-2 items-center cursor-pointer"
                style={{ color: cor, border: `1px solid ${cor}` }}
              >
                <i className="pi pi-upload"></i>Upload
              </label>
              <input
                type="file"
                id="imageUrl"
                className="form-control"
                name="imageUrl"
                accept="image/*"
                onChange={(e) => createPhoto(e)}
              />
            </section>
          </section>
        </section>
      </section>
      <section className="w-full h-full flex flex-row justify-between">
        <section className="w-full h-full">
          <section>
            <section>
              <InputText
                value={nome ? nome : "Clique para adicionar um nome"}
                className="reset w-full text-xl font-semibold"
                onChange={(e) => setNome(e.target.value)}
              />
            </section>
            <section className="flex w-full gap-2 items-center">
              <label htmlFor="date">
                <i className="pi pi-calendar"></i>
              </label>
              <section>
                <Calendar
                  id="date"
                  value={dataHora ? dataHora : new Date()}
                  onChange={(e) => setDataHora(e.value as Date | null)}
                  showTime
                  hourFormat="24"
                  showWeek
                  className="reset w-auto flex"
                />
              </section>
            </section>
            <section>
              <InputText
                value={
                  address ? address : "Clique para adicionar uma localização"
                }
                className="reset w-full "
                onChange={(e) => setAddress(e.target.value)}
              />
            </section>
          </section>
          <hr className="m-3 mx-3 border-1 surface-border" />
          <section>
            <label htmlFor="description" className="text-xl font-normal">
              Descrição:
            </label>
            <section className="h-full w-full">
              {estaDescsendoEditado ? (
                <section className="h-full">
                  <section className="w-full h-full flex px-3 justify-end">
                    <button
                      onClick={stoptEditDesc}
                      className="py-1 px-3 rounded-md text-white"
                      style={{ backgroundColor: cor }}
                    >
                      Salvar
                    </button>
                  </section>
                  <InputTextarea
                    id="description"
                    value={
                      description
                        ? description
                        : "Clique para adiconar uma descrição"
                    }
                    onChange={handleDescChange}
                    className="font-normal text-lg w-full h-full text-start reset"
                  />
                </section>
              ) : (
                <section className="h-full w-full py-2">
                  <span
                    className="font-normal line-height-1 text-start"
                    onClick={editDesc}
                  >
                    {description
                      ? description
                      : "Clique para adiconar uma descrição"}
                  </span>
                </section>
              )}
            </section>
          </section>
        </section>
        <section className="h-full">
          {imageUrl ? (
            <section className="w-44 flex flex-col items-center gap-3">
              <Tooltip target=".color" mouseTrack mouseTrackLeft={10} />
              <button
                onClick={colorToggle}
                className="h-6 w-6 rounded color shadow-md"
                style={{ backgroundColor: cor }}
                data-pr-tooltip="Cor destaque"
              ></button>
              {showColorPicker && <Block color={cor} onChange={changeColor} />}
            </section>
          ) : (
            <section className="w-44 flex flex-col items-center gap-3">
              <Tooltip target=".color" mouseTrack mouseTrackLeft={10} />
              <Block
                color={cor}
                data-pr-tooltip="Cor destaque"
                onChange={changeColor}
              />
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
