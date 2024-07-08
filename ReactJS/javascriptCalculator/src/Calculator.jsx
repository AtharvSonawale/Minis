import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputDigit,
  inputDot,
  clearDisplay,
  performOperation,
  evaluate,
  backspace,
} from './calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);
  const operations = useSelector((state) => state.calculator.operations);

  const handleDigit = (digit) => {
    dispatch(inputDigit(digit));
  };

  const handleDot = () => {
    dispatch(inputDot());
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleOperation = (operator) => {
    dispatch(performOperation(operator));
  };

  const handleEvaluate = () => {
    dispatch(evaluate());
  };

  const handleBackspace = () => {
    dispatch(backspace());
  };

  return (
    <div className="calculator">
      <div className="operations">{operations}</div>
      <div id="display" className="display">{displayValue}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="backspace" onClick={handleBackspace}>←</button>
      <button id="divide" onClick={() => handleOperation('/')}>/</button>
      <button id="multiply" onClick={() => handleOperation('*')}>*</button>
      <button id="subtract" onClick={() => handleOperation('-')}>-</button>
      <button id="add" onClick={() => handleOperation('+')}>+</button>
      <button id="equals" onClick={handleEvaluate}>=</button>
      <button id="decimal" onClick={handleDot}>.</button>
      <button id="zero" onClick={() => handleDigit(0)}>0</button>
      <button id="one" onClick={() => handleDigit(1)}>1</button>
      <button id="two" onClick={() => handleDigit(2)}>2</button>
      <button id="three" onClick={() => handleDigit(3)}>3</button>
      <button id="four" onClick={() => handleDigit(4)}>4</button>
      <button id="five" onClick={() => handleDigit(5)}>5</button>
      <button id="six" onClick={() => handleDigit(6)}>6</button>
      <button id="seven" onClick={() => handleDigit(7)}>7</button>
      <button id="eight" onClick={() => handleDigit(8)}>8</button>
      <button id="nine" onClick={() => handleDigit(9)}>9</button>
    </div>
  );
};

export default Calculator;
