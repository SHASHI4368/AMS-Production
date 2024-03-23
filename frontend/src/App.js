import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import "./styles/home.css";
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
import Department from "./components/Department";
import StaffHome from "./components/StaffHome";
import StudentCalendar from "./components/StudentCalendar";
import StaffCalendar from "./components/StaffCalendar";
import StaffAppointments from "./components/StaffAppointments";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function App() {
  useEffect(() => {
    socket.on("add appointment", (apt) => {
      if ((apt = JSON.parse(sessionStorage.getItem("selectedStaffEmail")))) {
        alert("New appointment added");
      }
    });
  }, []);

  const [authorized, setAuthorized] = useState(false);

  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const url = `http://localhost:8080/db/staffList`;
        const response = await axios.get(url);
        setStaffList(response.data);
        sessionStorage.setItem("staffList", JSON.stringify(response.data));
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

    getAllStaff();
  }, []);

  useEffect(() => {
    const getStdToken = async () => {
      console.log("Getting token");
      try {
        const url = `http://localhost:8080/db/student/refresh`;
        const response = await axios.get(url, {
          withCredentials: true,
        });
        console.log(response.data.accessToken);
        const accessToken = response.data.accessToken;
        setAuthorized(true);
        return accessToken;
      } catch (err) {
        setAuthorized(false);
        console.log(err);
      }
    };

    const getStaffToken = async () => {
      console.log("Getting token");
      try {
        const url = `http://localhost:8080/db/staff/refresh`;
        const response = await axios.get(url, {
          withCredentials: true,
        });
        console.log(response.data.accessToken);
        const accessToken = response.data.accessToken;
        setAuthorized(true);
        return accessToken;
      } catch (err) {
        setAuthorized(false);
        console.log(err);
      }
    };
    if (JSON.parse(sessionStorage.getItem("userType")) === "Student") {
      if (getStdToken() !== undefined) {
        setAuthorized(true);
        // sessionStorage.setItem("authorized", JSON.stringify(true));
      }
    }else if(JSON.parse(sessionStorage.getItem("userType")) === "Staff"){
      if (getStaffToken() !== undefined) {
        setAuthorized(true);
        // sessionStorage.setItem("authorized", JSON.stringify(true));
      }
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/student">
          <StudentLoginForm socket={socket} />
        </Route>
        <Route exact path="/login/staff">
          <StaffLoginForm socket={socket} />
        </Route>
        <Route exact path="/signup/staff">
          <StaffSignUpForm />
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
        <Route exact path="/student/department">
          <Department />
        </Route>
        <Route exact path="/student/calendar">
          <StudentCalendar socket={socket} />
        </Route>
        <Route exact path="/staff/calendar">
          <StaffCalendar />
        </Route>
        <Route exact path="/staff/home">
          <StaffHome />
        </Route>
        <Route exact path="/staff/appointments">
          <StaffAppointments />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
