import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';

function App() {

  const [todos, setTodos] = useState([]);
  // niche function men jo todo he wo sirf ek string value he ya string he
  const addTodoTitle = (todoItem) => {
    // setTodos(todoItem) isse purani sari value delete hojayengi kuk hum har bar ek nayi stae set karrahe he jiski waja se purani sate delete hojati he, isliye hum esa nahi karenge

    // humne context k variables men ek array>object>varibale + func diye hen isliye hume apna ek element ya ikkai yani object ko bana hoga aur phir ise add karna hoga array k existing elements men
    // humne purana array bhi rakha he aur naya bhi banaya yani agar array men pehle se values mojod ho to us condition k liye 
    setTodos((prevarray) => [{id: Date.now(), ...todoItem},...prevarray])
  }

  const updateTodoTitle = (id, todoItem) => {
    setTodos((prevarray) => prevarray.map((prevTodoItemIndivid) => ( //yahan har object ki id he nak ek array ki
      prevTodoItemIndivid.id === id ? todoItem : prevTodoItemIndivid //agar id match ho jati he to naya object return kar do warna purana object return kar do 
    )));
  }

  const deleteTodoTitle = (id) => {
    setTodos((prevarray) => prevarray.filter((todoItem) => todoItem.id !== id))
  }

  // hamara todo ek object he aur yahan hum us object ki property ko access karke overwrite karrahe hen
  const toggleChecked = (id) => {
    setTodos((prevarray) => prevarray.map((prevTodoItemIndivid) => prevTodoItemIndivid === id ? {...prevTodoItemIndivid, toggleChecked: !prevTodoItemIndivid.toggleChecked } : prevTodoItemIndivid))
  }

  useEffect(() => {}, [43])

  return (
  <TodoProvider value={{todos, addTodoTitle, updateTodoTitle, deleteTodoTitle, toggleChecked}}>
    <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
        </div>
  </TodoProvider>
  )
}

export default App
