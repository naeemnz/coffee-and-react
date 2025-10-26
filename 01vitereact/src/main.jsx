import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp() {
  return(
    <div>
      <h4>Custom App!</h4>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Go to Googlee!</a>
)
//react ki elements ki working ko smjhne k liye, hum apne hisab se nahi balk react k hisab se banayenge isliye hum React.createlem yani react k creat element ko use karenge nak JS k
const reactElement2 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to go to googleE!'

) //createElement function react k andar hota he, ye ek object return karta he aur leta he jisme type, props aur children hota he,aur iska syntax fix he nak humare custom react ki tarah

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //</StrictMode> 
    <App />
    // reactElement2 //ye bhi chalega react ki lib ke synatx k according

    // anotherElement //ye bhi kam karega react ki libraray k according, ye sirf ek object men convert hoga
    // <MyApp /> aur MyApp() dono chalenge lkein esa karna nahin he, agr uper wala function run karwana he to yahan use karlo
)
