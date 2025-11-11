// hum is file ko app bhi bolsakte hen aur iski jagah hum app men bhi kamkarsakte hen matlab banaane ki zarorat nahi thi ya he tabhi
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
        {/* pehle isko fragment banao div se phir ismen Layout ki jagah ye niche wale likho
        aur Outlet ek dynamic tariqa he chizon ko pass karne ka, jahan pe bhi mene outlet de diya wahan men change karsakta hun
         examp men Home pass karon about us .... mere header aur footer chnage nahin hone chahiye, aur agar outlet bottom men de diya to shoro ki do same rahengi */}
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
export default Layout