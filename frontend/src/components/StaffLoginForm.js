import React from 'react';
import "../styles/leclogin.css";
import { FaGoogle } from "react-icons/fa";

const StaffLoginForm = () => {
  return (
    <div className="login-form">
      <form className="login-form">
        <h2>LOGIN</h2>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" />
        <label htmlFor="password">Email</label>
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p>Or</p>
        <button className="google-btn">
          <FaGoogle className="google-icon" />
          <p>CONTINUE WITH GOOGLE</p>
        </button>
      </form>
    </div>
  );
}

export default StaffLoginForm;