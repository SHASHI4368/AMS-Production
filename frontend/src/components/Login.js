import React from "react";
import Uni from "../resources/University.jpg";
import "../styles/leclogin.css";
import StaffLoginForm from "./StaffLoginForm";
import StaffSignUpForm from "./StaffSignUpForm";
import StaffEmailForm from "./StaffEmailForm";
import StaffVerificationForm from "./VerificationForm";
import StudentVerificationForm from "./VerificationForm";
import StaffDetailForm from "./StaffDetailForm";
import StudentDetailForm from "./StudentDetailForm";
import StudentLoginForm from "./StudentLoginForm";
import StudentSignUpForm from "./StudentSignUpForm";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = ({
  userType,
  isSignIn,
  setIsSignIn,
  isSignUp,
  setIsSignUp,
  students,
  setStudents,
  staff,
  setStaff,
  staffCode,
}) => {
  const [passCode, setPassCode] = useState("");
  const [stdEmail, setStdEmail] = useState("");

  useEffect(() => {}, [
    setIsSignIn(JSON.parse(sessionStorage.getItem("isSignIn"))),
    setIsSignUp(JSON.parse(sessionStorage.getItem("isSignUp"))),
  ]);

  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>

      <Switch>
        
        
        <Route exact path="/login/std-details">
          <StudentDetailForm stdEmail={stdEmail} setStdEmail={setStdEmail} />
        </Route>
        <Route exact path="/login/staff/verify">
          <StaffVerificationForm
            passCode={passCode}
            setPassCode={setPassCode}
          />
        </Route>
        <Route exact path="/login/staff-details">
          <StaffDetailForm />
        </Route>
      </Switch>
      {/* <StaffEmailForm /> */}
      {/* <StaffVerificationForm/> */}
      {/* <StaffDetailForm/> */}
      {/* <StudentDetailForm /> */}
      {/* <StudentLoginForm/> */}
    </main>
  );
};

export default Login;
