import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const displayValue = useSelector((state) => state.calculator.displayValue);

  return <div id="display">{displayValue}</div>;
};

export default Display;
