const passport = require("passport");
const Users = require("../models/userModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const initializePassport = require("../config/passportConfig");

initializePassport(passport, (email) => {
  Users.find((user) => user.email === email);
});

const registerUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    res.status(400);
    throw new Error("Please Enter all the feilds");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) throw new Error("user already existed");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await Users.create({
    name,
    phone,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } else {
    res.status(400);
    throw new Error("failed to create user");
  }
};

const loginUser = passport.authenticate('local',{
  successMessage: 'User created successfully',
  failureMessage: 'User creation failed',
  failureFlash: true
})
module.exports = { registerUser, loginUser };
