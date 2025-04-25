"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">

        <nav className="header-nav">
          <Link href="/main">Início</Link>
          <Link href="/sobre">Sobre Mim</Link>
          <Link href="/main">Conversores</Link>
          <Link href="/atividade2">Atividade 2</Link>
        </nav>
      </div>
    </header>
  );
}