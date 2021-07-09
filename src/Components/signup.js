import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export default function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const changeValueEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeValuePassword = (e) => {
        setPassword(e.target.value);
    }
    const postData =()=>{
        const url="http://localhost:5000/signup";
        axios.post(url, {"email":email,"password":password})
        .then(res=>console.log("posted"))
        .catch(err=>console.log(err));
    };
    return (
        <div>
            <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={changeValueEmail} placeholder="dhunganasandesh32@gmail.com" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={changeValuePassword} placeholder="********" required />
            <br />
            <button onClick={postData}>Signup</button>
            </form>
        </div>
    )
}
