const express = require("express");
const index = express.Router();
const Doctor = require("../Models/DoctorSchema");

index.post("/logout", (req, res) => {
	req.logout();
	return res.status(200);
});
index.get("/users", (req, res, next) => {
  const searchField = req.query.name;
  // console.log(searchField);
  Doctor.find({ name: { $regex: searchField, $options: "$i" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = index;
