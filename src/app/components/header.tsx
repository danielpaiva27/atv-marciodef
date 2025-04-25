"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">

        <nav className="header-nav">
          <Link href="../atividades">Início</Link>
          <Link href="../sobre">Sobre Mim</Link>
          <Link href="../conversores/main">Conversores</Link>
          <Link>Em breve</Link>
        </nav>
      </div>
    </header>
  );
}