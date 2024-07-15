import React from 'react';

const TimerDisplay = ({ isSession, timeLeft }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="box has-text-centered">
      <div id="timer-label" className="title is-3">{isSession ? 'Session' : 'Break'}</div>
      <div id="time-left" className="title is-1">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default TimerDisplay;
