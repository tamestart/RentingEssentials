import book from '@/models/book';
import mongoose from 'mongoose';

require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);

export default async function handler (req, res) {
 const cursor = book.find().cursor()
 const books = []
    for (let book = await cursor.next(); book != null; book = await cursor.next()) {
        const object = {
            name: book.name,
            hourlyRate: book.hourlyRate,
            description: book.description,
            _id: book._id
        }
        books.push(object)
        // console.log(object)
      }
      let responseObj = books;
      if (responseObj == [] ) {
        responseObj = null
      }
    res.status(200).json({books})
}