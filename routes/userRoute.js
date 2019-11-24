var express = require('express')
var router = express.Router()
const llg = require("llg").llg

// import or require the user model
const UserModel = require('../models/user.js')

// define user home
router.get('/', async function (req, res) {
    try {
        var result = await UserModel.find().exec();
        llg("Users list: ", result);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }

})

// define user post route
router.post("/", async (req, res) => {
    try {
        var user = new UserModel(req.body);
        var result = await user.save();
        llg(result, "Added new user");
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

// define get user by id route
router.get("/:id", async (req, res) => {
    try {
        // let { id } = req.params
        var user = await UserModel.findById(req.params.id).exec();
        llg("user with id: ", user);

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// define get user by username route
router.get("/username/:data", async (req, res) => {
    try {
        let { data } = req.params
        var user = await UserModel.find().where("username").all(data).exec();
        llg("Users with username: ", user);

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// define get user by email route
router.get("/email/:data", async (req, res) => {
    try {
        let { data } = req.params
        var user = await UserModel.find().where("email").all(data).exec();
        llg("Users with email: ", user);

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// define update user by id route
router.put("/:id", async (req, res) => {
    try {
        var user = await UserModel.findById({ _id: req.params.id }).exec();
        user.set(req.body);
        var result = await user.save();

        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// define delete user by id route
router.delete("/:id", async (req, res) => {
    try {
        var result = await UserModel.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

//export user route
module.exports = router