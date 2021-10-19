const mongoose = require("mongoose");


const patient = new mongoose.Schema(
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
    age: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    profile_pic: {
      type: String,
    },
    doctors_attended: [
      {
        type: String,
      },
    ],
    test_reports: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patient);
