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

function App() {
  const [authorized, setAuthorized] = useState(false);

  const [staffList, setStaffList] = useState([]);

  const [selectedStaffEmail, setSelectedStaffEmail] = useState(
    JSON.parse(sessionStorage.getItem("selectedStaffEmail"))
  );

  const [appointmentsCount, setAppointmentsCount] = useState(0);

  const getAllAppointments = async (Lecturer_mail) => {
    try {
      const url = `http://localhost:8080/db/appointments/${Lecturer_mail}`;
      const response = await axios.get(url);
      return response.data.length;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedStaffEmail !== null) {
      if (JSON.parse(sessionStorage.getItem("count")) === null) {
        sessionStorage.setItem(
          "count",
          JSON.stringify(getAllAppointments(selectedStaffEmail))
        );
      } else {
        const newCount = getAllAppointments(selectedStaffEmail);
        if (newCount > JSON.parse(sessionStorage.getItem("count"))) {
          sessionStorage.setItem(
            "count",
            JSON.stringify(getAllAppointments(selectedStaffEmail))
          );
          console.log(newCount);
        }
      }
    }
  }, []);

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
        // setAuthorized(false);
        // sessionStorage.setItem("authorized", JSON.stringify(false));
        console.log(err);
      }
    };

    if (getToken() !== undefined) {
      setAuthorized(true);
      // sessionStorage.setItem("authorized", JSON.stringify(true));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/student">
          <StudentLoginForm />
        </Route>
        <Route exact path="/login/staff">
          <StaffLoginForm />
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
          <StudentCalendar />
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
