import { useState, useCallback, useEffect, useRef } from 'react'

// usecallback yad rakhne k liye he agr koi chiz change na ho to wo firse na banaye, useeffect me use karte he jb koi chiz change ho to firse call karne k liye ex
// page refresh karo to already ek generated password dikhe, useRef ka use tab karte he jb hme kisi chiz ko persist karna ho bina re render
// ke ex input field me cursor ki position ya fir previous state ko store karna ho bina re render ke, example yahan input lene he aur wo bhi 
// ek specific input field ka button ka sath
function App() {
  const [length, setLength] = useState(8); //default value
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null) 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*{}~[]_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log("Value of char by random method: ",char);
      pass += str.charAt(char)
      console.log("Value of pass by charAt method: ",pass);
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    // optimization for copy to clipboard
    passwordRef.current?.select()
    // with custom range, eg. 20 charac me se (0, 3) 3 charac hi select honge
    passwordRef.current?.setSelectionRange(0, 16)
     window.navigator.clipboard.writeText(password) }, [password])
  useEffect(() => { passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
     <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
     <h1 className='text-3xl text-center text-white my-5 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidded mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-2 px-3 bg-gray-800 '
        placeholder='Password'
        readOnly 
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-sky-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={16}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={() => {setNumberAllowed((prev)=> !prev)
            }}
             />
             <label htmlFor='numberInput'>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked = {characterAllowed}
            id='characterInput'
            onChange={()=> {setCharacterAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor='characterInput'>Include Special Characters</label>
          </div>
        </div>
        
        </div>
    </>
  )
}

export default App
