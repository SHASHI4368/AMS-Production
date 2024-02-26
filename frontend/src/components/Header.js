import React, { useEffect } from "react";
import Logo from "../resources/Logo.png";
import "../styles/header.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [userType, setUserType] = useState(
    JSON.parse(sessionStorage.getItem("userType")) || "Student"
  );

  useEffect(() => {
    if(sessionStorage.getItem("userType") === null){
      sessionStorage.setItem("userType", JSON.stringify("Student"));
    }
  },[]);

  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };
  const handleSelect = (e) => {
    setUserType(e.target.value);
    sessionStorage.setItem("userType", JSON.stringify(e.target.value));
  };

  const handleLogin = () => {
    if (JSON.parse(sessionStorage.getItem("userType")) === "Student") {
      history.push("/login/student");
    } else {
      history.push("/login/staff");
    }
  };

  return (
    <div className="header">
      <img className="logo" alt="Logo" src={Logo} onClick={navigateHome} />
      <div className="buttons">
        <select
          name="userType"
          className="user-type"
          onChange={handleSelect}
          defaultValue={userType}
        >
          <option value="Student">Student</option>
          <option value="Staff">Staff</option>
        </select>
        <button className="loginbtn" onClick={handleLogin}>
          LOGIN
        </button>
        {/* <button className="signup" onClick={handleSignUp}>
          SIGN UP
        </button> */}
      </div>
    </div>
  );
};

export default Header;
