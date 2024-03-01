import React, { useEffect } from "react";
import Logo from "../resources/Logo.png";
import "../styles/header.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DropdownButton from "./helpers/DropdownButton";

const Header = () => {
  const [userType, setUserType] = useState(
    JSON.parse(sessionStorage.getItem("userType")) || "Student"
  );

  useEffect(() => {
    if (sessionStorage.getItem("userType") === null) {
      sessionStorage.setItem("userType", JSON.stringify("Student"));
    }
    console.log(JSON.parse(sessionStorage.getItem("authorized")));
  }, []);

  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  const handleSelect = (e) => {
    setUserType(e.target.value);
    sessionStorage.setItem("userType", JSON.stringify(e.target.value));
  };

  const handleLogin = (option) => {
    if (option === "Student") {
      sessionStorage.setItem("userType", JSON.stringify("Student"));
      history.push("/login/student");
    } else {
      sessionStorage.setItem("userType", JSON.stringify("Staff"));
      history.push("/login/staff");
    }
  };

  const handleLogout = async () => {
    try {
      const url = `http://localhost:8080/db/student/logout`;
      const response = await axios.get(url, {
        withCredentials: true,
      });
      const accessToken = response.data.accessToken;
      return accessToken;
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoutButton = () => {
    handleLogout();
    sessionStorage.setItem("authorized", JSON.stringify(false));
    history.push("/login/student");
  };

  const handleDepartmentSelect = (option) => {
    sessionStorage.setItem("department", JSON.stringify(option));
    history.push("/student/department");
  };

  return (
    <div className="header">
      <img className="logo" alt="Logo" src={Logo} onClick={navigateHome} />
      {JSON.parse(sessionStorage.getItem("authorized")) === true && (
        <div className="buttons">
          <button className="loginbtn" onClick={handleLogoutButton}>
            HOME
          </button>
          <DropdownButton
            dropdownName="DEPARTMENT"
            options={["DCEE", "DEIE", "DMME", "MENA", "Computer"]}
            handleOptionSelect={handleDepartmentSelect}
          />
          <button
            className="loginbtn"
            id="appointments"
            onClick={handleLogoutButton}
          >
            APPOINTMENTS
          </button>
          <button
            className="loginbtn"
            id="logout-button"
            onClick={handleLogoutButton}
          >
            LOGOUT
          </button>
        </div>
      )}
      {JSON.parse(sessionStorage.getItem("authorized")) === false && (
        <div className="buttons">
          <DropdownButton
            dropdownName="LOGIN"
            options={["Student", "Staff"]}
            handleOptionSelect={handleLogin}
            id="loginbtn"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
