const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name: String,
    password: String,
    orders: Array
})

module.exports = mongoose.models.Users || mongoose.model('Users', userSchema)