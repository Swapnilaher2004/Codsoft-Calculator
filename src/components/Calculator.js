import React, { useState } from "react";
import "./styles/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        {input || "0"}
      </div>
      <div className="result">
        {result}
      </div>
      <div className="buttons-grid">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
            className="button"
          >
            {item}
          </button>
        ))}
        <button onClick={clearInput} className="button clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
