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
  }

  const handleLogin = () => {
    setIsSignIn(true);
    setIsSignUp(false);
    console.log(isSignIn);
    history.push("/login");
  }

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsSignIn(false);
    history.push("/login");
  }
  return (
    <div className="header">
      <img className="logo" alt="Logo" src={Logo} onClick={navigateHome}/>
      <div className="buttons">
        <select name="userType" className="user-type" onChange={handleSelect}>
          <option value="Student">Student</option>
          <option value="Staff">Staff</option>
        </select>
        <button className="loginbtn" onClick={handleLogin}>LOGIN</button>
        <button className="signup" onClick={handleSignUp} >SIGN UP</button>
      </div>
    </div>
  );
}

export default Header