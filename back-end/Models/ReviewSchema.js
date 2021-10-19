const moongose = require("mongoose");
// const model = require("mongoose");

const review = new moongose.Schema(
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

export default moongose.model("Review", review);
