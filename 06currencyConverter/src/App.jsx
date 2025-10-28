import { useState } from 'react'
import { useCurrencyInfo } from './hooks/useCurrencyInfo';
import {InputBox} from './components'
import './App.css'

function App() {
 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("eur")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [] = useState()
  
  //hook ka use kese karenge hum idhar uska tariqa he ye jo hum ne banaya he useCurrencyInfo 
  const currencyInfo = useCurrencyInfo(from) //from me already eur he 48min




  return (
    <>
      <h1 className='text-3xl bg-orange-500 py-2'>Currency Converter</h1>
      {/* <UseCurrencyInfo /> */}
    </>
  )
}

export default App
