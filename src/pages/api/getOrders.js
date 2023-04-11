import order from "@/models/order";
import mongoose from "mongoose";
require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);

const handler = async (req, res) => {
    let orders = await order.find({})
    res.json(orders)
}

export default handler;