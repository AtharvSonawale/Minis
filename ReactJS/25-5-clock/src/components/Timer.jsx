const Timer = ({ timeLeft, timerLabel }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2 id="timer-label">{timerLabel}</h2>
      <div id="time-left" className="display-3">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default Timer;
