import PropTypes from 'prop-types';

const FontDropdown = ({ selectedFont, onFontChange }) => {
  const fonts = ['Arial', 
    'Verdana', 
    'Times New Roman', 
    'Courier New', 
    'Georgia', 
    'Comic Sans MS', 
    'Impact', 
    'Lucida Console', 
    'Tahoma', 
    'Trebuchet MS'];

  return (
    <div className="m-2">
      <label className="font-medium text-xl">Font:</label>
      <select
        value={selectedFont}
        onChange={(e) => onFontChange(e.target.value)}
        className="bg-gray-500 rounded-lg text-white p-0.5 max-w-30 w-auto"
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

FontDropdown.propTypes = {
  selectedFont: PropTypes.string.isRequired,
  onFontChange: PropTypes.func.isRequired,
};

export default FontDropdown;
