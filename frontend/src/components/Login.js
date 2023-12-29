import React from "react";
import Uni from "../resources/University.jpg";
import "../styles/leclogin.css";
import StaffLoginForm from "./StaffLoginForm";
import StaffSignUpForm from "./StaffSignUpForm";
import StaffEmailForm from "./StaffEmailForm";
import StaffVerificationForm from "./StudentVerificationForm";
import StudentVerificationForm from "./StudentVerificationForm";
import StaffDetailForm from "./StaffDetailForm";
import StudentDetailForm from "./StudentDetailForm";
import StudentLoginForm from "./StudentLoginForm";
import StudentSignUpForm from "./StudentSignUpForm";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = ({userType, isSignIn, setIsSignIn, isSignUp, setIsSignUp, students, setStudents}) => {

  const [passCode, setPassCode] = useState("");
  const [stdEmail, setStdEmail] = useState("");

  useEffect(() => {},[
    setIsSignIn(JSON.parse(sessionStorage.getItem("isSignIn"))),
    setIsSignUp(JSON.parse(sessionStorage.getItem("isSignUp")))
  ])

  return (
    <main className="login">
      <div className="back-img">
        <img src={Uni} />
      </div>

      <Switch>
        <Route exact path="/login">
          {userType === "Staff" && isSignIn && <StaffLoginForm />}
          {userType === "Student" && isSignIn && <StudentLoginForm />}
          {userType === "Staff" && isSignUp && <StaffSignUpForm />}
          {userType === "Student" && isSignUp && (
            <StudentSignUpForm passCode={passCode} setPassCode={setPassCode} students={students} setStudents={setStudents} stdEmail={stdEmail} setStdEmail={setStdEmail} />
          )}
        </Route>
        <Route path="/login/verify">
          <StudentVerificationForm
            passCode={passCode}
            setPassCode={setPassCode}
          />
        </Route>
        <Route path="/login/std-details">
          <StudentDetailForm stdEmail={stdEmail} setStdEmail={setStdEmail} />
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
