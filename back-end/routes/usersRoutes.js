const express = require('express')
const users = require('../model/users')

var router = express.Router()

/**
 * GET /users
 * 
 * Returns all users in the database
 */
router.get('/', (req, res) => {
    users.getAll((err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * GET /users/id/:userId
 * 
 * Get a user based on their user ID
 */
router.get('/id/:userId', (req, res) => {
    console.log(`getting user with userId: ${req.params.userId}`)
    users.getId(req.params.userId, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * GET /users/name/:userName
 * 
 * Gets the user with given username
 */
router.get('/name/:userName', (req, res) => {
    console.log(`getting user with userName: ${req.params.userName}`)
    users.getName(req.params.userName, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * POST /users/create
 * 
 * Creates a new user
 * 
 * Needs body to be json with a name and birthday
 * 
 * E.g. {
 *  name: string
 *  birthday: YYYY-MM-DD
 * }
 */
router.post('/create', (req, res) => {
    if(!req.body || !req.body.name || !req.body.birthday){
        res.status(400).send('Must have user name and birthday')
        return
    }
    const newUser = {
        name: req.body.name,
        birthday: req.body.birthday
    }
    users.createUser(newUser, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })

})

/**
 * DELETE /users/:userId
 * 
 * Deletes the user with the given user ID
 */
router.delete('/:userId', (req, res) => {
    if(!req.params.userId){
        res.status(400).send('Need user id')
        return
    }
    users.deleteUserId(req.params.userId, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})



module.exports = router