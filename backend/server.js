require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportStrategy = require("./passport");
const authRoute = require("./routes/auth");
const mailRouter = require("./routes/mail");
const dbRouter = require("./routes/db");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cookieSession({
   name: 'session',
   keys: ['ams'],
   maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
 cors({
  origin: 'http://localhost:3000', // <-- location of the react app were connecting to
  credentials: true,
  methods: "GET, PUT, POST, DELETE"
 })
);

app.use('/auth', authRoute);
app.use('/mail', mailRouter);
app.use('/db', dbRouter);

app.get('/db/students', (req, res) => {
  const sql = `select * from STUDENT`;
  try {
    db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(500).json(err.message);
        res.send(400).json(err.message);
      } else {
        return res.json(rows);
      }
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));