const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  beer: { type: mongoose.Types.ObjectId, ref: "Beer" },
  username: {
    type: String,

    maxLength: 64,
    default: "Anonymous",
  },
  body: { type: String, required: true, maxLength: 240, minLength: 144 },
  createdAt: { type: Date, default: Date.now() },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
