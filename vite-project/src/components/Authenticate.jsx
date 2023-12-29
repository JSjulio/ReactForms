import React from "react";
import { useState } from "react";
const APIAUTH = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export default function Authenticate({ token }) { 
const [error, setError] = useState(null); 
const [successMessage, setSuccessMessage] = useState(null); 
const [userMessage, setUserMessage] = useState(null); 


    async function handleClick() { 
        try { 
            const response = await fetch (APIAUTH, { 
                method: "GET",
                headers: { 
                    "Content-Type": "application/json", 
                Authorization: `Bearer ${token}`, 
                },
            }
        );
            const result = await response.json(); 
            console.log(result);
        
            if (response.ok) { 
                setSuccessMessage(result.message);
                setUserMessage(result.data.username + ",    Welcome 🤝"); 

            } else {
            setError(error.message); 
            }
         }   catch(error) { 
            setError(error.message); 
        }
    }
    

    return (
    <>  
    <div>
        <h2>Authenticate</h2>
       {error && <p>{error}</p> }
       {successMessage && <p><i>{successMessage}</i></p> }  
       {userMessage && <p>{userMessage}</p> }
        <button onClick={() => handleClick({ token })}>Authenitcate Token</button>
    </div>
    </>
    );
}


