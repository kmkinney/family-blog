const db = require('../db/db')

module.exports = {

    /**
     * Gets all the users in the database
     * 
     * @param {resultCallback} result the  callback handler of the query
     */
    getAll: function(result) {
        db.query('SELECT * FROM users', (err, data) => {
            if(err){
                res(err, null)
            }
            result(null, data)
        })
    }

    /**
     * Callback function for db queries
     * @callback resultCallback
     * @param {Object} error error object
     * @param {Object} data result of query
     */
}