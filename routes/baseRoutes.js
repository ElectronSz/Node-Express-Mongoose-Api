
var express = require('express')
var router = express.Router()
const { auth, db } = require('../config')


router.post('/', async function (req, res) {


    let { email, password } = req.body
    try {
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                res.send(response);
            })
            .catch(function (error) {
                res.send(error);
            });

        
    } catch (error) {
        res.status(500).send(error);
    }

})


// router.post('/', async function (req, res) {


//     let data = req.body

//     db.collection("users")
//         .add(data)
//         .then(function (response) {
//     res.send(response)
//         })
//         .catch(function (error) {
//     res.send(error)
//         });
    

// })

router.get('/', async function (req, res) {

    db.collection("users")
        .get()
        .then(function (querySnapshot) {
            let list = []
            querySnapshot.forEach(function (doc) {
                list.push(doc.data())
            });

            res.send(list)
        })
        .catch(function (error) {
            res.send(error)
        })


})

module.exports = router
