const mongoose = require("mongoose");
const reviewSchema = require("./review");

const userModel = mongoose.Schema(
  {
    bookname: { type: String,required: true},
    image: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    launch: { type: String, required: true },
    price: { type: Number, required: true, default: 0, min: 0 },
    catagory: { type: String, required: true },
    discount: { type: Number, required: true, default: 0, min: 0, max: 100 },
    countInStock: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0, min: 0, },
    numReviews: { type: Number,required: true, default: 0,},
  },
  {
    timestamps: true,
  }
);

const productModal = mongoose.model("products", userModel);
module.exports = productModal;
