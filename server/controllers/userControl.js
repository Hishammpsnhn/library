const passport = require("passport");
const Users = require("../models/userModel");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");


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

const loginUser = (req,res)=>{
  try {
    res.status(200).json(req.user)
  } catch (error) {
   console.log(error); 
  }
}


module.exports = { registerUser,loginUser };
