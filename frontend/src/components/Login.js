import React from "react";
import Uni from "../resources/University.jpg";
import "../styles/leclogin.css";
import StaffLoginForm from "./StaffLoginForm";
import StaffSignUpForm from "./StaffSignUpForm";
import StaffEmailForm from "./StaffEmailForm";
import StaffVerificationForm from "./StaffVerificationForm";
import StaffDetailForm from "./StaffDetailForm";
import StudentDetailForm from "./StudentDetailForm";
import StudentLoginForm from "./StudentLoginForm";
import StudentSignUpForm from "./StudentSignUpForm";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = ({userType, isSignIn, setIsSignIn, isSignUp, setIsSignUp}) => {

  useEffect(() => {},[
    setIsSignIn(JSON.parse(sessionStorage.getItem("isSignIn"))),
    setIsSignUp(JSON.parse(sessionStorage.getItem("isSignUp")))
  ])

  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>
      {(userType === "Staff" && isSignIn) && <StaffLoginForm />}
      {(userType === "Student" && isSignIn) && <StudentLoginForm />}
      {(userType === "Staff" && isSignUp) && <StaffSignUpForm />}
      {(userType === "Student" && isSignUp) && <StudentSignUpForm />}
      {/* <StaffLoginForm /> */}
      {/* <StaffSignUpForm /> */}
      {/* <StaffEmailForm /> */}
      {/* <StaffVerificationForm/> */}
      {/* <StaffDetailForm/> */}
      {/* <StudentDetailForm /> */}
      {/* <StudentLoginForm/> */}
    </main>
  );
};

export default Login;
