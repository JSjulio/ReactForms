import React from "react";
import { useState } from "react";
const APIURL =  "https://fsa-jwt-practice.herokuapp.com/signup"; 

export default function SignUpForm({ setToken }) { 

    const [username, setUsername] = useState (""); 
    const [password, setPassword] = useState (""); 
    const [error, setError] = useState(null); 
    
    async function handleSubmit(e) { 
        e.preventDefault(); 
     try { 
        const response = await fetch (APIURL, {
            method: "POST", 
            headers: { 
            "Content-type": "application/json",
            }, 
            body: JSON.stringify({
                username, 
                password, 
            }),
        
        });
        const result = await response.json(); 
        setToken(result.token);
        console.log("Your token is:", result.token);         

    } catch(error) { 
        setError(error.message); 
    }
}

    return ( 
        
        <>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label> 
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={5} autoComplete="username" required/>  
                </label>
                <label> 
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="password" minLength={8} required/>  
                </label>
                <button>Submit</button>
            </form>
        </>
    )

}
