import { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [userRole, setuserRole] = useState("");
  const [userDesc, setuserDesc] = useState("");
  // const [allUsers, setallUsers] = useState([]);

  const localData = JSON.parse(localStorage.getItem('all-users'))||[]

  const [allUsers, setallUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({ userName, imageURL, userRole, userDesc });
    localStorage.setItem('all-users',JSON.stringify(oldUsers))
    setallUsers(oldUsers);
    setuserName("");
    setimageURL("");
    setuserRole("");
    setuserDesc("");
  };
  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];
    const conf = confirm("Are you really want to delete")
    if(conf){
    copyUsers.splice(idx, 1);
    }
    else
    {
      alert('element not deleted')
    }

    setallUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));

  };
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
      {allUsers.map(function(elem,idx){
        return (
          <div key={idx} className="lg:w-[22vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black m-1.5">
            <img
              className="h-24 w-24 object-center object-cover rounded-full "
              src={elem.imageURL}
            />
            <h1 className="text-2xl mt-2 font-semibold">
              {elem.userName}
            </h1>
            <h5 className="text-base text-blue-500 font-semibold my-2">
              {elem.userRole}
            </h5>
            <p className="text-sm font-medium leading-tight">
              {elem.userDesc}
            </p>
            <button
              onClick={function () {
                deleteHandler(idx);
              }}
              className="px-4 py-2 rounded bg-red-700 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3 "
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
