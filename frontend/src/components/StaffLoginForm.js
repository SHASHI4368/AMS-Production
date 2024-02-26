import React from "react";
import "../styles/leclogin.css";
import { FaGoogle } from "react-icons/fa";
import Uni from "../resources/University.jpg";

const StaffLoginForm = () => {
  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>
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
          <p id="create-btn">
            Do not have an account? <a href="/signup/staff">Sign up</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default StaffLoginForm;
