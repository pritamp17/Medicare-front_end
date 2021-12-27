const mongoose = require("mongoose");

const appointment = new mongoose.Schema(
  {
    patient_id: { type: String },
    doctor_id: { type: String },
    doctor_name: { type: String },
    patient_name: { type: String },
    time: { type: String },
    date: { type: String },
    status: { type: String, default: "pending" },
    symptoms: { type: String },
    disease: { type: String },
    prescription: { type: String },
    test_id: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointment);
