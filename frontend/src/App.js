import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import "./styles/home.css";
import api from "./api/students";
import Login from "./components/Login";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentLoginForm from "./components/StudentLoginForm";
import StaffLoginForm from "./components/StaffLoginForm";
import StaffSignUpForm from "./components/StaffSignUpForm";
import StudentSignUpForm from "./components/StudentSignUpForm";
import VerificationForm from "./components/VerificationForm";
import StudentDetailForm from "./components/StudentDetailForm";
import StaffDetailForm from "./components/StaffDetailForm";
import StudentHome from "./components/StudentHome";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const url = `http://localhost:8080/db/student/refresh`;
        const response = await axios.get(url, {
          withCredentials: true,
        });
        const accessToken = response.data.accessToken;
        setAuthorized(true);
        return accessToken;
      } catch (err) {
        setAuthorized(false);
        sessionStorage.setItem("authorized", JSON.stringify(false));
        console.log(err);
      }
    };

    if (getToken() !== undefined) {
      setAuthorized(true);
      sessionStorage.setItem("authorized", JSON.stringify(true));
    }
  }, []);

  // useEffect(() => {
  //   setStaff(null);
  // } ,[]);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/student">
          <StudentLoginForm />
        </Route>
        <Route exact path="/login/staff">
          <StaffLoginForm />
        </Route>
        <Route exact path="/signup/staff">
          <StaffSignUpForm staff={staff} setStaff={setStaff} />
        </Route>
        <Route exact path="/signup/student">
          <StudentSignUpForm />
        </Route>
        <Route exact path="/signup/verify">
          <VerificationForm />
        </Route>
        <Route exact path="/signup/student/std-details">
          <StudentDetailForm />
        </Route>
        <Route exact path="/signup/staff/staff-details">
          <StaffDetailForm />
        </Route>
        <Route exact path="/student/home" component={StudentHome} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
