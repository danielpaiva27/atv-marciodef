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
          Meu nome é <span className="highlight">Daniel Luna Paiva</span>, sou estudante de desenvolvimento web e esse é . Aqui estarão todos meus trabalhos de front-end da faculdade{" "}
          
        </p>
        <p>
          Confira mais sobre meus projetos no meu{" "}
          <a href="https://github.com/danielpaiva27" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> e no meu <a href="https://www.linkedin.com/in/daniel-luna27" target="_blank" rel="noopener noreferrer">
          linkedin
          </a>
          
        </p>
      </div>
    </div>
  );
}