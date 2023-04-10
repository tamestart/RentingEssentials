import axios from 'axios'
import React, { useState } from 'react'

const register = () => {
    const [Username, setUsername] = useState(null)
    const [Password, setPassword] = useState(null)
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
        
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onRegister = async (e) => {
        e.preventDefault()
        
        const body = await JSON.stringify({
            username: Username,
            password: Password
        })
        await axios.post('/api/register', {body})
    }
  return (
    <center>
        <h1>Register</h1>
        <br />
        <br />
        
        <form onSubmit={onRegister}>
            <input type="text" required placeholder='Username' min='3' max='8' onChange={onChangeUsername}/>
            <br />
            <br />
            <input type="password" required placeholder='Password' min='8' max= '21'onChange={onChangePassword}/>
            <br />
            <br />
            <button type='submit'>Register Now</button>
        </form>
    </center>
    
  )
}

export default register;