import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Footer = () => {
  const data = useContext(ThemeContextData)
  return (
    <div className='foot'>
        <h1>Footer</h1>
        <p>{data}</p>
    </div>
  )
}

export default Footer