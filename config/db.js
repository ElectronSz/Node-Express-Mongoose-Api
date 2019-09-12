const Mongoose = require("mongoose");

let DB_URL="mongodb://165.22.221.50/Api"
Mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true  });

var db = Mongoose.connection;

module.exports = db