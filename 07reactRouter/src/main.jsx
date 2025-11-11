import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'


// ye ek method he jise humne import kiya he react router dom se jis men ek array he aur is array men hum apne sare objects dalte hen jo humare routes ko define karte hen
// const router = createBrowserRouter([
//   {
//     path: '/', //ye slash he jo sare sub routes ka parent he aur unk liye already laga hua he is liye /about ki jagah sirf about likhna he
//     element: <Layout />, // ye component he jise hum render karwana chahte hen jab hum is route pe jayein, is obje men sirf do properties thi lekin isk further elements hen isliye mazid Children property ka izafa hua he yahan
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//uper wale tariqe ka alternative he aur thora asan bhi he ye tariqa
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> , niche wala componenet sirf ek prop leta he jo he router aur jise hume banana padega */}
    <RouterProvider router= {router} /> 
    {/* Router do tariqe se banaye jate hen */}
  </StrictMode>,
)
