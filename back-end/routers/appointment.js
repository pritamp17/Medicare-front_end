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

appoint.post("/save/:id", async (req, res) => {
  const app = await Appointment.findOne({ _id: req.params.id });
  const body = req.body;
  app.symptoms = body.symptoms;
  app.disease = body.disease;
  app.prescription = body.prescription;
  app.status = "completed";
  await app.save();
});

appoint.post("/fetch", (req, res) => {
  console.log(req.body);
  Appointment.find({ _id: { $in: req.body } })
    .sort({ date: 1 })
    .exec((err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.status(200).send(docs);
      }
    });
});

appoint.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const obj = await Appointment.findOne({ _id: id });
    res.status(200).send(obj);
  } catch (err) {
    console.log(err);
  }
});
module.exports = appoint;
