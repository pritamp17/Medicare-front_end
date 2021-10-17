const express = require('express');
const bodyParser = require('body-parser')
const cors  = require("cors") ;

///app configs
const app = express();
const port = process.env.PORT || 9000


/// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.listen(port,()=>console.log(` listening on localhost:${port}`))
