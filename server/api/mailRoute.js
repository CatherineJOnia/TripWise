const mailRouter = require("express").Router();
const nodemailer = require("nodemailer");
const { requireToken } = require("./gatekeepingmiddleware");

mailRouter.post("/text-mail", requireToken, (req, res) => {
  console.log("in mail post route");

  const htmlToSend = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Invitation to TripWise</title>
  </head>
  <body>
    <div>
      <p>Hello there, </p>
      <p>${req.body.referralEmail} has invited you to join TripWise! </p>
      <p>Upon sign up, add the email of the person who invited you to the referral email input field.</p>
      <p>Navigate to the link to get started https://TripWise.onrender.com/signup</p>
      <p>Thanks,</p>
      <p>TripWise team ✈️ </p>
    </div>
  </body>
  </html>`;

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
    to: `${req.body.recipient}`,
    subject: "You have been invited to join TripWise!",
    text: "",
    html: htmlToSend,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = mailRouter;
