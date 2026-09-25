import React from 'react'
import { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Section1 = () => {
  const data = useContext(ThemeContextData)
  return (
    <div>
      <h2>section 1</h2>
      <p>{data}</p>  
       </div>
  )
}

export default Section1