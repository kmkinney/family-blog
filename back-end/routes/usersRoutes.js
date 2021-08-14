const express = require('express')
const users = require('../model/users')

var router = express.Router()


router.get('/', (req, res) => {
    users.getAll((err, data) => {
        if(err){
            res.status(400).send(err)
        }
        res.status(200).send(data)
    })
})

module.exports = router