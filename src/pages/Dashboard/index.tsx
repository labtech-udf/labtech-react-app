// Exemplo
import React from "react"
import { Link } from "react-router-dom"

export function DashBoard() {
  return (
    <>
      <h1>Aqui é a página de dashboard</h1>
      <Link to="/home">Agora quero voltar p home</Link>
    </>
  )
}
