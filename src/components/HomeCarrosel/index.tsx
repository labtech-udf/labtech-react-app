import { EventoDTO } from "@interfaces/EventoDTO";
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
  const [eventos, setEventos] = useState<EventoDTO[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productTemplate = (item: any) => {
    // Verifica se item.photo?.id existe antes de renderizar o componente
    if (item.photo?.id) {
      return (
        <div
          style={{
            backgroundImage: `url(http://localhost:8180/arquivo/${item.photo?.id}/download)`,
            height: "40vh",
            borderRadius: "20px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex w-full items-center p-4"
        >
          <h1 className="text-3xl text-white uppercase">{item.name}</h1>
        </div>
      );
    } else {
      // Se item.photo?.id não existir, retorna null ou um marcador de placeholder
      return null;
    }
  };

  useEffect(() => {
    EventoService.listEventos().then((res) => {
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
