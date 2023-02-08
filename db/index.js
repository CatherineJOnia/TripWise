const db = require("./db");
const User = require("./models/User");
const Trip = require("./models/Trip");
const Task = require("./models/Task");
const User_Task = require("./models/User_Task");
const User_Trip = require("./models/User_Trip");

//Associations
User.belongsToMany(Trip, { through: User_Trip });
Trip.belongsToMany(User, { through: User_Trip });

Trip.hasMany(Task);
Task.belongsTo(Trip);

User.belongsToMany(Task, { through: User_Task });
Task.belongsToMany(User, { through: User_Task });

module.exports = {
  db,
  models: {
    User,
    Trip,
    Task,
    User_Task,
    User_Trip,
  },
};
