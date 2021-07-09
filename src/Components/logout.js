import React from 'react';

export default function Logout(){
    localStorage.removeItem("token");
    return (
        <div>
            You are currently logged out. Please login to continue!
        </div>
    )
}
