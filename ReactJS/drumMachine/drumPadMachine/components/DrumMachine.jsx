import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPower, setVolume, setCurrentSound, toggleBank } from '../src/store';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const dispatch = useDispatch();
  const power = useSelector((state) => state.drum.power);
  const volume = useSelector((state) => state.drum.volume);
  const currentSound = useSelector((state) => state.drum.currentSound);
  const currentBank = useSelector((state) => state.drum.currentBank);
  const bank = useSelector((state) => state.drum.banks[currentBank]);

  const handlePowerToggle = () => {
    dispatch(setPower(!power));
  };

  const handleVolumeChange = (e) => {
    dispatch(setVolume(e.target.value));
  };

  const handleBankToggle = () => {
    dispatch(toggleBank());
  };

  return (
    <div id="drum-machine">
      <div className="controls">
        <button onClick={handlePowerToggle}>
          {power ? 'Turn Off' : 'Turn On'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={handleBankToggle}>Toggle Bank</button>
        <p id="display">{currentSound}</p>
      </div>
      <div className="pads">
        {bank.map((pad) => (
          <DrumPad key={pad.id} pad={pad} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
