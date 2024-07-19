import { useState } from "react";
import TextBox from "./components/TextBox";
import FontDropDown from "./components/FontDropDown";
import SizeDropDown from "./components/SizeDropDown";
import ColorPicker from "./components/ColorPicker";

const CardEditor = () => {
    const [text, setText] = useState('New Text');
    const [font, setFont] = useState('Arial');
    const [size, setSize] = useState(16);
    const [color, setColor] = useState('#000000');
    const [isEditing, setIsEditing] = useState(false);
  
    const [history, setHistory] = useState([{ text }]);
    const [historyIndex, setHistoryIndex] = useState(0);
  
    const handleTextChange = (e) => {
      const newText = e.target.value;
      setText(newText);
  
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push({ text: newText });
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    };
  
    const handleUndo = () => {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setText(history[historyIndex - 1].text);
        setFont(history[historyIndex - 1].font);
        setSize(history[historyIndex - 1].size);
        setColor(history[historyIndex - 1].color);
      }
    };
  
    const handleRedo = () => {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setText(history[historyIndex + 1].text);
        setFont(history[historyIndex + 1].font);
        setSize(history[historyIndex + 1].size);
        setColor(history[historyIndex + 1].color);
      }
    };
  
    const handleFontChange = (font) => setFont(font);
    const handleSizeChange = (size) => setSize(size);
    const handleColorChange = (color) => setColor(color.hex);
  
    return (
      <div className="flex ">
        <div className="flex justify-center m-2 h-20">
              <button
                onClick={handleUndo}
                disabled={historyIndex === 0}
                className="bg-gray-200 rounded cursor-pointer h-10 p-2 font-bold m-1"
              >
                Undo
              </button>
              <button
                onClick={handleRedo}
                disabled={historyIndex === history.length - 1}
                className="bg-gray-200 rounded cursor-pointer h-10 p-2 font-bold m-1"
              >
                Redo
              </button>
            </div>
        <div className={`relative w-full flex justify-center items-center outline-none ${isEditing ? 'mr-64' : ''}`}>
          <TextBox
            text={text}
            onTextChange={handleTextChange}
            font={font}
            size={size}
            color={color}
            onClick={() => setIsEditing(true)}
          />
        </div>
        {isEditing && (
          <div className="w-1/4 p-4 border-2 border-gray-300 rounded-lg m-2 justify-center items-center">
            <FontDropDown selectedFont={font} onFontChange={handleFontChange} />
            <SizeDropDown selectedSize={size} onSizeChange={handleSizeChange} />
            <ColorPicker color={color} onColorChange={handleColorChange} />
          </div>
        )}
      </div>
    );
  };
  
  export default CardEditor;