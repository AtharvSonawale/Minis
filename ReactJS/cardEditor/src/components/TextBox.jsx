import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const TextBox = ({ text, onTextChange, font, size, color, onClick }) => {
  return (
    
    <Draggable>
    <input type='text'
      value={text}
      onChange={onTextChange}
      onClick={onClick}
      style={{ fontFamily: font, fontSize: `${size}px`, color: color }}
      className="border-4 border-dashed border-gray-900 w-auto h-auto text-center outline-none "
    />
    </Draggable>
  );
};

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextBox;