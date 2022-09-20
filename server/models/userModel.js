const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String},
    password: { type: String},
    phone: { type: String,  unique: true },
    pic: { type: String, },
    googleId: {type:Number,unique: true},
  },
  {
    timestamps: true,
  }
);



const Users = mongoose.model("User", userModel);
module.exports = Users;
