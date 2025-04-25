"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">Atividades</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre Mim</Link>
          <Link href="/atividades">Atividades</Link>
          <Link href="/conversores/main">Conversores</Link>
        </nav>
      </div>
    </header>
  );
}