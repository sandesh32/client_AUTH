import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    if(localStorage.getItem("token")){  
        return (
            <div className="navbar">
                <div className="sandesh">
                    <Link to="/">Sandesh</Link>
                </div>
                <div className="nav_links"> 
                <ul>
                <li><Link to="/">Home</Link></li> <div className="horline"> | </div>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
                </div>
        </div>
    )
}
else{
    return (
        <div className="navbar">
            <div className="sandesh">
                    <Link to="/">Sandesh</Link>
                </div>
            <div className="nav_links"> 
        <ul>
            <li><Link to="/login">Login</Link></li> <div className="horline"> | </div>  
            <li><Link to="/signup">Signup</Link></li>
        </ul>
        </div>
    </div>
    )
    }
}
