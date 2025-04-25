"use client";

import { useState } from "react";

export default function LengthConverter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = (conversionType: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult("Valor inválido");
      return;
    }

    switch (conversionType) {
      case "cmToM":
        setResult(`${(num / 100).toFixed(2)} metros`);
        break;
      case "mToKm":
        setResult(`${(num / 1000).toFixed(2)} quilômetros`);
        break;
      case "mToCm":
        setResult(`${(num * 100).toFixed(2)} centímetros`);
        break;
      case "kmToM":
        setResult(`${(num * 1000).toFixed(2)} metros`);
        break;
      default:
        setResult("Conversão inválida");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Conversor de Comprimento</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o valor"
        className="border rounded px-2 py-1"
      />
      <div className="flex gap-4 flex-wrap">
        <button onClick={() => handleConvert("cmToM")} className="bg-blue-500 text-white px-4 py-2 rounded">
          cm → m
        </button>
        <button onClick={() => handleConvert("mToKm")} className="bg-green-500 text-white px-4 py-2 rounded">
          m → km
        </button>
        <button onClick={() => handleConvert("mToCm")} className="bg-yellow-500 text-white px-4 py-2 rounded">
          m → cm
        </button>
        <button onClick={() => handleConvert("kmToM")} className="bg-red-500 text-white px-4 py-2 rounded">
          km → m
        </button>
      </div>
      {result && <p className="text-lg font-medium">Resultado: {result}</p>}
    </div>
  );
}