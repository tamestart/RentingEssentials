let user = require('@/models/user');
import mongoose from 'mongoose';
const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')

mongoose.connect(process.env.MONGODBCONNECTIONSTRING);


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { Username, Password } = req.body;
        console.log(Username)
        console.log(Password)
        // const User = await user.findOne({name: Username})
        // if (!User) {
        //     return res.status(400).json({ message: "No Such User!" });
        // }

        let newUser = {

        }
        let salt;
        await bcrypt.genSalt(10, (err, Salt) => {
            salt = Salt
        })
        let slatO = await bcrypt.genSalt(10);
        console.log(slatO)
        console.log(salt)
        await bcrypt.hash(Password, salt, async (err, Hash) => {
            if (err) {
                throw err;
            } else {
                newUser = new user({
                    name: Username,
                    password: Hash,
                    orders: []
                })
                console.log("AEAEA")

                await newUser.save()
            }
        })



        res.json({ message: "OK!" })
    }
}

export default handler;