var book = require('@/models/book') 
import mongoose from 'mongoose';
require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body.body)
    const booko = new book({
      name: body.title,
      description: body.Description,
      hourlyRate: body.Price,
      authour: body.Authour,
      inStock: true
    })

    await booko.save();
    return res.status(200).json({ message: "All Ok Here!"})
  } else {
    return res.status(200).json({ name: 'John Doe' })
  }
  
}
