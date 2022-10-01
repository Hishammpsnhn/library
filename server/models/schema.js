const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    phoneNo: { type: Number, required: true },
})
module.exports = {addressSchema}