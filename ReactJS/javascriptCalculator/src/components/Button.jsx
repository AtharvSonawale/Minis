// src/components/Button.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { inputDigit, inputDecimal, clear, performOperation, compute } from '../redux/calculatorSlice';

const Button = ({ label, id, type }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (type) {
      case 'digit':
        dispatch(inputDigit({ digit: label }));
        break;
      case 'operator':
        dispatch(performOperation({ operator: label }));
        break;
      case 'decimal':
        dispatch(inputDecimal());
        break;
      case 'clear':
        dispatch(clear());
        break;
      case 'equals':
        dispatch(compute());
        break;
      default:
        break;
    }
  };

  return (
    <button id={id} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
