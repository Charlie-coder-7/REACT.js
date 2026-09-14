// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [title, settitle] = useState('')
//   useEffect(function(){
//     console.log('UseEffect Done');
    
//   })
//   return (
//     <div>
//      <input value={title} onChange={(e)=>{
//       settitle(e.target.value)
//      }} type="text" />
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [number1, setnumber1] = useState(0)
//   const [number2, setnumber2] = useState(0);
//   const [number3, setnumber3] = useState(0);
//   useEffect(function(){
//     console.log("UseEffcer Working");
    
//   },[number1,number2])
//   return (
//     <div>
//       <h1>{number1}</h1>
//       <button onClick={()=>{
//         setnumber1(Math.floor(Math.random()*100))
//       }}>Change Number1</button>
//       <br />
//        <h1>{number2}</h1>
//       <button onClick={()=>{
//         setnumber2(Math.floor(Math.random()*100))
//       }}>Change Number2</button>
//       <br />
//        <h1>{number3}</h1>
//       <button onClick={()=>{
//         setnumber3(Math.floor(Math.random()*100))
//       }}>Change Number3</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [users, setUsers] = useState("");
  const [num, setnum] = useState(0)
  const getData = async ()=>{
    const response = await axios.get("https://randomuser.me/api/");
    setUsers(
      response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last,
    );
    
  }
  useEffect(function(){
    
    getData()
    
  },[num])
  return (
    <div>
      <h1>{num}</h1>
       {users}
       <button onClick={()=>{
        setnum(num+1)
       }}>
        click here
       </button>
    </div>
  )
}

export default App