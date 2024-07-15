import React from 'react';

const ControlPanel = ({
  breakLength,
  sessionLength,
  handleBreakIncrement,
  handleBreakDecrement,
  handleSessionIncrement,
  handleSessionDecrement,
}) => {
  return (
    <div className="columns">
      <div className="column">
        <div className="box has-text-centered">
          <div id="break-label" className="title is-4">Break Length</div>
          <div className="buttons is-centered">
            <button id="break-decrement" className="button is-info" onClick={handleBreakDecrement}>-</button>
            <div id="break-length" className="title is-4">{breakLength}</div>
            <button id="break-increment" className="button is-info" onClick={handleBreakIncrement}>+</button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="box has-text-centered">
          <div id="session-label" className="title is-4">Session Length</div>
          <div className="buttons is-centered">
            <button id="session-decrement" className="button is-info" onClick={handleSessionDecrement}>-</button>
            <div id="session-length" className="title is-4">{sessionLength}</div>
            <button id="session-increment" className="button is-info" onClick={handleSessionIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
