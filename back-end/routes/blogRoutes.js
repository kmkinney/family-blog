const express = require('express')
const blog = require('../model/blog')

var router = express.Router()

/**
 * GET /blog
 * 
 * Gets all blog posts in the database
 */
router.get('/', (req, res) => {
    blog.getAll((err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * GET /blog/id/:postId
 * 
 * Gets the blog with given post id
 */
router.get('/id/:postId', (req, res) => {
    blog.getId(req.params.postId, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * GET /blog/user/id/:userId
 * 
 * Gets the blog posts written by the user with given userId
 */
router.get('/user/id/:userId', (req, res)=>{
    blog.getUserId(req.params.userId, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

/**
 * GET /blog/date/:postDate
 * 
 * Gets the blog posts posted on given postdate
 */
router.get('/date/:postDate', (req, res)=>{
    if(!req.params.postDate.match(/^[\d]{4}-[\d]{2}-[\d]{2}$/)){
        
    }
})


/**
 * POST /blog/create
 * 
 * Create a new post
 * 
 * needs {
 *      userId: int,
 *      publishDate: YYYY-MM-DD,
 *      post: text
 * }
 */
router.post('/create', (req, res) => {
    if(!req.body ||
       !req.body.userId ||
       !req.body.publishDate ||
       !req.body.post){
        res.status(400).send('Bad post object')
    }
    const newPost = {
        user_id: req.body.userId,
        publish_date: req.body.publishDate,
        post: req.body.post
    }
    blog.newPost(newPost, (err, data) => {
        if(err){
            res.status(400).send(err)
            return
        }
        res.status(200).send(data)
    })
})

router.delete('/:postId', (req, res)=>{})

module.exports = router