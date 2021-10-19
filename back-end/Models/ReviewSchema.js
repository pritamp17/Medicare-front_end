const mongoose = require("mongoose");
// const model = require("mongoose");

const review = new mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", review);
