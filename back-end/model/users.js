const db = require('../db/db')
/**
 * Callback function for db queries
 * @callback resultCallback
 * @param {Object} error error object
 * @param {Object} data result of query
 */
module.exports = {

    /**
     * Gets all the users in the database
     * 
     * @param {resultCallback} result the  callback handler of the query
     */
    getAll: function(result) {
        db.query('SELECT * FROM users', (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },

    /**
     * Get user by id
     * 
     * @param {int} userId the id of the user to get
     * @param {*} result the cb function with params (error, data)
     */
    getId: function(userId, result) {
        db.query('SELECT * FROM users WHERE id = ?', userId, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },
    /**
     * 
     * @param {string} userName 
     * @param {resultCallback} result 
     */
    getName: function(userName, result){
        db.query('SELECT * FROM users WHERE name = ?', userName, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, data)
        })
    },

    /**
     * Create new user
     * 
     * Example newUser = {
     *      name: 'userName',
     *      birthday: 'YYYY-MM-DD'
     * }
     * @param {*} newUser 
     * @param {*} result 
     */
    createUser: function(newUser, result) {
        db.query('INSERT INTO users SET ?', newUser, (err, data) => {
            if(err){
                result(err, null)
                return
            }
            result(null, {id: data.insertId, ...newUser})
        })
    },

    deleteUserId: function(userId, result) {
        db.query('START TRANSACTION')
        db.query('DELETE FROM users WHERE id = ?', userId, (err, data) => {
            if(err){
                db.query('ROLLBACK')
                result(err, null)
                return
            }
            db.query('COMMIT')
            result(null, data)
        })
    }
}