// Exemplo
import React, { useState } from "react"
import { EventoService } from "@services/Eventos"
import { EventoDTO } from "@interfaces/EventoDTO";
import { ExemploComponente } from "@components/ExemploComponente";


// Usando PrimeReact
import { Button } from 'primereact/button';
import { useTheme } from "@hooks/useTheme";
import { Link } from "react-router-dom";


export function Home() {
  const [listaEventos, setListaEventos] = useState<EventoDTO[]>([{ id: 1, nome: 'exemplo' }])

  const [theme, setTheme] = useState('dark');

  const { changeTheme } = useTheme()

  async function exemploCarregaEventos() {
    const eventos = await EventoService.get();
    setListaEventos(eventos)
  }

  async function exemploCriaEventos() {
    const corpoRequisicao: EventoDTO = { nome: "BGS 2023" }
    return await EventoService.create(corpoRequisicao)
  }

  function testeTema() {

    if (changeTheme) {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      changeTheme(`${theme}`, `${newTheme}`, 'theme-link', () =>
        setTheme(newTheme)
      );
    }

  }


  return (
    <section className="w-full p-2 gap-2 h-auto flex flex-column align-items-center">
      <ExemploComponente />
      <button onClick={() => exemploCarregaEventos()}>Teste Requisição get na rota /evento</button>
      <button onClick={exemploCriaEventos}>Teste Requiscao post na rota /evento</button>
      <Link to="/dashboard">Exemplo navegação entre rotas</Link>

      <Button onClick={testeTema}>Exemplo do Button do primereact (Ele muda o tema)</Button>


      {listaEventos.map((evento) => (<li key={evento.id}>{evento.nome}</li>))}
    </section>
  )
}
