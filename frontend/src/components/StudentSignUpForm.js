import React from "react";
import "../styles/lecsignup.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/students";

const StudentSignUpForm = ({ passCode, setPassCode, students, setStudents, stdEmail, setStdEmail }) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await api.get("/students");
        setStudents(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      }
    };
    getAllStudents();
  });

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (stdEmail === "") {
      setMessage("Email is required");
      console.log(message);
    } else if (!stdEmail.includes("engug.ruh.ac.lk")) {
      setMessage("Please enter a valid email");
      console.log(message);
    } else {
      const student = students.find((student) => student.email === stdEmail);
      if (!student) {
        history.push("/login/verify");
        const code = Math.floor(Math.random() * 9999);
        setPassCode(code);
        sessionStorage.setItem("passCode", JSON.stringify(code));
        sessionStorage.setItem("stdEmail", JSON.stringify(stdEmail));
        alert("Your passcode is: " + code);
        // const id = students.length ? students[students.length - 1].id + 1 : 1;
        // const newStudent = {
        //   id,
        //   email: email,
        //   passCode: code.toString(),
        // };
        // sessionStorage.setItem("newStudent", JSON.stringify(newStudent));

      } else {
        setMessage("Email already exists");
      }
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
          value={stdEmail}
          onChange={(e) => {
            setStdEmail(e.target.value);
          }}
        />
        {message && (
          <p className="message" style={{ color: "red", fontSize: "15px" }}>
            {message}
          </p>
        )}
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default StudentSignUpForm;
