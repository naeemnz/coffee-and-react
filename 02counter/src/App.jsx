import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState state ko change karne k liye use hota hai, change ko ui men reflect ya propagate karne k liye, values ko chnage nahin karta
  let [counter, setCounter] = useState(15); //[0 index value, ek function]
  // let counter = 10;
const addValue = () => {
  console.log("Value added!", counter);
  // counter += 1;
  // +1 karne k do tariqe hain
  if(counter < 20) {
   counter += 1;
   setCounter(counter);
    // setCounter(counter + 1);  
    }
}

const removeValue = () => {
  if(counter > 0  ) {
  setCounter(counter - 1);
  console.log("Vlaue removed!", counter);
  }
}

  return (
    <>
    <h2>Cofee and React</h2>
    <h3>Counter Value : {counter}</h3>

    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={removeValue}>Subtract</button>
    </>
  )
}

export default App
