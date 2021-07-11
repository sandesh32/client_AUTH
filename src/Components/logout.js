import React from 'react';
export default function Logout(){
    try{
        const a = localStorage.token.length;
        localStorage.removeItem("token");
        document.location.reload();
    }
    catch{
        return (
            <div>
                You are currently logged out. Please login to continue!
            </div>
        )
    }
}
