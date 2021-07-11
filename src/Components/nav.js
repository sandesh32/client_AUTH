import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    if(localStorage.getItem("token")){  
        return (
            <div id="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}
else{
    return (
        <div id="navbar">
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    </div>
    )
    }
}
