import verifyJWT from "@/handler/verifyJWT";
import book from "@/models/book";
import order from "@/models/order";
import mongoose from "mongoose";
let user = require('@/models/user')
require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING)

const handler = async (req, res) => {
    var body = req.body
    console.log(req.body)
    let token = body.token;
    let data = verifyJWT(token);
    let User = await user.findById({ _id: data.id })
    console.log(User.orders)

    var newOrder = new order({
        book: body.id,
        dateRentOut: Date.now(),
        bookName: body.book,
        days: body.noOfDays,
        address: body.address,
        delivered: false,
        returned: false
    })
    await newOrder.save()

    let bookO = await book.findOne({ _id: body.id })
    bookO.inStock = false;
    await bookO.save();
    User.orders.push(newOrder._id);
    User.save()

    res.status(200).json(newOrder)

}

export default handler;