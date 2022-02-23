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
    graduation: {
        type: Number,
        required: true
    }
}))