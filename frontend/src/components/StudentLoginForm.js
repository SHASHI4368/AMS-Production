import React from "react";
import "../styles/leclogin.css";
import { useState } from "react";
import Uni from "../resources/University.jpg";

const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>

      <div className="std-login-form">
        <form className="std-login-form">
          <h2>LOGIN</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            placeholder="Faculty Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Email</label>
          <input
            type="password"
            className="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
          <p>
            Forgot Password? <a href="#">Reset</a>
          </p>
          <p id="create-btn">
            Do not have an account? <a href="/signup/student">Sign up</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default StudentLoginForm;
