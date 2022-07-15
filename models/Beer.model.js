const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const beerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 64,
    minLength: 1,
  },
  type: {
    type: String,
    enum: ["Pilsen", "Ipa", "Apa", "Stout", "Ale", "Weiss", "Outros"],
    required: true,
  },
  ibu: { type: Number, min: 0, max: 500, default: 12 },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const BeerModel = model("Beer", beerSchema);

module.exports = BeerModel;
