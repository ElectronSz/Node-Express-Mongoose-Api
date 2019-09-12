const Express = require("express");
const BodyParser = require("body-parser");
const userRoutes = require('../routes/userRoute.js')

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//register routes
app.use('/v1/user',userRoutes)

module.exports = app