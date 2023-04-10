const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    book: mongoose.Schema.Types.ObjectId,
    dateRentOut: mongoose.Schema.Types.Date,
    bookName: String,
    address: String,
    days: String,
    delivered: Boolean,
    returned: Boolean
})

module.exports = mongoose.models.Orders || mongoose.model('Orders', orderSchema)