import { EventoService } from "@services/EventosService";
import { Carousel } from "primereact/carousel";
import React, { useEffect, useState } from "react";

const responsiveOptions = [
  {
    breakpoint: "1199px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
];

export function HomeCarrosel() {
  const [eventos, setEventos] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productTemplate = (item: any) => {
    return (
      <div
        style={{
          backgroundImage: `url(http://localhost:8180/arquivo/${item.photo.id}/download)`,
          height: "20rem",
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
        className="flex items-center p-4"
      >
        <h1 className="text-3xl text-white uppercase">{item.name}</h1>
      </div>
    );
  };

  useEffect(() => {
    EventoService.get().then((res) => {
      setEventos(res);
    });
  }, []);

  return (
    <Carousel
      value={eventos}
      numVisible={1}
      numScroll={1}
      responsiveOptions={responsiveOptions}
      itemTemplate={productTemplate}
    />
  );
}
