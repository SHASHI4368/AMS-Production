import React, { useEffect, useState } from "react";
import "../styles/calendar.css";
import axios from "axios";
import {
  Inject,
  ScheduleComponent,
  ButtonComponent,
  Day,
  Week,
  Month,
  Agenda,
  ViewsDirective,
  ViewDirective,
  TimelineViews,
  TimelineMonth,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { L10n } from "@syncfusion/ej2-base";

L10n.load({
  "en-US": {
    schedule: {
      saveButton: "Add",
      cancelButton: "Close",
      deleteButton: "Remove",
      newEvent: "Add Event",
    },
  },
});

const getColor = (status) => {
  switch (status) {
    case "New":
      return "#FFD700";
    case "Blocked":
      return "#FF6347";
    case "Confirmed":
      return "#32CD32";
    case "Unable":
      return "#87CEFA";
    default:
      return "#FFD700";
  }
};

const eventTemplate = (e) => {
  return (
    <div
      className="template-wrap"
      style={{ background: getColor(e.EventType) }}
    >
      {e.Subject}
    </div>
  );
};

const StudentCalendar = () => {
  const [selectedStaff, setSelectedStaff] = useState(
    JSON.parse(sessionStorage.getItem("selectedStaff"))
  );

  const [appointments, setAppointments] = useState({
    dataSource: [],
    fields: {
      subject: { default: "No title is provided" },
    },
  });

  const [selectedAptId, setSelectedAptId] = useState(0);

  const getDepName = () => {
    const dep = JSON.parse(sessionStorage.getItem("department"));
    switch (dep) {
      case "DCEE":
        return "Department of Civil and Environmental Engineering";
      case "DEIE":
        return "Department of Electrical and Information Engineering";
      case "DMME":
        return "Department of Mechanical and Manufacturing Engineering";
      case "MENA":
        return "Department of Metallurgical and Materials Engineering";
      case "Computer":
        return "Department of Computer Science and Engineering";
    }
  };

  const getAllAppointments = async (Lecturer_mail) => {
    try {
      const url = `http://localhost:8080/db/appointments/${Lecturer_mail}`;
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAppointments(selectedStaff.Email);
        setAppointments({
          dataSource: data.map((item) => ({
            Id: item.Id,
            Subject: item.Subject || "No title is provided",
            EventType: item.Apt_status,
            StartTime: new Date(item.StartTime),
            EndTime: new Date(item.EndTime),
            Description: item.Description,
            IsBlock:
              item.Student_reg ===
              JSON.parse(sessionStorage.getItem("regNumber"))
                ? false
                : true,
          })),
          fields: {
            subject: { default: "No title is provided" },
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const onDragStart = (e) => {
    e.interval = 10;
    setSelectedAptId(e.data.Id);
  };

  const onDragStop = (e) => {
    updateAppointment(
      e.data.Subject,
      e.data.Description,
      e.data.StartTime,
      e.data.EndTime,
      e.data.EventType,
      selectedAptId
    );
  };

  const onResizeStart = (e) => {
    e.interval = 10;
    setSelectedAptId(e.data.Id);
  };

  const onResizeStop = (e) => {
    updateAppointment(
      e.data.Subject,
      e.data.Description,
      e.data.StartTime,
      e.data.EndTime,
      e.data.EventType,
      selectedAptId
    );
  };

  const ediitorWindowTemplate = (e) => {
    return (
      <table className="custom-event-editor" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="e-textlabel">Summary</td>
            <td>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Status</td>
            <td>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                dataSource={["New", "Unable"]}
                value="New"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td>
              <DateTimePickerComponent
                id="StartTime"
                data-name="StartTime"
                value={new Date(e.StartTime || e.startTime)}
                format={"dd/MM/yy hh:mm a"}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td>
              <DateTimePickerComponent
                id="EndTime"
                data-name="EndTime"
                value={new Date(e.EndTime || e.endTime)}
                format={"dd/MM/yy hh:mm a"}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{ width: "100%", height: "60px" }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const addAppointment = async (
    Id,
    Lecturer_mail,
    Student_reg,
    Subject,
    Description,
    StartTime,
    EndTime,
    Apt_status
  ) => {
    try {
      const url = `http://localhost:8080/db/appointment/add`;
      const response = await axios.post(url, {
        Id,
        Lecturer_mail,
        Student_reg,
        Subject,
        Description,
        StartTime,
        EndTime,
        Apt_status,
      });
      console.log(response.data);
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

  const getLastAppointment = async (Lecturer_mail) => {
    try {
      const url = `http://localhost:8080/db/appointment/last`;
      const response = await axios.get(url);
      console.log(response.data);
      if (response.data.length === 0) {
        return 1;
      } else {
        return response.data[0].Id;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateAppointment = async (
    Subject,
    Description,
    StartTime,
    EndTime,
    Apt_status
  ) => {
    try {
      const url = `http://localhost:8080/db/appointment`;
      const response = await axios.put(url, {
        Id: selectedAptId,
        Subject,
        Description,
        StartTime,
        EndTime,
        Apt_status,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onPopupClose = async (e) => {
    console.log(e.type);
    console.log(e.data);
    if (e.data != null) {
      if (e.type === "DeleteAlert") {
        deleteAppointment(selectedAptId);
      } else if (
        e.data.Subject !== "No title is provided" &&
        selectedAptId === undefined
      ) {
        const lastId = await getLastAppointment(selectedStaff.Email);
        console.log(lastId);
        addAppointment(
          lastId + 1,
          selectedStaff.Email,
          JSON.parse(sessionStorage.getItem("regNumber")),
          e.data.Subject,
          e.data.Description,
          e.data.StartTime,
          e.data.EndTime,
          e.data.EventType
        );
      } else if (
        e.data !== null &&
        selectedAptId !== undefined &&
        e.type === "Editor"
      ) {
        updateAppointment(
          e.data.Subject,
          e.data.Description,
          e.data.StartTime,
          e.data.EndTime,
          e.data.EventType,
          selectedAptId
        );
      }
    } else {
      console.log(true);
    }
  };

  const onPopupOpen = (e) => {
    setSelectedAptId(e.data.Id);
  };

  const deleteAppointment = async (Id) => {
    try {
      const url = `http://localhost:8080/db/appointment/${Id}`;
      const response = await axios.delete(url);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="description">
        <div className="dep-name">
          <p className="abbr-name">
            {JSON.parse(sessionStorage.getItem("department")) === "Computer"
              ? "COM"
              : JSON.parse(sessionStorage.getItem("department"))}
          </p>
          <p className="long-name">{getDepName()}</p>
        </div>
        <div className="staff-detail">
          <img src={selectedStaff.Picture_URL} alt="" className="staff-img" />
          <div className="details">
            <p className="staff-name">{`${selectedStaff.First_name} ${selectedStaff.Last_name}`}</p>
            <p className="staff-email">{selectedStaff.Email}</p>
          </div>
        </div>
      </div>
      <div className="calendar">
        <ScheduleComponent
          currentView="Month"
          eventSettings={{
            dataSource: appointments.dataSource,
            fields: appointments.fields,
            template: eventTemplate,
          }}
          dragStart={onDragStart}
          dragStop={onDragStop}
          resizeStart={onResizeStart}
          resizeStop={onResizeStop}
          editorTemplate={ediitorWindowTemplate}
          popupClose={onPopupClose}
          popupOpen={onPopupOpen}
        >
          <ViewsDirective>
            <ViewDirective
              option="Day"
              startHour="08:00"
              endHour="16:00"
              interval={3}
              displayName="3 Days"
            />
            <ViewDirective option="Week" />
          </ViewsDirective>
          <Inject
            services={[
              Day,
              Week,
              Month,
              Agenda,
              TimelineMonth,
              TimelineViews,
              DragAndDrop,
              Resize,
            ]}
          />
        </ScheduleComponent>
      </div>
    </main>
  );
};

export default StudentCalendar;
