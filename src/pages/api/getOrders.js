import order from "@/models/order";

const handler = async (req, res) => {
    let orders = await order.find({})
    res.json(orders)
}

export default handler;