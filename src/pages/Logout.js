import Router from 'next/router'
import React, { useEffect } from 'react'

const Logout = () => {

    const logout = () => {
        localStorage.removeItem("token")
        document.cookie = ""
        Router.push('/')
    }
    useEffect(() => {
        logout();
    }, [])

    return (
        <center>
            <div>
                <h1>Logging Out....</h1>
            </div>
        </center>

    )
}

export default Logout