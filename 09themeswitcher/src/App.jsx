import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  
  const darkTheme = () => {
    setThemeMode('dark');
  };
  const lightTheme = () => {
    setThemeMode('light');
  };
  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])



  return (
    //mjhe ye pata he k ye teen functions hen lekin iski functionalkity abhi define nahi hui he
    //to ap kiya karo in functions k namon ko exactly lo aur is k functions banao to ye functionality directly hi inme chali jati he 
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
        </div>
    </div>
</div>
</ThemeProvider>
  );
}

export default App
