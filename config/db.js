require('dotenv').config()

const Mongoose = require("mongoose");

Mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true  });

var db = Mongoose.connection;

module.exports = db