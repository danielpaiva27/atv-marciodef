"use client";

import Link from "next/link";

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Bem-vindo ao Trabalho de Conversores
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Escolha um dos conversores abaixo ou acesse a página Sobre Mim.
      </p>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        <Link
          href="/conversores/dol"
          className="bg-blue-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Conversor de Reais para Dólares
        </Link>
        <Link
          href="/conversores/comp"
          className="bg-green-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Conversor de Comprimento
        </Link>
        <Link
          href="/conversores/temp"
          className="bg-yellow-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Conversor de Temperatura
        </Link>
        <Link
          href="/sobre"
          className="bg-purple-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-purple-600 transition"
        >
          Sobre Mim
        </Link>
      </nav>
    </div>
  );
}