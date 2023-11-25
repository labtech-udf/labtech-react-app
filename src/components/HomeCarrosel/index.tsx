import { Carousel } from "primereact/carousel";
import React from "react";

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

const items = [
  { Id: 0, Nome: "teste-0" },
  { Id: 1, Nome: "teste-1" },
  { Id: 2, Nome: "teste-2" },
  { Id: 3, Nome: "teste-3" },
  { Id: 4, Nome: "teste-4" },
  { Id: 5, Nome: "teste-5" },
];

export function HomeCarrosel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const productTemplate = (item: any) => {
    return (
      <div className="bg-indigo-400 w-full h-3/4">
        <h1>{item.Nome}</h1>
      </div>
    );
  };

  return (
    <Carousel
      className="bg-indigo-400 w-full h-full flex items-center justify-center rounded-3xl"
      value={items}
      numVisible={1}
      numScroll={1}
      responsiveOptions={responsiveOptions}
      itemTemplate={productTemplate}
    />
  );
}
