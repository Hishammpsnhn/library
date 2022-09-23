const passport = require("passport");
const Users = require("../models/userModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { Auth } = require('two-step-auth')

let mailmsg
const CheckLoginUser = async (req, res, next) => {
  try {
    if (req.user) {
      res.status(200).json(req.user)
    }
  } catch (error) {
    console.log(error)
    res.status(201).json(
      {
        message: "authentication failed"
      }
    )
  }
}

const registerUser = async (req, res) => {

  const { username, email, password, phone } = req.body;
  if (!username || !email || !password || !phone) {
    res.status(400);
    throw new Error("Please Enter all the feilds");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) throw new Error("user already existed");

  const hashedPassword = await bcrypt.hash(password, 10);
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

const forgotPasswordOtp = async (req, res) => {
  const { otp } = req.body
  if (mailmsg) {
    console.log(otp)
    console.log(mailmsg.OTP)
    if (mailmsg.OTP == otp) {
      res.status(200).json({ message:" successfully"})
    } else {
      res.status(400)
      throw new Error("Incorrect otp")
    }

  }
}


module.exports = { registerUser, CheckLoginUser, forgotPasswordEmail, forgotPasswordOtp };
