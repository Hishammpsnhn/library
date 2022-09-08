const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String},
    phone: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);



const Users = mongoose.model("User", userModel);
module.exports = Users;
