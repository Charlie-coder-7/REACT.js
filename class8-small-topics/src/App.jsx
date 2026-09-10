import React from 'react'
import Card from './components/Card'

const App = () => {
  const cardData = {
    username:"Charlie",
    role:"Engineer",
    email:"charlie@gmail.com",
    profile:"https://imgs.search.brave.com/mbbuTjTzN_J1Mi9iLphUOx1W4NnWDQfz1hzDqfMovb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyNTQx/MTg4LmpwZw"

  }
  return (
    <>
     <Card cardData={cardData} />
    </>
  )
}

export default App