import React, { useState, useContext } from "react"; //ye useContext hook he jise hum context se data lene ke liye use karte hen
import UserContext from "../context/UserContext"; //is userContext men jo values hen use fetch karne men useContext hook hamari help karta he

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext) //ye setUser humne UserContext se liya he agar values chahiye to user se lenge aur agar add karenge to setUser k zariye add karwange 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})//is method men humne username aur password ko pass kiya he, ye method he jo humne user context provider se liya he
        
    }

    return(
        <div>
            <h2>Login</h2>
            <input 
            type="text" 
            placeholder="username" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            { "    "}
            <input 
            type="text" 
            placeholder="password" 
            value={password}
            onChange={(e) => 
                setPassword(e.target.value)}
            />
            { "    "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login