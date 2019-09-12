const Mongoose = require("mongoose");

const UserModel = Mongoose.model("user", {
    username: String,
    email: String,
    password: String,
    validated: Boolean
});

module.exports = UserModel