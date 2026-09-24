import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Footer = () => {
    const val = useContext(userDataContext)
  return (
    <div className='absolute bottom-0 w-screen h-10 bg-blue-700'>
        <h1>This is Footer{val}</h1> 
    </div>
  )
}

export default Footer