const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const SALT_ROUNDS = 5;

const User = db.define("User", {});
 username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU",
  },
//Instance Methods
User.prototype.correctPassword = function (candidatePwd) {
  //Comparing the plain password to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

//Class Methods
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  const token = await user.generateToken();
  await user.update({ token: token });
  return token;
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

//Hooks
const hashPassword = async (user) => {
  //In case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User;
