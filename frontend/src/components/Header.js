import React, { useEffect } from "react";
import Logo from "../resources/Logo.png";
import "../styles/header.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

  const handleLogin = () => {
    if (JSON.parse(sessionStorage.getItem("userType")) === "Student") {
      history.push("/login/student");
    } else {
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

  return (
    <div className="header">
      <img className="logo" alt="Logo" src={Logo} onClick={navigateHome} />
      {JSON.parse(sessionStorage.getItem("authorized")) === true && (
        <div className="buttons">
          <button className="loginbtn" onClick={handleLogoutButton}>
            HOME
          </button>
          <button className="loginbtn" onClick={handleLogoutButton}>
            DEPARTMENTS
          </button>
          <button className="loginbtn" onClick={handleLogoutButton}>
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
          <select
            name="userType"
            className="user-type"
            onChange={handleSelect}
            defaultValue={userType}
          >
            <option value="Student">Student</option>
            <option value="Staff">Staff</option>
          </select>
          <button className="loginbtn" id="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
