const express = require("express");
const passport = require("passport");
const login = express.Router();

const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");

login.post("/doctor", (req, res, next) => {
  passport.authenticate("doctor", { failureRedirect: "/login", failureFlash: "Invalid username or password.", successFlash: true }, async (err, user, info) => {
    try {
      console.log(req.body);
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(200).send("User is not correct");;
      }
      const doctor = await Doctor.findOne({ email: user.email });
      if (doctor) {
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          console.log(doctor);
          res.status(200).send(doctor);
        });
      } else {
        return res.send("Not a doctor");
      }
    } catch (err) {
      return res.send(err);
    }
  })(req, res, next);
});

login.post("/patient", (req, res, next) => {
  passport.authenticate(
    "patient",
    { failureRedirect: "/login", failureFlash: "Invalid username or password.", successFlash: true },
    async (err, user, info) => {
      try {
        console.log(req.body);
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.redirect("/login");
        }
        const patient = await Patient.findOne({ email: user.email });
        if (patient) {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            console.log(patient);
            console.log(req.user);
            res.send(patient);
          });
        } else {
          return res.send("Not a patient");
        }
      } catch (err) {
        return res.send(err);
      }
    }
  )(req, res, next);
});

module.exports = login;
