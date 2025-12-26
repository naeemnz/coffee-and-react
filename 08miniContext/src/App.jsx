import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
      {/* <userContextProvider>....+ no. of components jese <Login /> <Profile /> 1.ye bhi sahi he aur jo dosra tariqa he wo bhi</userContextProvider>, is method men 
      humne component k ander he subkuch handle kiya he alag se kuch import karane ki zarorat nahi he */}
      {/* 2. Dosra tariqa: <userContext.Provider value={} */}
      {/* yahan hum app men jit ne compoennts lenge un sab ko is context ka access hoga, yani is tag <userContextProvider> k ander jitne components he unko */}
     <h2>React with Coffee</h2> 
     <Login />
     <Profile />

    </UserContextProvider>
  )
}

export default App
