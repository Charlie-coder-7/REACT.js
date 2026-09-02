// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)

//   // const change = ()=>{
//   //    setNum(num++)
//   // }
//   return (
//     <div>
//      <h1>{num}</h1>
//      <button onClick={()=>{
//       setNum(num+1)
//      }}>Click</button>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'

const App = () => {
  const [marks, setMarks] = useState([73,90,68,57,28])

  const btnclicked = ()=>{
    const newMarks = marks.map((elem)=>{
      return marks+5
    })
    setMarks(newMarks)
  }
  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1 key={idx}>Student {idx+1} marks = {elem}</h1>
      })}
      <button onClick={btnclicked}>Give them grace</button>
    </div>
  )
}

export default App