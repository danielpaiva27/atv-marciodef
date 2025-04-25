"use client";

import { useState } from "react";

export default function RealToDollarConverter() {
  const [value, setValue] = useState("");
  const [conversionRate, setConversionRate] = useState(5.0);
  const [result, setResult] = useState("");

  const handleConvertToDollar = () => {
    const real = parseFloat(value);
    if (!isNaN(real)) {
      setResult(`$ ${(real / conversionRate).toFixed(2)}`);
    } else {
      setResult("Valor inválido");
    }
  };

  const handleConvertToReal = () => {
    const dollar = parseFloat(value);
    if (!isNaN(dollar)) {
      setResult(`R$ ${(dollar * conversionRate).toFixed(2)}`);
    } else {
      setResult("Valor inválido");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Conversor de Reais para Dólares
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o valor"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={conversionRate}
          onChange={(e) => setConversionRate(parseFloat(e.target.value))}
          placeholder="Taxa de conversão"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4">
          <button
            onClick={handleConvertToDollar}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Converter para Dólares
          </button>
          <button
            onClick={handleConvertToReal}
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Converter para Reais
          </button>
        </div>
        {result && (
          <p className="text-lg font-medium text-gray-700 mt-4">
            Resultado: <span className="font-bold">{result}</span>
          </p>
        )}
      </div>
    </div>
  );
}