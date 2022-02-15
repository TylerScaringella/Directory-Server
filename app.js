const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()

const app = express()
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

require('./api/routes')(app)

const PORT = process.env.PORT || 8081
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to Mongo Database`)
    
    app.listen(PORT, () => {
        console.log(`Server is now listening locally on port ${PORT}`)
    })
}).catch(() => console.log(`Failed to connect to Mongo Database`))