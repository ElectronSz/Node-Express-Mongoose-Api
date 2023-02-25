require('dotenv').config()

const Mongoose = require("mongoose");

const options = {
    keepAlive: process.env.KEEP_ALIVE,
    useNewUrlParser: process.env.NEW_URL_PARSER,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY
};
//connect to mongodb online
Mongoose.connect(process.env.MONGO_URL, options);

var db = Mongoose.connection;

//export db for global state
module.exports = db
