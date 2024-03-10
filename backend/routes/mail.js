const mailRouter = require("express").Router();
const {sendMail, sendVerificationMail, sendAppointmentAddedMail} = require('../controllers/mailController');

mailRouter.post('/send', sendMail);
mailRouter.post('/student/verify', sendVerificationMail);
mailRouter.post('/student/request/appointment', sendAppointmentAddedMail);

module.exports = mailRouter;