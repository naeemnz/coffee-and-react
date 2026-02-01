import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'; //baghair bracket ke he kuk ye ek object he
import { login, logout } from './store/authSlice';

import './App.css'
import { set } from 'react-hook-form';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';  

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // muz yao de loading state jorawo, wuli chi data dasi jaldi na razi

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch() // Redux hook, allows us to dispatch actions to the store, state chnage karrha hun ya current user leke ao to ye khamakha dispatch lagega


  // (function + dependency array), dilta hum yao service use karenge jo pochenga ki user login he ya nahi, ya current user sok di
  useEffect(() => {
    authService.userLoginCheck()
    .then(( currentUser) => {
      if (currentUser) {
        // userData ye currentUser ye ao k bal noem yi parwan na lari, ta har noem ur kawali se dita object ta 
        dispatch(login({currentUser}))
      } else {
        dispatch(logout());
      }
    })
    // men  chaho to .catch() bhi laga sakta hun, zarorat nahi is liye men directly finally() use kiya he kuk ye har haal men run hota hi har shai chi wusi parwah na lari
    .finally( () => setLoading(false) );
  
  },[]);

  // return !loading ? () : (); ya if ao else we lagawa
  // muz dilta pa reverse ki check waki wul chi zmuz default state true wo de loading
  return !loading ? (
    <>
   <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
    <div className="w-full block">
      <Header />
      <main>
        TODO: {/* Outlet: da razi de react router dom sakha */}
      </main>
      <Footer />
    </div>
   </div>
    </>
  ) : null
}

export default App
