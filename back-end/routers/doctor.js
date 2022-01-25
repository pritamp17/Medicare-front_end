const express = require("express");
const doctor = express.Router();
const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");
const mongoose = require("mongoose");

doctor.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Doctor.findOne({ _id: id });
    res.send(doc);
  } catch (err) {
    console.log(err);
  }
});

doctor.post("/update", async (req, res) => {
  const dbPost = req.body;
  let doc = await Doctor.findOne({ email: dbPost.email });
  doc.intro = dbPost.intro;
  doc.mobile = dbPost.mobile;
  doc.address = dbPost.address;
  doc.city = dbPost.city;
  doc.state = dbPost.state;
  doc.zip = dbPost.zip;
  doc.profile_pic = dbPost.profile_pic;
  await doc.save();
  res.status(200).send(doc);
});

module.exports = doctor;
