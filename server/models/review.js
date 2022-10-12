const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    // name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
  })

  module.export = {reviewSchema}