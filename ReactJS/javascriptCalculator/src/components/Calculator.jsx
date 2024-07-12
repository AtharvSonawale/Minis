// src/components/Calculator.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/store';

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const [upperDisplay, setUpperDisplay] = useState('');
  const [lowerDisplay, setLowerDisplay] = useState('0');
  const [isResult, setIsResult] = useState(false);

  const handleNumberClick = (number) => {
    if (isResult) {
      setUpperDisplay('');
      setLowerDisplay(number);
      setIsResult(false);
    } else {
      setLowerDisplay((prev) => (prev === '0' ? number : prev + number));
    }
  };

  const handleOperatorClick = (operator) => {
    if (isResult) {
      setUpperDisplay(lowerDisplay + ' ' + operator + ' ');
      setLowerDisplay('0');
      setIsResult(false);
    } else {
      setUpperDisplay((prev) => prev + ' ' + lowerDisplay + ' ' + operator + ' ');
      setLowerDisplay('0');
    }
  };

  const handleEqualClick = () => {
    const expression = upperDisplay + ' ' + lowerDisplay;
    const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/')); // Replace symbols for eval
    setLowerDisplay(result.toString());
    setIsResult(true);
  };

  const handleClearClick = () => {
    setUpperDisplay('');
    setLowerDisplay('0');
    setIsResult(false);
  };

  const handleDecimalClick = () => {
    if (isResult) {
      setUpperDisplay('');
      setLowerDisplay('0.');
      setIsResult(false);
    } else if (!lowerDisplay.includes('.')) {
      setLowerDisplay((prev) => prev + '.');
    }
  };

  return (
    <div className="calculator">
      <div id="display-container">
        <div id="upper-display">{upperDisplay}</div>
        <div id="display">{lowerDisplay}</div>
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClearClick}>AC</button>
        <button id="divide" onClick={() => handleOperatorClick('÷')}>÷</button>
        <button id="multiply" onClick={() => handleOperatorClick('×')}>×</button>
        <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
        <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
        <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
        <button id="four" onClick={() => handleNumberClick('4')}>4</button>
        <button id="five" onClick={() => handleNumberClick('5')}>5</button>
        <button id="six" onClick={() => handleNumberClick('6')}>6</button>
        <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
        <button id="one" onClick={() => handleNumberClick('1')}>1</button>
        <button id="two" onClick={() => handleNumberClick('2')}>2</button>
        <button id="three" onClick={() => handleNumberClick('3')}>3</button>
        <button id="zero" className="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button id="decimal" onClick={handleDecimalClick}>.</button>
        <button id="equals" onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
