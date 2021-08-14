const mysql = require('mysql')
const config = require('./config')

//Connect to mysql
const db = mysql.createConnection({
    host: config.HOST,
    user: config.USER_NAME,
    password: config.PASSWORD,
    database: config.DB_NAME
})

db.connect((err) => {
    if(err){
        console.error(err)
        return;
    }
    console.log('Connection Created')
})

/**
 * Gets all blog users from the database
 * Queries rows id and name
 * 
 * @returns {Promise} An array of objects representing the response
 */
async function getUsers() {
    return db.query('SELECT * FROM users', (err, res) => {
        if(err){
            console.error(err)
            return;
        }
        console.log('Got data!', res)
    })
}

/**
 * 
 * @param {string} userName the name of the user to be added
 */
function addUser(userName) {
    const user = {name: userName}
    let result
    db.query('INSER INTO users SET ?', user, (err, res) => {
        if(err){
            console.error(err)
            throw err
        }
        console.log('recieved data!')
        result = res
    })
    return result
}

/**
 * Ends the database connection
 */
function disconnect(){
    db.end((err) => {
        if(err){
            console.error(err)
        }
    })
}

module.exports = db
