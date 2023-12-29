import React, { useEffect } from 'react';
import Logo from '../resources/Logo.png';
import '../styles/header.css';
import { useHistory } from 'react-router-dom';

const Header = ({userType, setUserType, isSignIn, setIsSignIn, setIsSignUp}) => {

  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  }
  const handleSelect = (e) => {
    setUserType(e.target.value);
    sessionStorage.setItem("userType", JSON.stringify(e.target.value));
  }

  const handleLogin = () => {
    setIsSignIn(true);
    sessionStorage.setItem("isSignIn", JSON.stringify(true));
    setIsSignUp(false);
    sessionStorage.setItem("isSignUp", JSON.stringify(false));
    history.push("/login");

  }

  const handleSignUp = () => {
    setIsSignUp(true);
    sessionStorage.setItem("isSignUp", JSON.stringify(true));
    setIsSignIn(false);
    sessionStorage.setItem("isSignIn", JSON.stringify(false));
    history.push("/login");
  }
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
        <button className="signup" onClick={handleSignUp}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Header