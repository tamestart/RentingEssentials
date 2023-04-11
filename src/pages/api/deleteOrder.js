import book from '@/models/book';
import mongoose from 'mongoose';

require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);


const handler = async (req, res) => {
    let bookO = await book.findByIdAndDelete(await JSON.parse(req.body).id)
    res.json({message: '200'})
}

export default handler;