const express = require("express");
const bcrypt = require("bcrypt");
const signup = express.Router();
const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");
const mailer = require("../misc/mailer");

signup.post("/doctor", async (req, res) => {
  const dbPost = req.body;
  console.log(req.body);

  //Check if email exists
  const doc = await Doctor.findOne({ email: req.body.email });

  if (doc) {
    res.status(404).send("Email exists");
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    dbPost.password = hashedPassword;

    Doctor.create(dbPost, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const link = "http://localhost:9000/signup/doctor/verify/" + hashedPassword;
        const html =
          `Hi there
                      <br/> Welcome to Medicare, we are very happy to invite you to our enlarged family.
                      <br/> Hope you enjoy the services available and help us to improve more.
                      <br/> This is just a verification procedure to verify your email. To verify,
                      <br/>
                      <a href=` +
          link +
          `>Click here to verify</a>`;

        mailer.sendEmail("medicare2019ee@gmail.com", req.body.email, "Please verify your email", html);
        res.status(201).send(data);
      }
    });
  }
});

signup.post("/patient", async (req, res) => {
  const dbPost = req.body;
  console.log(req.body);

  //Check if email exists
  const pat = await Patient.findOne({ email: req.body.email });

  if (pat) {
    res.status(404).send("Email exists");
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    dbPost.password = hashedPassword;

    Patient.create(dbPost, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const link = "http://localhost:9000/signup/patient/verify/" + hashedPassword;
        const html =
          `Hi there
                      <br/> Welcome to Medicare, we are very happy to invite you to our enlarged family.
                      <br/> Hope you enjoy the services available and help us to improve more.
                      <br/> This is just a verification procedure to verify your email. To verify,
                      <br/>
                      <a href=` +
          link +
          `>Click here to verify</a>`;

        mailer.sendEmail("medicare2019ee@gmail.com", req.body.email, "Please verify your email", html);
        res.status(201).send(data);
      }
    });
  }
});

signup.put("/patient/verify/:id", async (req, res) => {
  const id = req.params.id;
  const pat = await Patient.findOne({ password: id });
  if (pat) {
    pat.isVerified = true;
    pat.save();
    res.status(200).send("Verified");
  } else {
    res.status(404).send("Not found");
  }
});

signup.put("/doctor/verify/:id", async (req, res) => {
  const id = req.params.id;
  const doc = await Doctor.findOne({ password: id });
  if (doc) {
    doc.isVerified = true;
    doc.save();
    res.status(200).send("Verified");
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = signup;
