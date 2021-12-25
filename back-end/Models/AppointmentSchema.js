const mongoose = require("mongoose");

const appointment = new mongoose.Schema(
  {
    patient_id: [{ type: String }],
    doctor_id: [{ type: String }],
    time: { type: String },
    date: { type: String },
    status: { type: String },
    symptoms: { type: String },
    disease: { type: String },
    prescription: { type: String },
    test_id: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointments", appointment);
