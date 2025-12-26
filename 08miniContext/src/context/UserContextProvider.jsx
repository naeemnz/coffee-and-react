import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    //yahan ap k pas jo bhi prop arahe hen use as children use karlo, children sirf esai ap k pas ek naam he mtlb jo arahe he use esai pas karlo, generic naam he pehle states me use hota tha to is liye use karliya

    const [user, setUser] = React.useState(null)
    return(
        //konsi value ka access derahe ho ya konsa data pass karre he to wo hum yahan denge, yahan men ek object pas karrahi hun, hum yahan pe bhi props pass karrahe hen value ki shakal men 
        //yahan niche humne ek object pas kiya he jismen humne user aur setUser state pass ki he jise hum apne components men access kar sakte hen
    <UserContext.Provider value = {{user, setUser}}> 
    {children}
    </UserContext.Provider>
    )
    
}

export default UserContextProvider

