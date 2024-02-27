import React from "react";
import "../styles/leclogin.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Uni from "../resources/University.jpg";

const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleLogin = async (Email, Password) => {
    try {
      const url = `http://localhost:8080/db/student/login`;
      const response = await axios.post(url, { Email, Password });
      console.log(response);
      if (response.data.Status === "Success") {
        console.log("Login successful");
        history.push("/student/home");
      } else {
        setMessage("Invalid email or password");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage("Please fill all the fields");
    } else {
      handleLogin(email, password);
    }
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {message && (
            <p className="message" style={{ color: "red", fontSize: "15px" }}>
              {message}
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
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
