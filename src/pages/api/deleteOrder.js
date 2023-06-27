import book from '@/models/book';
import mongoose from 'mongoose';

require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);


const handler = async (req, res) => {
    console.log(req.body.id)
    console.log(req.body)
    let bookO = await book.findOneAndDelete({ _id: req.body.id })
    res.json({ message: '200' })
}

export default handler;