

import verifyJWT from "@/handler/verifyJWT";
import order from "@/models/order";
import mongoose from "mongoose";
let user = require("@/models/user");
require('dotenv').config()


mongoose.connect(process.env.MONGODBCONNECTIONSTRING)

const handler = async (req, res) => {
    let token = req.body.token;
    let data = await verifyJWT(token)
    let User = await user.findById(data.id)
    let orderIds = User.orders;
    let orders = []
    console.log(orderIds.length)
    for (let i = 0; i < orderIds.length; i++) {
        let doc = await order.findById(orderIds[i])
        orders.push(doc)
    }
    console.log(orders)
    res.json({ Orders: orders })
}

export default handler;