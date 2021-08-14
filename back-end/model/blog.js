const db = require('../db/db')

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
     * Creates a new post in the database
     * 
     * @param {Object} newPost must have attributes: {
     *  user : string,
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
    /**
     * Callback function for db queries
     * @callback resultCallback
     * @param {Object} error error object
     * @param {Object} data result of query
     */
}