import { NextResponse } from 'next/server'

let user = require('@/models/user')
let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
require('dotenv').config()

mongoose.connect(process.env.MONGODBCONNECTIONSTRING)

const handler = async (req, res) => {
    let response = NextResponse.next();
    if (req.method === "POST") {
        const { username, password } = req.body;
        console.log(username)
        if (!username || !password) {
            return res.status(400).json({
                status: 'error',
                error: 'Request missing username or password',
            });
        }

        const User = await user.findOne({ name: username }, 'name password _id')


        if (!User) {
            res.status(400).json({ status: 'error', error: 'User Not Found' });
            return response
        }

        await bcrypt.compare(password, User.password).then(yes => {
            if (!yes) {
                res.json({ message: "Incorrect Password!" })
                return response
            } else {

                const key = process.env.JWT_KEY
                const payload = {
                    id: User._id
                }

                jwt.sign(
                    payload,
                    key,
                    {
                        expiresIn: 259200
                    },
                    async (err, token) => {

                        await res.setHeader('Set-Cookie', `token=${token}`)
                        return res.status(200).json({

                            success: true,
                            Token: token
                        })
                        // response.cookies.set('token', token)
                        // return response;
                    },
                )


            }
        })
        return response;


    } else {
        return res.json({ message: "Incorrect Request Type!" })
    }
}

export default handler;
