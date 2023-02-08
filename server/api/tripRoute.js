const router = require("express").Router();
const { User, Trip } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allTrips = await Trip.findAll();
    res.json(allTrips);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const room = await Trip.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    res.json(room);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.json(newTrip);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const destroyed = await Trip.destroy({
      where: { id: req.params.id },
    });
    res.json(destroyed);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const trip = await Trip.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (trip) {
      let updatedTrip = await trip.update(req.body);
      res.json(updatedTrip);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
