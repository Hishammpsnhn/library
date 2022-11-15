const passport = require("passport");
const Users = require("../models/userModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { Auth } = require('two-step-auth')

// @desc  get sciFi catagory books
// @route  get /api/product/scibooks
// @access Private
let mailmsg

const CheckLoginUser = async (req, res, next) => {
  console.log("cll check login")
  console.log(req.user)
    if (req.user) {
      res.status(200).json(req.user)
    }
  }

const registerUser = async (req, res) => {
  console.log("register callled")
  const { username, email, password, phone } = req.body;
  if (!username || !email || !password || !phone) {
    res.status(400);
    throw new Error("Please Enter all the feilds");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) throw new Error("user already existed");

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("helokk")

  const user = await Users.create({
    name: username,
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

// @desc  logout the user
// @route  get /api/auth/logout
// @access Private
const logout = async (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      throw new Error("failed to destroy user in session");
    }
    res.json({ message: "succssully logged out" })
  })
}

// @desc   forgotPasswordEmail
// @route  get /api/auth/forgot-password/email
// @access Private
const forgotPasswordEmail = async (req, res) => {
  const { email } = req.body
  if (!req.user) {
    const user = await Users.findOne({ email })
    if (!user) {
      res.status(400)
      throw new Error("user not found")
    }
    try {
      const mail = await Auth(user.email, "Library");
      mailmsg = mail
      console.log(mail);
      console.log(mail.mail);
      console.log(mail.OTP);
      console.log(mail.success);
      res.status(200).json({ message: "successfully otp sended" })
    } catch (error) {
      console.log(error)
    }
  }
}

// @desc   forgotPasswordOtp
// @route  get /api/auth/forgot-password/otp
// @access Private
const forgotPasswordOtp = async (req, res) => {
  const { otp } = req.body
  if (mailmsg) {
    console.log(otp)
    console.log(mailmsg.OTP)
    if (mailmsg.OTP == otp) {
      res.status(200).json({ message: " successfully" })
    } else {
      res.status(400)
      throw new Error("Incorrect otp")
    }
  }
}


// @desc   add address in the user
// @route  get /api/auth//user-address
// @access Private
const addAdress = async (req, res) => {
  console.log(req.body)
  const user = await userModel.findById(req.user._id)
  user.addresses.push({ ...req.body })
  const updatedUser = await user.save()
  console.log(updatedUser)
  res.json(updatedUser)
}

// @desc   delete the address from the user
// @route  get /api/auth/:id/addressdelete
// @access Private
const addressDelete = async (req, res) => {
  const user = await userModel.findById(req.user._id)
  if (user) {
    if (req.params.id) {
      user.addresses.splice(req.params.id, 1)
    }
    const updatedUser = await user.save()
    console.log(updatedUser)
    res.json(updatedUser)
  }
}


module.exports = { registerUser, CheckLoginUser, forgotPasswordEmail, forgotPasswordOtp, addAdress, logout, addressDelete };
