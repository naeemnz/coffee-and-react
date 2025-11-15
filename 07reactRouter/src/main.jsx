import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
//easy rehta he k componenet aur jismen api call he sath rakho isliye


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
//ye ek method he jismen hum ek aur method use karenge jo create routes from element se hoga na k children property se yad rahe
// const router  = createBrowserRouter([])// hum array ki jagah dobara call back func denge
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* iska syntax hota he user/:id ya niche wala, jo bhi paramter liya he yahan humne us ka access usk componenet men automatically milga humen */}
      <Route path='user/:userid' element={<User />} />
      <Route 
      //hum loader men bhi api fetch karsakte hen, api call hoti hen aur data fetching shoro hoti he sirf mouse ko lejane se hi beghair click k liye, aur ye optimisation k liye he
      loader = {githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> , niche wala componenet sirf ek prop leta he jo he router aur jise hume banana padega */}
    <RouterProvider router= {router} /> 
    {/* Router do tariqe se banaye jate hen */}
  </StrictMode>,
)
