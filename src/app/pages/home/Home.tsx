import "./home.css";
import patoGif from "@assets/img/pato.gif";

export default function Home() {
  return (
    <section className="w-full p-2 gap-2 h-auto flex flex-column align-items-center">
      <h1 className="text-center">LABTECH</h1>
      <section className="w-full flex justify-content-center md:w-6 h-20rem">
        <img
          className="border-circle w-auto h-full"
          src={patoGif}
          alt="Pato GIF"
        />
      </section>
      <h1 className="text-bold text-3xl md:text-5xl">EM DESENVOLVIMENTO</h1>
    </section>
  );
}
