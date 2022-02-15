const { Schema, model } = require('mongoose')

module.exports = model('Student', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: false
    },
    form: {
        type: Number,
        required: true
    }
}))