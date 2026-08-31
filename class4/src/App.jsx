// import React from 'react'
// import Men from './components/Men';
// import Women from './components/Women';
// // import Navbar from './components/Navbar'

// const App = () => {
//   // return (
//     // <div className="text-5xl">
//     //   <Navbar
//     //     title="Achyuta"
//     //     color="red"
//     //     links={["Home", "About", "Accounts", "Contact"]}
//     //   />
//     //   <Navbar
//     //     title="Ashish"
//     //     color="blue"
//     //     links={["Home", "About", "Accounts", "Contact"]}
//     //   />
//     //   <Navbar
//     //     title="Rakesh" color="green" links={["Home", "About", "Accounts", "Contact"]}/>
//     // </div>
//     const user1 = {
//       name:"Achyuta",
//       age:21,
//       gender:'male',
//     }
//      const user2 = {
//        name: "Sai",
//        age: 22,
//        gender: "female",
//      };
//        const user3 = {
//          name: "Kid",
//          age: 6,
//          gender: "female",
//        };
//     return(
//     <div>
//      {user1.gender=='male'? user1.age>10? <Men/> : <Women/>:<Women/>}
//     </div>
//   );
// }

// export default App
import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button is Clicked');
    
  }
  return (
    <div>
      <button
      onClick={btnClicked} 
      className='active:scale-95 bg-emerald-500 text-white px-6 py-3 rounded font-bold m-2'>Click to Download
      </button>
    </div>
  )
}

export default App