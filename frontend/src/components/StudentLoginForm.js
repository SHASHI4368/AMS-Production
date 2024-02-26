import React from "react";
import "../styles/leclogin.css";
import { useState } from "react";

const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
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
      </form>
    </div>
  );
};

export default StudentLoginForm;
