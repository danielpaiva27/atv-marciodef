"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sobre Mim</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Meu nome é Daniel Luna Paiva, sou estudante de desenvolvimento web e
        este é meu trabalho de faculdade. Este projeto foi desenvolvido
        utilizando Next.js e React, com o objetivo de criar conversores simples
        e funcionais.
      </p>
    </div>
  );
}