import React, { useState, useEffect } from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
import Controls from './components/Controls';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    setIsRunning(false);
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const decrementBreakLength = () => {
    setBreakLength((prev) => Math.max(prev - 1, 1));
  };

  const incrementBreakLength = () => {
    setBreakLength((prev) => Math.min(prev + 1, 60));
  };

  const decrementSessionLength = () => {
    setSessionLength((prev) => Math.max(prev - 1, 1));
    setTimeLeft((prev) => Math.max(prev - 60, 60));
  };

  const incrementSessionLength = () => {
    setSessionLength((prev) => Math.min(prev + 1, 60));
    setTimeLeft((prev) => Math.min(prev + 60, 60 * 60));
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        if (timerLabel === 'Session') {
          setTimerLabel('Break');
          setTimeLeft(breakLength * 60);
        } else {
          setTimerLabel('Session');
          setTimeLeft(sessionLength * 60);
        }
        const audio = document.getElementById('beep');
        audio.play();
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timerLabel, breakLength, sessionLength]);

  return (
    <div className="container text-center">
      <h1>25 + 5 Clock</h1>
      <div className="row">
        <div className="col-md-6">
          <BreakLength
            breakLength={breakLength}
            decrementBreakLength={decrementBreakLength}
            incrementBreakLength={incrementBreakLength}
          />
        </div>
        <div className="col-md-6">
          <SessionLength
            sessionLength={sessionLength}
            decrementSessionLength={decrementSessionLength}
            incrementSessionLength={incrementSessionLength}
          />
        </div>
      </div>
      <Timer timeLeft={timeLeft} timerLabel={timerLabel} />
      <Controls handleStartStop={handleStartStop} handleReset={handleReset} />
      <audio id="beep" src="https://www.soundjay.com/buttons/sounds/beep-06.mp3"></audio>
    </div>
  );
};

export default App;
