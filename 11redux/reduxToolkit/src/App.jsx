import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todo'
import { Provider, useDispatch } from 'react-redux'
import { store } from './app/store'

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()

  return (
    <>
    <h1>Learn about redux</h1>
    <Addtodo/>
    <Todos/>
    </>
  )
}

export default App
