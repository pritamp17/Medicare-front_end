const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoClient = require("mongoose");
const session = require("express-session");
const passport = require("passport");

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
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false, cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } }));
const passportInit = require("./config/passport");
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////// API Routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/signup", require("./routers/signup"));
app.use("/login", require("./routers/login"));

app.listen(port, () => console.log(` listening on localhost:${port}`));
