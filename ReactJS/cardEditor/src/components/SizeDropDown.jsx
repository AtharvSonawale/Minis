import PropTypes from 'prop-types';

const SizeDropdown = ({ selectedSize, onSizeChange }) => {
  const sizes = [12, 14, 16, 18, 20, 24, 28, 32];

  return (
    <div className="m-2">
      <label className="font-medium text-xl">Size:</label>
      <select
        value={selectedSize}
        onChange={(e) => onSizeChange(parseInt(e.target.value))}
        className="bg-gray-500 rounded-lg text-white p-0.5 max-w-30 w-auto"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>
    </div>
  );
};

SizeDropdown.propTypes = {
  selectedSize: PropTypes.number.isRequired,
  onSizeChange: PropTypes.func.isRequired,
};

export default SizeDropdown;
