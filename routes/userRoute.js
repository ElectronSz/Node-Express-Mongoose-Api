var express = require('express')
var router = express.Router()
const llg = require("llg").llg

const UserModel = require('../models/user.js')


// define the home page route
// router.get('/', function (req, res) {
//     res.send([{'status': '200 Ok', 'message': "Api working fine..."}])
// })
// define the about route
router.get('/', async function (req, res) {
    try {
        var result = await UserModel.find().exec();
        llg("Users list: ", result);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }

})

router.post("/", async (req, res) => {
    try {
        var user = new UserModel(req.body);
        var result = await user.save();
        llg(result, "Added user");
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

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

router.delete("/:id", async (req, res) => {
    try {
        var result = await UserModel.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router