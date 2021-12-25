const express = require("express");
const doctor = express.Router();
const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");
const Appoint = require("../Models/AppointmentSchema");
const mongoose = require("mongoose");

doctor.get("/:id", (req, res) => {
  var ObjectId = mongoose.Types.ObjectId;
  Doctor.findById(new ObjectId(req.params.id), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = doctor;
