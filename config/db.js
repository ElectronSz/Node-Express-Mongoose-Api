const Mongoose = require("mongoose");


Mongoose.connect("mongodb://165.22.221.50/Api",{ useNewUrlParser: true, useUnifiedTopology: true  });

var db = Mongoose.connection;

module.exports = db