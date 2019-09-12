const Mongoose = require("mongoose");

//create user model
const UserModel = Mongoose.model("users", {
    username: String,
    email: String,
    password: String
});

// export user model
module.exports = UserModel