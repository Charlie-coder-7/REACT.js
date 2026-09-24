import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext';

const Navbar = () => {
    const data = useContext(userDataContext)
    console.log(data);
    
  return (
    <div className='h-10 w-full bg-emerald-500'>
        <h1>This is Navbar {data}</h1>
    </div>
  )
}

export default Navbar