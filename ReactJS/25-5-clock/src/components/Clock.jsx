import React, { useState, useEffect, useRef } from 'react';
import ControlPanel from './ControlPanel';
import TimerDisplay from './TimerDisplay';

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const intervalRef = useRef(null);

  const reset = () => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsSession(true);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const decrementTime = () => {
    setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(decrementTime, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      const audio = document.getElementById('beep');
      audio.play();
      if (isSession) {
        setIsSession(false);
        setTimeLeft(breakLength * 60);
      } else {
        setIsSession(true);
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [timeLeft, isSession, breakLength, sessionLength]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  };

  const handleBreakDecrement = () => {
    if (breakLength > 1) setBreakLength(breakLength - 1);
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60) {
      const newSessionLength = sessionLength + 1;
      setSessionLength(newSessionLength);
      if (isSession) setTimeLeft(newSessionLength * 60);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      const newSessionLength = sessionLength - 1;
      setSessionLength(newSessionLength);
      if (isSession) setTimeLeft(newSessionLength * 60);
    }
  };

  return (
    <div>
      <ControlPanel
        breakLength={breakLength}
        sessionLength={sessionLength}
        handleBreakIncrement={handleBreakIncrement}
        handleBreakDecrement={handleBreakDecrement}
        handleSessionIncrement={handleSessionIncrement}
        handleSessionDecrement={handleSessionDecrement}
      />
      <TimerDisplay
        isSession={isSession}
        timeLeft={timeLeft}
      />
      <div className="buttons is-centered">
        <button id="start_stop" className="button is-primary" onClick={handleStartStop}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button id="reset" className="button is-danger" onClick={reset}>Reset</button>
      </div>
      <audio id="beep" src="https://www.soundjay.com/button/sounds/beep-07.mp3" />
    </div>
  );
};

export default Clock;
