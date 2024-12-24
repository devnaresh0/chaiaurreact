import React from 'react'
import {useDispatch} from 'react-redux'
import AuthService from '../../appwrite/config'
import {logout} from '../../store/authslice'

function LogoutBtn() {
    const dispatch  = useDispatch()
    const logoutHandler = () => {
        AuthService.logout().then(() => {
            dispatch(logout())
        })

    }
  return (
    <button
    className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>

  )
}

export default LogoutBtn