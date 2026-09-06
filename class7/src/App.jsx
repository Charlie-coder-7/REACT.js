import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setuserName] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userRole, setuserRole] = useState('')
  const [userDesc, setuserDesc] = useState('')
  const [allUsers, setallUsers] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    const oldUsers = [...allUsers]
    oldUsers.push({userName,imageURL,userRole,userDesc})
    console.log(oldUsers);
    
    setallUsers(oldUsers)
    setuserName('')
    setimageURL('')
    setuserRole('')
    setuserDesc('')
  }
  const deleteHandler = (idx)=>{
      const copyUsers = [...allUsers]
      copyUsers.splice(idx,1)
      setallUsers(copyUsers)
  }
  return (
    <div className="h-screen bg-black text-white">
      <form
        className="px-2 py-2 flex flex-wrap"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[49%]"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={imageURL}
          onChange={(e) => {
            setimageURL(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[49%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value);
          }}
          className="border-2  text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[49%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[49%]"
          type="text"
          placeholder="Enter Description"
        />
        <button className="px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-blue-500 rounded m-2 w-[99%]">
          Create User
        </button>
      </form>
      <div className="px-4 py-4 gap-10 flex flex-wrap">
        {allUsers.map(function(elem,idx){
            return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
        })}
      </div>

    </div>
  );
};

export default App;
