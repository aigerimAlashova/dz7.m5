import React, { useEffect, useState } from 'react'
import { Login } from './Login'

export const Home = () => {

    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(localStorage.getItem('email'))
    }, [])

    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }


    return (
        <div>
            <h1>
                Home
            </h1>

            <button onClick={logOut}>
                logOut
            </button>
        </div>
    )
}

