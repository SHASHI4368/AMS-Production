import React, { useEffect } from "react";
import "../styles/appointments.css";
import { useState } from "react";
import axios, { all } from "axios";
import ListAppointment from "./helpers/ListAppointment";

const StaffAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAllAppointments = async (Lecturer_mail) => {
    try {
      const url = `http://localhost:8080/db/appointments/confirmed/${Lecturer_mail}`;
      const response = await axios.get(url);
      console.log(response.data);
      sessionStorage.setItem("appointments", JSON.stringify(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setAppointments(
      getAllAppointments(
        JSON.parse(sessionStorage.getItem("selectedStaffEmail"))
      )
    );
  }, []);

  return (
    <div className="appointments">
      <div className="appointment-header">
        <div className="apt-number heading">
          <span>No.</span>
        </div>
        <div className="apt-student heading">
          <span>Student</span>
        </div>
        <div className="apt-reason heading">
          <span>Reason</span>
        </div>
        <div className="apt-details heading">
          <span>Appointment</span>
        </div>
        <div className="apt-status heading">
          <span>Status</span>
        </div>
      </div>
      {JSON.parse(sessionStorage.getItem("appointments")).map(
        (appointment, index) => (
          <ListAppointment key={index} appointment={appointment} />
        )
      )}
    </div>
  );
};

export default StaffAppointments;
