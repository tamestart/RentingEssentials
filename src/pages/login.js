import React, { useState } from 'react'

const login = () => {
    const [Username, setUsername] = useState(null)
    const [Password, setPassword] = useState(null)
  return (
    <center>
        <div>
            <h1>Login</h1>
            <br />
            
            <form>
                <input type='text' required placeholder='Username' />
                <br />
                <br />
                <input type='text' required placeholder='Password'/>
                <br />
                <br />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    </center>
  )
}

export default login;