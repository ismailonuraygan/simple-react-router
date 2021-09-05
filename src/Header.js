import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Simple React Router</h1>
            <ul className = "nav">
                <li>
                    <Link to= "/Home">Home</Link>
                </li>
                <li>
                    <Link to= "/Messages">Messages</Link>
                </li>
                <li>
                    <Link to= "/Users">Users</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
