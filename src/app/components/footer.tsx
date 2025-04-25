"use client";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} Daniel Luna Paiva. Todos os direitos reservados.
      </p>
      <div className="footer-links">
        <a href="https://github.com/danielpaiva27" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}