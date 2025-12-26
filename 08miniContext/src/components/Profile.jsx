import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext)
    //hum yahan conditional return karenge 
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}!</div> //user men se extract karenge username
   
}
export default Profile