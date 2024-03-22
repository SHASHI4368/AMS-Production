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
    <main className="appointment-page">
      <h1 className="apt-heading">Upcomming appointments</h1>

      <div className="list-view">
        {appointments &&
          JSON.parse(sessionStorage.getItem("appointments"))
            .filter((appointment) => {
              // Extract the date from the appointment
              const appointmentDate = new Date(appointment.StartTime);
              // Get the current date
              const currentDate = new Date();
              // Return true if the appointment date is on or before the current date
              return appointmentDate <= currentDate;
            })
            .map((appointment, index) => (
              <ListAppointment appointment={appointment} key={index} />
            ))}
      </div>
      {/* <div className="detailed-view">
        <h1>Appointment details</h1>
      </div> */}
    </main>
  );
};

export default StaffAppointments;
