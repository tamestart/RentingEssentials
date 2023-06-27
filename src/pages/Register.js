import axios from 'axios'
import React, { useState } from 'react'
import Router from 'next/router'

const Register = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        let data = {
            Username: Username,
            Password: Password
        }

        await axios.post('/api/Register', data).then(res => console.log(res.data))
        Router.push('/Login')
    }
    return (
        <div>
            <center>
                <h1>Register</h1>
                <br />
                <form onSubmit={onFormSubmit}>
                    <input type='text' required min={8} onChange={onChangeUsername} placeholder='Username' />
                    <br />
                    <br />
                    <input type='password' required min={8} onChange={onChangePassword} placeholder='Password' />
                    <br />
                    <br />
                    <button type='submit'>Register</button>
                </form>
            </center>


        </div>
    )
}

export default Register