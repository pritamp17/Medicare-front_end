const express = require('express');
const bodyParser = require('body-parser')
const cors  = require("cors") ;
const mongoClient = require("mongoose");
const doctorSchema = require("./Models/DoctorSchema")
const patientSchema = require("./Models/PatientSchema")

require('dotenv').config()

///app configs
const app = express();
const port = process.env.PORT || 9000

///////// db  connectionn configs
const connection_url = process.env.MONGO_URL;

const conn = mongoClient.createConnection(connection_url,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
});

mongoClient.connect(connection_url,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err) => {
    if (err) { console.error(err); }
  });
conn.once("open",()=>{
    console.log("DB connected");
    });

    
const db = mongoClient.connection
db.once("open",()=>{
        console.log("DB connected");
        });


/// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// /////////////////// API Routes

app.get('/',(req,res)=>res.status(200).send('hello world'))

app.post('/signup/doctor', (req,res)=>{
    
    const dbPost = req.body

    doctorSchema.create(dbPost,(err,data)=>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.post('/signup/patient', (req,res)=>{
    
    const dbPost = req.body

    patientSchema.create(dbPost,(err,data)=>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.listen(port,()=>console.log(` listening on localhost:${port}`))



