const db = require('../db/db')
/**
 * Callback function for db queries
 * @callback resultCallback
 * @param {Object} error error object
 * @param {Object} data result of query
 */
module.exports = {
    /**
     * Get all blog posts from the database
     * 
     * @param {resultCallback} result the callback function to handle data
     */
    getAll: function(result) {
        db.query('SELECT * FROM blog_posts', (err,data) => {
            if(err)
                result(err, null)
            result(null, data)
        })
    },

    /**
     * Gets the post that have the specified id
     * 
     * @param {int} postId the id of the post to get from the database
     * @param {resultCallback} result cb function to handle error and data
     */
    getId: function(postId, result){
        db.query('SELECT * FROM blog_posts WHERE id = ?', postId, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },

    /**
     * Gets all posts created by the user with the given id
     * 
     * @param {int} userId the id of the user whose posts will be retrieved from the database
     * @param {resultCallback} result cb function to handle error and data
     */
    getUserId: function(userId, result){
        db.query('SELECT * FROM blog_posts WHERE user_id = ?', userId, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },

    /**
     * Gets all posts created on specified date
     * 
     * @param {YYYY-MM-DD} postDate the date of the posts to retrieve from the database
     * @param {resultCallback} result cb function to handle error and data
     */
    getDate: function(postDate, result){
        db.query('SELECT * FROM blog_posts WHERE publish_date = ?', postDate, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },

    /**
     * Creates a new post in the database
     * 
     * @param {Object} newPost must have attributes: {
     *  user_id : int,
     *  publish_date: date string,
     *  post: string
     * }
     * @param {*} result 
     */
    newPost: function(newPost, result) {
        db.query('INSERT INTO blog_posts SET ?', newPost, (err, data) => {
            if(err)
                result(err, null)
            result(null, {id: data.insertId, ...newPost})
        })
    }
}