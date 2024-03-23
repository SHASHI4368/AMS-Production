import React from "react";
import "../styles/leclogin.css";
import { FaGoogle } from "react-icons/fa";
import Uni from "../resources/University.jpg";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const StaffLoginForm = () => {
  const history = useHistory();
  const [staff, setStaff] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const cookies = new Cookies();

  useEffect(() => {
    setEmail(JSON.parse(sessionStorage.getItem("selectedStaffEmail")));
    const getStaffPassword = async (Email) => {
      try {
        const url = `http://localhost:8080/db/staff/password/${Email}`;
        const response = await axios.get(url);
        setPassword(response.data[0].Original_password);
      } catch (err) {
        console.log(err);
      }
    };
    getStaffPassword(JSON.parse(sessionStorage.getItem("selectedStaffEmail")));
  }, []);

  const handleStaffLogin = async (Email, Original_password) => {
    try {
      const url = `http://localhost:8080/db/staff/login`;
      const response = await axios.post(url, { Email, Original_password });
      if (response.data.Status === "Success") {
        sessionStorage.setItem("authorized", JSON.stringify(true));
        console.log("Login successful");
        history.push("/staff/home");
      } else {
        setMessage("Invalid email or password");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getStaffPassword = async (Email) => {
      try {
        const url = `http://localhost:8080/db/staff/password/${Email}`;
        const response = await axios.get(url);
        return response.data[0].Original_password;
      } catch (err) {
        console.log(err);
      }
    };
    const handleLogin = async (e) => {
      if (JSON.parse(sessionStorage.getItem("isAuthed")) !== null) {
        sessionStorage.setItem("isAuthed", JSON.stringify(false));
        const password = await getStaffPassword(
          JSON.parse(sessionStorage.getItem("selectedStaffEmail"))
        );
        handleStaffLogin(
          JSON.parse(sessionStorage.getItem("selectedStaffEmail")),
          password
        );
      }
    };
    if (JSON.parse(sessionStorage.getItem("isAuthed")) !== null) {
      handleLogin();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    handleStaffLogin(
      JSON.parse(sessionStorage.getItem("selectedStaffEmail")),
      password
    );
  };

  useEffect(() => {
    const getStaff = async () => {
      try {
        const url = `http://localhost:8080/login/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        console.log(data.user._json.email);
        // handleLogin(data.user._json.email);
      } catch (err) {
        console.log(err);
      }
    };

    getStaff();
  }, []);

  useEffect(() => {
    setEmail(staff ? staff.email : "");
  }, [staff]);

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    sessionStorage.setItem(
      "selectedStaffEmail",
      JSON.stringify(e.target.value)
    );
  };

  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>
      <div className="login-form">
        <form className="login-form">
          <h2>LOGIN</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            placeholder="Faculty Email"
            Value={
              JSON.parse(sessionStorage.getItem("selectedStaffEmail"))
                ? JSON.parse(sessionStorage.getItem("selectedStaffEmail"))
                : " "
            }
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Email</label>
          <input
            type="password"
            className="password"
            placeholder="Password"
            Value={password ? password : ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && (
            <p className="message" style={{ color: "red", fontSize: "15px" }}>
              {message}
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleLogin}>
            Login
          </button>
          <p>Or</p>
          <button className="google-btn" onClick={handleGoogleAuth}>
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
