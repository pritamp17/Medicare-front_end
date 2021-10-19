import { Schema, model } from "mongoose";

const review = new Schema(
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

export default model("Review", review);
