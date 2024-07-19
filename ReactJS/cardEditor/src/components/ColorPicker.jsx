import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onColorChange }) => {
  return (
    <div className="m-2">
      <label className="font-medium text-xl ">Color:</label>
      <SketchPicker color={color} onChangeComplete={onColorChange} className='bg-gray-500 rounded-lg text-black p-0.5 max-w-30 w-auto'/>
    </div>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorPicker;
