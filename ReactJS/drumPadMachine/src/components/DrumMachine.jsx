import { useDispatch, useSelector } from 'react-redux';
import { setPower, setVolume, toggleBank } from '../store';
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
        <div id="toggles">
        <button onClick={handlePowerToggle}>
          {power ? 'Turn Off' : 'Turn On'}
        </button>
        <button onClick={handleBankToggle}>Bank</button>
        </div>
        
        <p id="display">{currentSound}</p>
      </div>
        <input
          id='range'
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      <div className="pads">
        {bank.map((pad) => (
          <DrumPad key={pad.id} pad={pad} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
