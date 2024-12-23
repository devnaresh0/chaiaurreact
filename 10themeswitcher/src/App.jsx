import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeButton'

function App() {
const {themeMOde,setThemeMode} = useState("light")
const lightTheme = () => {
  setThemeMode("light")
}

const darkTheme = () => {
  setThemeMode("dark")
}

// actual change in theme
useEffect (()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMOde)

},[themeMOde])


  return (
    <ThemeProvider value ={{themeMOde,lightTheme,darkTheme}}>


<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>
  )
}

export default App
