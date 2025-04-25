"use client";

import { useState, useEffect } from "react";

export default function LengthConverter() {
  const [value, setValue] = useState("");
  const [conversionType, setConversionType] = useState("cmToM");
  const [result, setResult] = useState("");

  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult("");
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
        setResult("");
    }
  }, [value, conversionType]);

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1>Conversor de Comprimento</h1>
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
          <option value="cmToM">cm → m</option>
          <option value="mToKm">m → km</option>
          <option value="mToCm">m → cm</option>
          <option value="kmToM">km → m</option>
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