import React from "react";
import { useState } from "react";
import "./style.css";

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["DCEE", "DEIE", "DMME", "MENA", "Computer"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown">
        <button className="dropdown-button">
          {selectedOption || "DEPARTMENT"}
        </button>
        <div className="dropdown-content">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="dropdown-item"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
