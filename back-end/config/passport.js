const LocalStrategy = require("passport-local").Strategy;
const Doctor = require("../Models/DoctorSchema");
const Patient = require("../Models/PatientSchema");
const bcrypt = require("bcrypt");

//passport local strategy
const init = (passport) => {
  //strategy for doctor login
  passport.use(
    "doctor",
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      Doctor.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        if (!user.isVerified) {
          return done(null, false, { message: "Email not verified" });
        }
        try {
          //comparing the password
          bcrypt.compare(password, user.password).then((match) => {
            if (match) {
              return done(null, user, { message: "Logged in success" });
            } else return done(null, false, { message: "Wrong Password" });
          });
        } catch (err) {
          //error
          return done(null, false, { message: "Something went wrong" });
        }
        return done(null, user);
      });
    })
  );

  //strategy for patient login
  passport.use(
    "patient",
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      Patient.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        if (!user.isVerified) {
          return done(null, false, { message: "Email not verified" });
        }
        try {
          //comparing the password
          bcrypt.compare(password, user.password).then((match) => {
            if (match) {
              return done(null, user, { message: "Logged in success" });
            } else return done(null, false, { message: "Wrong Password" });
          });
        } catch (err) {
          //error
          return done(null, false, { message: "Something went wrong" });
        }
        return done(null, user);
      });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
module.exports = init;
