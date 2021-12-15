const Schema = require("mongoose");
const model = require("mongoose");
const Review = require("./ReviewSchema")

const doctor = new Schema(
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
    street: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    zip:{
      type: Number,
    },
    mobile: {
      type: Number,
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
    patient_treated: [{
      type: String,
    }],
    reviews: [Review.Schema],
  },
  { timestamps: true }
);

export default model("Doctor", doctor);
