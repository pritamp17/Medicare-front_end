const mongoose = require("mongoose");
const Review = require("./ReviewSchema");

const doctor = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    mobile: {
      type: String,
    },
    specialisation: {
      type: String,
    },
    work_experience: {
      type: String,
    },
    proof_of_experience: {
      type: String,
    },
    profile_pic: {
      type: String,
    },
    intro: {
      type: String
    },
    reviews: [{ type: String }],
    appointments: [{type: String}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctor);
