import React from 'react';

const SessionLength = ({ sessionLength, decrementSessionLength, incrementSessionLength }) => {
  return (
    <div>
      <h2 id="session-label">Session Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button id="session-decrement" onClick={decrementSessionLength} className="btn btn-secondary m-2">-</button>
        <div id="session-length">{sessionLength}</div>
        <button id="session-increment" onClick={incrementSessionLength} className="btn btn-secondary m-2">+</button>
      </div>
    </div>
  );
};

export default SessionLength;
