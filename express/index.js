const Express = require("express");
const BodyParser = require("body-parser");
const userRoutes = require('../routes/userRoute.js')

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//register user routes
app.use('/v1/user',userRoutes)

//export entire app
module.exports = app