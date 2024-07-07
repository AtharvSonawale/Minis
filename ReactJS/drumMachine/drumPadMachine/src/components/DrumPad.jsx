import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSound } from '../store';

const DrumPad = ({ pad }) => {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.drum.power);
  const volume = useSelector((state) => state.drum.volume);

  const playSound = () => {
    if (power) {
      const audio = document.getElementById(pad.key);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      dispatch(setCurrentSound(pad.id));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === pad.key) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={pad.id} onClick={playSound}>
      {pad.key}
      <audio className="clip" id={pad.key} src={pad.url}></audio>
    </div>
  );
};

export default DrumPad;
