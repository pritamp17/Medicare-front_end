const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoClient = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const Doctor = require("./Models/DoctorSchema");
const Patient = require("./Models/PatientSchema");
var ipInfo = require("ip-info-finder");
const Grid = require('gridfs-stream');
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage');
// const upload = require("./routers/upload");

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

let gfs;
const db = mongoClient.connection;
db.once("open", () => {
  console.log("DB connected");

});

conn.once("open", () => {
  // console.log("DB connected");
  
  gfs = Grid(conn.db, mongoClient.mongo)
    gfs.collection('images') 
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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, PATCH, DELETE")
  next();
});


//////////////////// API Routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.use("/signup", require("./routers/signup"));
app.use("/login", require("./routers/login"));
// app.use("/file", upload);
// **** doctor search 

app.get("/doctors", (req, res) => {

  const ipAddres = request.connection.remoteAddress;
    // console.log(idAddress);
    ipInfo.getIPInfo(ipAddres).then(data => {
      // console.log(data);
      const zipcode = data[Object.keys(data)[Object.keys(data).length - 1]]
  })
  .catch(err => console.log(err));

  // const stripedzip = zipcode.substring(0,zipcode.length-1)
  const zip = parseInt(zipcode);

  const result = res.map((data) => {
    if(abs(data.zip - zip )< 10){
      {
        doctor: data.name;
        gender: data.gender;
        specialisation: data.specialisation;
        work_experience: data.work_experience;
        reviews: data.reviews;
      }
    }
  });

// console.log(result);
});

///// for adding images ///////////
Grid.mongo = mongoClient.mongo;

const storage = new GridFsStorage({
  url:connection_url,
  file: (req,file)=>{
      return new Promise((resolve, reject)=>{{
         const filename = `image-${Date.now()}${path.extname(file.originalname)}`
         
         const fileInfo={
             filename:filename,
             bucketName: 'images'
         }
         resolve(fileInfo)
         }
     })
  }
});

const upload = multer({ storage })

app.get('/patient/upload/:filename',(req,res)=>{
  gfs.files.findOne({filename: req.query.name},(err, file)=>{
      if (err) {
          res.status(500).send(err)
      } else {
          if (!file || file.length ===0 ) {
              res.status(404).json({err:'file not found'})
          } else {
              const readstream = gfs.createReadStream(file.filename);
              readstream.pipe(res);
          }
          
      }
  })
})

app.post('/doctor/upload',upload.single('file'), (req,res)=>{
  const imgUrl = `http://localhost:9000/file/${req.file.filename}`;
  return res.send(imgUrl);
  // res.send(req.file)
})

app.post('/patient/upload',upload.single('file'), (req,res)=>{
  const imgUrl = `http://localhost:9000/file/${req.file.filename}`;
  return res.send(imgUrl);
  // res.send(req.file)
})

// app.get("/file/:filename", async (req, res) => {
//   try {
//       const file = await gfs.files.findOne({ filename: req.params.filename });
//       const readStream = gfs.createReadStream(file.filename);
//       readStream.pipe(res);
//   } catch (error) {
//       res.send("not found");
//   }
// });


//////////

app.listen(port, () => console.log(` listening on localhost:${port}`));
