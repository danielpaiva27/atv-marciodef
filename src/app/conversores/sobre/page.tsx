"use client";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="photo-section">
          <img
            src="/IMG_20240217_024532_038.png"
            alt="Minha Foto"
            className="profile-photo"
          />
        </div>
        <h1>Sobre Mim</h1>
        <p>
          Meu nome é <span className="highlight">Daniel Luna Paiva</span>, sou estudante de desenvolvimento web e este é meu trabalho de faculdade. Este projeto foi desenvolvido utilizando{" "}
          <span className="highlight">Next.js</span> e{" "}
          <span className="highlight">React</span>, com o objetivo de criar conversores simples e funcionais.
        </p>
        <p>
          Confira mais sobre o projeto no meu{" "}
          <a href="https://github.com/danielpaiva27" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </div>
    </div>
  );
}