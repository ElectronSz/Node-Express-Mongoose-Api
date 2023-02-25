require('dotenv').config();

const Mongoose = require("mongoose");

const options = {
    keepAlive: process.env.KEEP_ALIVE,
    useNewUrlParser: process.env.NEW_URL_PARSER,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY
};
//connect to mongodb online
Mongoose.connect("mongodb+srv://api:Dlaminilqn2@api-rib0y.gcp.mongodb.net/Api?retryWrites=true&w=majority", options);

var db = Mongoose.connection;

//export db for global state
module.exports = db;
