import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["DCEE", "DEIE", "DMME", "MENA", "Computer"];
  const history = useHistory();

  const handleOptionSelect = (option) => {
    sessionStorage.setItem("department", JSON.stringify(option));
    history.push("/student/department");
  };

  // useState(() => {
  //   setSelectedOption(JSON.parse(sessionStorage.getItem("department")));
  // }, []);

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
