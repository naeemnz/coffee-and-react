import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo.jsx'

function App() {

  return (
    <>
      <h2 className="font-bold text-3xl p-4">Todo</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
