"use client";

import { useState, useEffect } from "react";

export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [conversionType, setConversionType] = useState("fToC");
  const [result, setResult] = useState("");

  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult("");
      return;
    }

    if (conversionType === "fToC") {
      setResult(`${((num - 32) * (5 / 9)).toFixed(2)} °C`);
    } else if (conversionType === "cToF") {
      setResult(`${(num * (9 / 5) + 32).toFixed(2)} °F`);
    }
  }, [value, conversionType]);

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1>Conversor de Temperatura</h1>
        <p className="highlight">Escolha o tipo de conversão e insira o valor.</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o valor"
          className="converter-input"
        />
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="converter-input"
        >
          <option value="fToC">°F → °C</option>
          <option value="cToF">°C → °F</option>
        </select>
        {result && (
          <p className="converter-result">
            Resultado: <span>{result}</span>
          </p>
        )}
      </div>
    </div>
  );
}