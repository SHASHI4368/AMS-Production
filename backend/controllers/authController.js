const jwt = require("jsonwebtoken");
require("dotenv").config();
const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./ams.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
  }
});

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  
};
