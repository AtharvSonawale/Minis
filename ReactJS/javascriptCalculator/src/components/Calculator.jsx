// src/components/Calculator.jsx
import React from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="buttons">
        <Button label="AC" id="clear" type="clear" />
        <Button label="/" id="divide" type="operator" />
        <Button label="*" id="multiply" type="operator" />
        <Button label="7" id="seven" type="digit" />
        <Button label="8" id="eight" type="digit" />
        <Button label="9" id="nine" type="digit" />
        <Button label="-" id="subtract" type="operator" />
        <Button label="4" id="four" type="digit" />
        <Button label="5" id="five" type="digit" />
        <Button label="6" id="six" type="digit" />
        <Button label="+" id="add" type="operator" />
        <Button label="1" id="one" type="digit" />
        <Button label="2" id="two" type="digit" />
        <Button label="3" id="three" type="digit" />
        <Button label="=" id="equals" type="equals" />
        <Button label="0" id="zero" type="digit" className="zero" />
        <Button label="." id="decimal" type="decimal" />
      </div>
    </div>
  );
};

export default Calculator;