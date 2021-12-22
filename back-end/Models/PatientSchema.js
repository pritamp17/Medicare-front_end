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
    test_id: [{ type: String }],
    appointments: [{ type: String }],
    Address: {
      type: String,
    },
    Address1: {
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
    blood_group: {
      type: String,
    },
    height: {
      type: String,
    },
    weight: { type: Number },
    test_reports: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patient);
