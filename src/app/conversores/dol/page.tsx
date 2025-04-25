"use client";

import { useState, useEffect } from "react";

export default function RealToDollarConverter() {
  const [value, setValue] = useState(""); 
  const [conversionType, setConversionType] = useState("realToDollar"); 
  const [result, setResult] = useState("");
  const conversionRate = 5.8; 

  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult("");
      return;
    }

    if (conversionType === "realToDollar") {
      setResult(`$ ${(num / conversionRate).toFixed(2)}`);
    } else if (conversionType === "dollarToReal") {
      setResult(`R$ ${(num * conversionRate).toFixed(2)}`);
    }
  }, [value, conversionType]);

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1>Conversor de Reais e Dólares</h1>
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
          <option value="realToDollar">Reais → Dólares</option>
          <option value="dollarToReal">Dólares → Reais</option>
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