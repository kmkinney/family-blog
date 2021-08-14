const express = require('express')
const blog = require('../model/blog')

var router = express.Router()


router.get('/', (req, res) => {
    blog.getAll((err, data) => {
        if(err)
            res.status(400).send(err)
        res.status(200).send(data)
    })
})

router.post('/create', (req, res) => {
    const testPost = {
        user: 'Gretchen',
        publish_date: '2021-08-13',
        post: 'I love charlie the dog!'
    }
    blog.newPost(testPost, (err, data) => {
        if(err)
            res.status(400).send(err)
        res.status(200).send(data)
    })
})

module.exports = router