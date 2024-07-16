import React from 'react';

const BreakLength = ({ breakLength, decrementBreakLength, incrementBreakLength }) => {
  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button id="break-decrement" onClick={decrementBreakLength} className="btn btn-secondary m-2">-</button>
        <div id="break-length">{breakLength}</div>
        <button id="break-increment" onClick={incrementBreakLength} className="btn btn-secondary m-2">+</button>
      </div>
    </div>
  );
};

export default BreakLength;
