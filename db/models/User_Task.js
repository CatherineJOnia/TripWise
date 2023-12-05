const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const User_Task = db.define("user_task", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("editor", "attendee"),
  },
});

module.exports = User_Task;
