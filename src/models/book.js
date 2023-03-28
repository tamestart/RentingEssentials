const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    hourlyRate: Number,
    authour: String
})

module.exports = mongoose.models.Books || mongoose.model('Books', bookSchema);