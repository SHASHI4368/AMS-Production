const mailRouter = require("express").Router();
const {sendMail, sendVerificationMail} = require('../controllers/mailController');

mailRouter.post('/send', sendMail);
mailRouter.post('/student/verify', sendVerificationMail)

module.exports = mailRouter;