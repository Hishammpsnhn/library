const mongoose = require("mongoose");
const addressSchema = require('./schema')

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String,required: true },
    password: { type: String},
    phone: { type: String },
    pic: { type: String, },

    addresses: [{
      address: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true },
      phoneNo: { type: Number, required: true },
    }],
 
  },
  {
    timestamps: true,
  }
);



const Users = mongoose.model("User", userModel);
module.exports = Users;
