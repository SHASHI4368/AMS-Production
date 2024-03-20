import React, { useEffect } from "react";
import "./listAppointment.css";

const ListAppointment = ({ appointment }) => {
  const getTime = (value) => {
    const date = new Date(value);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedTime = `${formattedHours}:${formattedMinutes}`;
    if (formattedTime === "NaN:NaN") {
      return "";
    } else {
      return formattedTime;
    }
  };

  useEffect(() => {
    console.log(appointment);
  }, []);

  const getDate = (value) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    if (formattedDate === "NaN/NaN/NaN") {
      return "";
    } else {
      return formattedDate;
    }
  };

  return (
    <main className="apt-description">
      <table className="appointment-table">
        <tbody>
          <tr>
            <td>
              <strong>Subject</strong>
            </td>
            <td>{appointment.Subject}</td>
          </tr>
          <tr>
            <td>
              <strong>Date</strong>
            </td>
            <td>{getDate(appointment.StartTime)}</td>
          </tr>
          <tr>
            <td>
              <strong>Student</strong>
            </td>
            <td>{appointment.Student_reg}</td>
          </tr>
          <tr>
            <td>
              <strong>Time</strong>
            </td>
            <td>
              From {getTime(appointment.StartTime)} to{" "}
              {getTime(appointment.EndTime)}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Description</strong>
            </td>
            <td>
              {appointment.Description !== null
                ? appointment.Description.length <= 30
                  ? appointment.Description
                  : appointment.Description.slice(0, 30) + "..."
                : "----"}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default ListAppointment;
