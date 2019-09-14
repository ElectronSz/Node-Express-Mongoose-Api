require('dotenv').config()

const Mongoose = require("mongoose");

const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    keepAlive: process.env.KEEP_ALIVE,
    keepAliveInitialDelay: process.env.KEEP_ALIVE_DELAY,
    useNewUrlParser: process.env.NEW_URL_PARSER,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY
};
//connect to mongodb online
Mongoose.connect(process.env.DB_URL_REMOTE,options);

var db = Mongoose.connection;

//export db for global state
module.exports = db