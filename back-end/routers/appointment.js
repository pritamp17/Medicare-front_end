const express = require("express");
const appoint = express.Router();
const Appointment = require("../Models/AppointmentSchema");
const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");

appoint.post("/", async (req, res) => {
  let dbPost = req.body;
  console.log(dbPost);

  const pat = await Patient.findOne({ _id: dbPost.patient_id });
  const doc = await Doctor.findOne({ _id: dbPost.doctor_id });

  dbPost = { ...dbPost, doctor_name: doc.name, patient_name: pat.name };

  Appointment.create(dbPost, async (err, data) => {
    if (err) {
      res.status(500);
    } else {
      pat.appointments.push(data._id);
      doc.appointments.push(data._id);
      await pat.save();
      await doc.save();
      res.status(200).send(pat);
    }
  });
});

appoint.post("/fetch", async (req, res) => {
  console.log(req.body);
  const obj = await Appointment.find({ _id: { $in: req.body } });
  console.log(obj);
  res.status(200).send(obj);
})

module.exports = appoint;
