const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoClient = require("mongoose");
const Doctor = require("./Models/DoctorSchema");
const Patient = require("./Models/PatientSchema");

//for hashing password
const bcrypt = require("bcrypt");

//for verification mail
const mailer = require("./misc/mailer");

require("dotenv").config();

///app configs
const app = express();
const port = process.env.PORT || 9000;

///////// db  connectionn configs
const connection_url = process.env.MONGO_URL;

const conn = mongoClient.createConnection(connection_url, {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
});

mongoClient.connect(
  connection_url,
  {
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
conn.once("open", () => {
  console.log("DB connected");
});

const db = mongoClient.connection;
db.once("open", () => {
  console.log("DB connected");
});

/// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// /////////////////// API Routes

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/signup/doctor", async (req, res) => {
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


app.post("/signup/patient", async (req, res) => {
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
                      Login as a Doctor on the following page:
                      <a href="http://localhost:9000/login/patient">http://localhost:5000/login/patient</a>
                      <br/> <br/>
		                  `;

        mailer.sendEmail("medicare2019ee@gmail.com", req.body.email, "Please verify your email", html);
        res.status(201).send(data);
      }
    });
  }
});

app.listen(port, () => console.log(` listening on localhost:${port}`));
