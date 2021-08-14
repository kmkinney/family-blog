const express = require('express')
const app = express()
const users = require('./routes/usersRoutes')
const blog = require('./routes/blogRoutes')

const PORT = 3000

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

app.get('/health', (req, res) => {
    res.status(200).send('healthy')
})

app.use('/users', users)
app.use('/blog', blog)

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})