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
        const html = `Hi there
                      <br/> Welcome to Medicare, we are very happy to invite you to our enlarged family.
                      <br/> Hope you enjoy the services available and help us to improve more.
                      <br/> This is just a verification procedure to verify your email. To verify,
                      <br/>
                      Login as a Doctor on the following page:
                      <a href="http://localhost:9000/login/doctor">http://localhost:5000/login/doctor</a>
                      <br/> <br/>
		                  `;

        mailer.sendEmail("medicare2019ee@gmail.com", req.body.email, "Please verify your email", html);
        res.status(201).send(data);
      }
    });
  }
});

//////////////////// adding new doctor and patient  
signup.post("/doctor/new", async (req, res) => {
  const newDoc = req.body;

    Doctor.create(newDoc, (err, data) =>{
        if(err){
            res.sendStatus(500).send(err)
        }else{
            res.send(data)
        }
    }) 
});

signup.post("/patient/new", async (req, res) => {
  const newPat = req.body;

  Patient.create(newPat, (err, data) =>{
        if(err){
            res.sendStatus(500).send(err)
        }else{
            res.send(data)
        }
    }) 
});

//////////////////

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
        const html = `Hi there
                      <br/> Welcome to Medicare, we are very happy to invite you to our enlarged family.
                      <br/> Hope you enjoy the services available and help us to improve more.
                      <br/> This is just a verification procedure to verify your email. To verify,
                      <br/>
                      Login as a Patient on the following page:
                      <a href="http://localhost:9000/login/patient">http://localhost:5000/login/patient</a>
                      <br/> <br/>
		                  `;

        mailer.sendEmail("medicare2019ee@gmail.com", req.body.email, "Please verify your email", html);
        res.status(201).send(data);
      }
    });
  }
});

module.exports = signup;