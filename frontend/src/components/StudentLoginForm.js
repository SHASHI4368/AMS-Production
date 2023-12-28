import React from "react";
import "../styles/leclogin.css";

const StudentLoginForm = () => {
  return (
    <div className="std-login-form">
      <form className="std-login-form">
        <h2>LOGIN</h2>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" />
        <label htmlFor="password">Email</label>
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p>
          Forgot Password? <a href="#">Reset</a>
        </p>
      </form>
    </div>
  );
};

export default StudentLoginForm;
