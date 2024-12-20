import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoslice'
function Addtodo() {
  const [input,setInput] = React.useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')

  }
  return (
    <div>Addtodo</div>
  )
}

export default Addtodo