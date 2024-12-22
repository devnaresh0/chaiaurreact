import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import AuthService from './appwrite/auth/auth'
import {login,logout} from "./store/authslice"
function App() {
    const [loading,setloading] = useState(true);

const dispatch = useDispatch()
    useEffect(() => {
      AuthService.getCurruntUser.then((userData) => {
        if (userData) {
          dispatch(login(userData))
          
        }
        else {
          dispatch(logout())
        }
      }).finally(()=> setloading(false)) 
    },[])

return !loading ? (
  <div className='min-h-screen 
  flex flex-wrap
   content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        {/* <Outlet/> */}


      </main>
      <Footer/>
    </div>
    
    </div>
) : null
}
export default App
