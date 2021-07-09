import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const changeValueEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeValuePassword = (e) => {
        setPassword(e.target.value);
    }
    // localStorage.setItem("sandes","dhungana");
    const postData = () =>{
        //axios.post(url, {"email":email,"password":password});
        fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        .then(res => res.json())
        .then(result => {
         localStorage.setItem("token",result.token);
         })
    };
    return (
        <div>
            <form>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={email} onChange={changeValueEmail} placeholder="sanjal@gmail.com" required />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={changeValuePassword} placeholder="********" required />
            <br />
            <button onClick={postData}>Login</button>
            </form>
        </div>
    )
}
