"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleConvertToCelsius = () => {
    const fahrenheit = parseFloat(value);
    if (!isNaN(fahrenheit)) {
      setResult(`${((fahrenheit - 32) * (5 / 9)).toFixed(2)} °C`);
    } else {
      setResult("Valor inválido");
    }
  };

  const handleConvertToFahrenheit = () => {
    const celsius = parseFloat(value);
    if (!isNaN(celsius)) {
      setResult(`${(celsius * (9 / 5) + 32).toFixed(2)} °F`);
    } else {
      setResult("Valor inválido");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Conversor de Temperatura</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o valor"
        className="border rounded px-2 py-1"
      />
      <div className="flex gap-4">
        <button onClick={handleConvertToCelsius} className="bg-blue-500 text-white px-4 py-2 rounded">
          °F → °C
        </button>
        <button onClick={handleConvertToFahrenheit} className="bg-green-500 text-white px-4 py-2 rounded">
          °C → °F
        </button>
      </div>
      {result && <p className="text-lg font-medium">Resultado: {result}</p>}
    </div>
  );
}