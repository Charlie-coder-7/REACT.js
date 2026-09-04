// import React from 'react'

// const App = () => {
//   const submitHandler=(e)=>{
//     e.preventDefault();
//     console.log("form submitted");

//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e);
//       }}>
//         <input type="text" placeholder='Enter your name'/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState('')
  const [allusers, setallusers] = useState([])
   const formHandler = (e) => {
     e.preventDefault();
    //  const newAllusers = [...allusers]
    //  newAllusers.push(name)
    //  console.log(newAllusers); 
    //  setallusers(newAllusers)
    const oldUsers = [...allusers]
    oldUsers.push({name,email})
    setallusers(oldUsers)
    console.log(oldUsers);
    
     setname("");
     setemail("");
   };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          required
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
      {allusers.map(function (elem,idx) {
        return (
          <div key={idx}>
            <h1>{elem.name}</h1>
            <h1>{elem.email}</h1>
          </div>
        )
      })}
    </div>
  );
};

export default App;
