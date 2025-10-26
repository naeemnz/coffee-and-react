import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "Thijs Blom",
    age: 28
  }
  let newArray = [1, 2, 3, 4]
  return (
    <>
    <h1 className="bg-green-400 text-black p-2 round-xl mb-5">Tailwind Test</h1>
    {/* <Card channel = "Coffee" someObject = {myObject} someArray = {newArray}/>  ye sab sahi he */}
    <Card artikel = "Coffee with Thijs Blom" btnText = "Click me!"/>
    {/* na hi array lega aur nahin object directly channle k bad pass hosakta he han agr variable ki form men do to accept karega jese aam torpar {} k bexh men pass karte hen */}
    <br />
    {/* niche wala accidently acceptable he kuk ye apna experiment he ye meri apni ikhtarah he ya invention he */}
    {/* <Card artikel = {"Coffee with Henrie Blom"}/> */}
    {/* <Card artikel = "Coffee with Henrie Blom" btnText = "Don't click on this!"/> */}
    {/* niche default value button ki show karega jop he "Read more" na k uper wali Don't click on this! */}
    <Card artikel = "Coffee with Henrie Blom" /> 

 
        
    </>
  )
}

export default App
