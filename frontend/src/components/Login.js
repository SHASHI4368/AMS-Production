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
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = ({userType, isSignIn, isSignUp}) => {

  useEffect(() => {
    console.log(isSignIn);
    console.log(userType);
  })
  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>
      {userType === "Staff" && isSignIn && <StaffLoginForm />}
      {userType === "Student" && isSignIn && <StudentLoginForm />}
      {userType === "Staff" && isSignUp && <StaffSignUpForm />}
      {userType === "Student" && isSignUp}
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
