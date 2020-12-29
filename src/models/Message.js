const mongoose = require('../database')
//const User = require('./User')

const MessageSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //email: {},
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message