// import React from 'react'

// const Card = (a,b) => {
   
//     return (
//     // <div>This is card {a+b} </div>
//   )
// }

// export default Card
import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white border-2 border-red-500 rounded px-5 py-3 w-fit'>
        <h1 className='text-2xl font-semibold'>{props.name},{props.age}</h1>
    </div>
  )
}

export default Card