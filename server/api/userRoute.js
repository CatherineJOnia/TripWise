const router = require("express").Router();
const { User, Trip } = require("../../db");

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: Trip,
      },
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    console.log(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const destroyed = await User.destroy({ where: { id: req.params.id } });
    res.json(destroyed);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: { model: Trip },
    });
    if (user) {
      let updatedUser = await user.update(req.body);
      res.json(updatedUser);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
