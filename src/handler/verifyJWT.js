const JWT = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (token) => {
    try {
        var decoded = JWT.verify(token, process.env.JWT_KEY)
        console.log(decoded);
        return decoded;
    } catch (err) {
        return err;
    }

}

export default verifyJWT;