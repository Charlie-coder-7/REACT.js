import React from 'react'
import App from '../App'
import { createContext } from 'react'
import { useState } from 'react'
export const ThemeContextData = createContext()
const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState('Light')
  return (
    <ThemeContextData.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContextData.Provider>
  );
}

export default ThemeContext