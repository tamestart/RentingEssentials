import book from "@/models/book";
import mongoose from "mongoose";



const handler = async function handler(req, res) {
    console.log(req.body)
    const body = req.body
    console.log(body)
    const objId = body.id
    const doc = await book.findOne({_id: req.body.id})
    console.log(doc)
    console.log(doc.name)
    console.log(doc.hourlyRate)
    console.log(doc.description)
    res.json({
        name: doc.name,
        description: doc.description,
        dailyRate: doc.hourlyRate
    })
}

export default handler;