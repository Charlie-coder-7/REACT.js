// import React, { useState } from 'react'
// import axios from 'axios'
// const App = () => {
//   const [allData, setallData] = useState([])
//   async function getData(){
//   const response = await axios.get('https://fakestoreapi.com/users')
//   setallData(response.data)
  
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get data</button>
//       {allData.map((elem,idx)=>{
//         return <h1 key={idx}>{elem.username}{idx+1}</h1>
//       })}
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import axios from 'axios'
import User from './components/User'
const App = () => {
  const [allData, setallData] = useState([])
  async function getData(){
  const response = await axios.get('https://fakestoreapi.com/users')
  setallData(response.data)
  
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div className='allCards'>
        {allData.map((elem, idx) => {
          return (
            <div key={idx}>
              <User elem={elem}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App