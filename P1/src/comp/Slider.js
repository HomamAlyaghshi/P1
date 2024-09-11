import React, { useState } from "react";

const SliderComponent = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-96 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
      />
      <div className="mt-4 text-xl font-bold">{value}%</div>
    </div>
  );
};

export default SliderComponent;
