const mongo = require('mongoose');

require('./Models/DoctorSchema');
require('./Models/PatientSchema');
require('../dotenv').config()
exports.connect = () =>{
    mongo.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }, (err) => {
        if (err) { console.error(err); }
        else {
          console.log('Connected to DB!');
        }
      })
}

