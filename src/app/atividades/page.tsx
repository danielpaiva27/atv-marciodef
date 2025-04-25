"use client";

import Link from "next/link";

export default function Atividades() {
  return (
    <div className="atividades-container">
      <h1 className="atividades-title">Atividades</h1>
      <p className="atividades-description">
        Escolha uma das atividades abaixo para explorar:
      </p>
      <div className="atividades-links">
        <Link href="../conversores/main" className="atividade-link">
        14/04  -  Conversores 
        </Link>
        <Link href="#" className="atividade-link">
          Em breve
        </Link>
        <Link href="#" className="atividade-link">
          Em breve
        </Link>
        <Link href="#" className="atividade-link">
          Em breve
        </Link>
      </div>
    </div>
  );
}