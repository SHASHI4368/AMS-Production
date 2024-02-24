const {
  getStudents,
  addStudent,
  addTempUser,
  getAllTempUsers,
  getTempUserByID,
  deleteTempUser,
  updateVerificationCode,
  deleteStudent,
  getStaffList,
  addStaff,
} = require("../controllers/dbController");
const dbRouter = require('express').Router();
// const sqlite = require("sqlite3").verbose();

// const db = new sqlite.Database("./ams.db", sqlite.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("Connected to the database.");
//   }
// });

dbRouter.get('/students', getStudents);
dbRouter.post('/students', addStudent);
dbRouter.delete('/students/', deleteStudent);
dbRouter.post('/tempUser', addTempUser);
dbRouter.get('/tempUsers', getAllTempUsers);
dbRouter.get('/tempUser/:Email', getTempUserByID);
dbRouter.delete('/tempUser/:Email', deleteTempUser);
dbRouter.put('/tempUser', updateVerificationCode);
dbRouter.get('/staffList', getStaffList);
dbRouter.post('/staff', addStaff);

module.exports = dbRouter;

// const sql = `alter table STUDENT add column Password varchar(20) not null;`;

// const sql = `

// create table STUDENT(
// 	Reg_number varchar(11) not null,
//     First_name varchar(20) not null,
//     Last_name varchar(20) not null,
//     Department varchar(30) not null,
//     Email varchar(30) not null,
//     Batch int not null,
//     Picture_URL varchar(100),
//     primary key(Reg_number)
// );

// const sql = `
// create table LECTURER(
// 	Email varchar(50) not null,
//     First_name varchar(20) not null,
//     Last_name varchar(20) not null,
//     Department varchar(30) not null,
//     Picture_URL varchar(100),
//     Password varchar(30) not null,
//     primary key(Email)
// );
//

// create table TEMP_USER(
// 	Email varchar(50) not null,
//     Verification_Code varchar(4) not null,
//     Picture_URL varchar(100),
//     First_Name varchar(50),
//     Last_Name varchar(50),
//     Verified boolean default false,
//     primary key(Email)
// );

// create table TIME_TABLE(
// 	TT_ID int not null,
//     Lecturer_Mail varchar(50) not null,
//     primary key (TT_ID),
//     foreign key(Lecturer_Mail) references LECTURER(Email)
// );

// create table MONTH(
// 	M_ID int not null,
//     MName varchar(15) not null,
//     Time_table_ID int not null,
//     MStatus varchar(20) default "Free",
//     primary key (M_ID),
//     foreign key(Time_table_ID) references TIME_TABLE(TT_ID)
// );

// create table DAY(
// 	D_ID int not null,
//     DName varchar(15) not null,
//     Month_ID int not null,
//     DStatus varchar(20) default "Free",
//     Date int not null,
//     primary key (D_ID),
//     foreign key(Month_ID) references MONTH(M_ID)
// );

// create table HOUR(
// 	H_ID int not null,
//     Start_time time not null,
//     End_time time not null,
//     Day_ID int not null,
//     HStatus varchar(20) default "Free",
//     primary key (H_ID),
//     foreign key(Day_ID) references DAY(D_ID)
// );

// create table APPOINTMENT(
// 	Apt_ID int not null,
//     Lecturer_mail varchar(50) not null,
//     Hour_ID int not null,
//     Student_reg varchar(11) not null,
//     Apt_status varchar(20) default "Not attended",
//     primary key (Apt_ID),
//     foreign key(Lecturer_mail) references LECTURER(Email),
//     foreign key(Hour_ID) references HOUR(H_ID),
//     foreign key(Student_reg) references STUDENT(Reg_number)
// );
// `;

// db.run(sql, (err) => {
//  if(err){
//   console.error(err.message);
//  }else{
//   console.log('Table created.');
//  }
// });


module.exports = dbRouter;