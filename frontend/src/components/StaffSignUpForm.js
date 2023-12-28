import React from 'react';
import "../styles/lecsignup.css";
import { FaGoogle } from "react-icons/fa";

const StaffSignUpForm = () => {
  return (
    <div className="signup-form">
      <form className="signup-form">
        <h2>SIGN UP</h2>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" />
        <label htmlFor="password">Email</label>
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="submit-btn">
          Continue
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

export default StaffSignUpForm