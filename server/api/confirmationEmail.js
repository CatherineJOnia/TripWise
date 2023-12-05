const mailRouter2 = require("express").Router();
const nodemailer = require("nodemailer");
const { requireToken } = require("./gatekeepingmiddleware");

mailRouter2.post(
  "/sendEmailToPersonWhoReferred",
  requireToken,
  async (req, res) => {
    var transporter = nodemailer.createTransport({
      port: 465,
      service: "gmail",
      auth: {
        user: "TripWise@gmail.com",
        pass: process.env.APP_PASS,
      },
    });

    var mailOptions = {
      from: "TripWise@gmail.com",
      to: `${req.body.doTheyHaveReferralEmail}`,
      subject: `The person you invited: ${req.body.firstName} joined TripWise!`,
      text: `Hello there, the person you invited has joined TripWise. ✈️ Navigate to the link to continue planning your trip! https://TripWise.onrender.com/login Thanks, TripWise team`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
);

module.exports = mailRouter2;
