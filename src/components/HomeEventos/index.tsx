import React from "react"

interface CardEventoProps {
  title: string,

}

export function CardEvento({title}: CardEventoProps) {
  return (
    <div className="w-64 h-64 rounded-xl bg-cyan-950 flex items-center justify-center">
      <h1 className='text-white'>Evento {title}</h1>
    </div>
  )
}


type Evento = {
  id: number,
  nome: string
}

interface HomeEventosProps {
  label: string,
  eventos: Evento[]
}

export function HomeEventos({label, eventos}: HomeEventosProps) {
  return (
    <section className="w-full my-5">
      <h4>{label}</h4>
      <div className="flex items-center gap-8">
        {eventos.map(evento => (<CardEvento key={evento.id} title={evento.nome}/>))}
      </div>
    </section>
  )
}
