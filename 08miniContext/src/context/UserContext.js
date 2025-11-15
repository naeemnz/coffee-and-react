import React from 'react'
// The React Context API was released to avoid prop drilling by simplifying state management and making sharing 
// data across the component tree more efficient and error-free.
const userContext = React.createContext()

export default userContext

/*
Hume context ek varibale provide karraha he to iska matlab har context ek provider hota he
Sare componenets ko jo us div ya fragment men hen ya us user context me hen ya is wrapper men user context k wrap hen un sab ko is global user context ka access mil jaiga
iska matlab ye user context ek provider banjayega 
Context ek tariq ka global variable he jise alag alag componenets access karte hen bajai har  
1. jub context banta he to humen provider bhi banana parta he
2. Yani har componenet ko jo wrap k ya context k ander he unsab ko user context k through sari states ka acceess le sakte hen yaphir mil jata he 
3. Context ko yahan ek global variable ki tarah mano
*/ 