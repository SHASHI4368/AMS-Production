const {
  getStudents,
  addStudent,
  addTempUser,
  getAllTempUsers,
  getTempUserByID,
  deleteTempUser,
  updateVerificationCode,
  deleteStudent
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

module.exports = dbRouter;

// const sql = `create table TEMP_USER(
// 	Email varchar(50) not null,
//     Verification_Code varchar(4) not null,
//     Picture_URL varchar(50),
//     Verified boolean default false,
//     primary key(Email)
// );`;

// db.run(sql, (err) => {
//  if(err){
//   console.error(err.message);
//  }else{
//   console.log('Table created.');
//  }
// });

// 	Reg_number varchar(11) not null,
//     First_name varchar(20) not null,
//     Last_name varchar(20) not null,
//     Department varchar(30) not null,
//     Email varchar(30) not null,
//     Batch int not null,
//     Picture_URL varchar(100),
//     primary key(Reg_number)

module.exports = dbRouter;