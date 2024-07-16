import React from 'react';

const Controls = ({ handleStartStop, handleReset }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <button id="start_stop" onClick={handleStartStop} className="btn btn-primary mx-2">
        Start/Stop
      </button>
      <button id="reset" onClick={handleReset} className="btn btn-danger mx-2">
        Reset
      </button>
    </div>
  );
};

export default Controls;
