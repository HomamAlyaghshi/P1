import React, { useState } from "react";
import "./Slider.css";

const SliderComponent = ({ text, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-start w-full">
      {/* Row for text and value */}
      <div className="flex items-center mb-4 w-full">
        <span className="text-sm font-semibold mr-2">{text}</span>
        <span className="font-bold">{value}%</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full max-w-xs md:max-w-md lg:max-w-4xl h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
      />
    </div>
  );
};

export default SliderComponent;
