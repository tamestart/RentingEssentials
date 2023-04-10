const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hourlyRate: {
        type: Number,
        required: true
    },
    authour: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.models.Books || mongoose.model('Books', bookSchema)