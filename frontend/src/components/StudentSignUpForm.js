import React from "react";
import "../styles/lecsignup.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const StudentSignUpForm = ({passCode, setPassCode}) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Email is required");
      console.log(message);
    } else if (!email.includes("engug.ruh.ac.lk")) {
      setMessage("Please enter a valid email");
      console.log(message);
    }else{
     history.push("/login/verify");
     const code = Math.floor(Math.random() * 9999);
     setPassCode(code);
     sessionStorage.setItem("passCode", JSON.stringify(code));
     alert("Your passcode is: " + code);
    }
  };

  return (
    <div className="std-signup-form">
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <h2>SIGN UP</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="email"
          placeholder="Faculty Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {message && 
         <p className="message" style={{color: "red", fontSize:"15px"}}>
          {message}
         </p>
        }
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default StudentSignUpForm;
