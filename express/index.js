const Express = require("express");
const BodyParser = require("body-parser");
const userRoutes = require('../routes/userRoute.js')
//const authRoutes = require('../routes/authRoutes')
var cors = require('cors');
//const authenticate = require('../middleware/authenticate');

var app = Express();

app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//register user routes
app.use('/v1/user',userRoutes)
// app.use('/v1/auth', authenticate, authRoutes)

//export entire app
module.exports = app