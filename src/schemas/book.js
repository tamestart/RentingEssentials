const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    hourlyRate: Number
})

export default mongoose.model('Books', bookSchema)