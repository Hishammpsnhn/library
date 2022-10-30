const mongoose = require("mongoose");
// const addressSchema = require('./schema')

const addressSchema = mongoose.Schema({
  address: { type: String, },
  city: { type: String, },
  pincode: { type: String, },
  phoneNo: { type: String, },
})

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String,required: true },
    password: { type: String},
    phone: { type: String },
    pic: { type: String, },
    addresses: [addressSchema], 
  },
  {
    timestamps: true,
  }
);



const Users = mongoose.model("User", userModel);
module.exports = Users;
