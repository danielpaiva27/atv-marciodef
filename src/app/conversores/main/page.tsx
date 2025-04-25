"use client";

import Link from "next/link";

export default function Main() {
  return (
    <div className="main-container">
      <h1>Bem-vindo ao Trabalho de Conversores</h1>
      <p>
        Este projeto contém conversores de valores para diferentes unidades e uma página sobre mim. Escolha uma das opções abaixo:
      </p>
      <nav className="main-links">
        <Link href="/conversores/dol">Conversor de Reais para Dólares</Link>
        <Link href="/conversores/comp">Conversor de Comprimento</Link>
        <Link href="/conversores/temp">Conversor de Temperatura</Link>
        <Link href="/sobre">Sobre Mim</Link>
      </nav>
    </div>
  );
}