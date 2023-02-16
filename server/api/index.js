const router = require("express").Router();

router.use("/users", require("./userRoute"));
router.use("/userTrips", require("./userTripsRoute"));

router.use("/tasks", require("./taskRoute"));

router.use("/mail", require("./mailRoute"));
router.use("/mail2", require("./confirmationEmail"));

router.use("/trips", require("./tripRoute"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
