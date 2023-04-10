// import mongoose from "mongoose"

// var user = require("@/models/user.js")
// const bcrypt = require('bcrypt')
// const saltRounds = 10

// require('dotenv').config()

// mongoose.connect(process.env.MONGODBCONNECTIONSTRING);

// export default async function handle(req, res) {
//     if(req.method == 'POST' ) {
//         console.log(req.body.body)
//         console.log(req.body)
//         const body = await JSON.parse(req.body.body)
//         var newSalt;
//         console.log(req.body.body)
    
    

//         let newUserObject = new user({
//             username: body.username,
//             password: body.password,
//             admin: false,
//             address: ""
//         })

//         await newUserObject.save()
//         res.status(200).json({message: "User Created!"})
//     } else {
//         return res.json({message: 'Wrong Method!'})
//     }
// }