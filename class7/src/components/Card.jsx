import React from 'react'

const Card = (props) => {
  return (
    <div
      className="lg:w-[22vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black m-1.5"
    >
      <img
        className="h-24 w-24 object-center object-cover rounded-full "
        src={props.elem.imageURL}
      />
      <h1 className="text-2xl mt-2 font-semibold">{props.elem.userName}</h1>
      <h5 className="text-base text-blue-500 font-semibold my-2">
        {props.elem.userRole}
      </h5>
      <p className="text-sm font-medium leading-tight">{props.elem.userDesc}</p>
      <button
        onClick={function () {
          props.deleteHandler(props.idx);
        }}
        className="px-4 py-2 rounded bg-red-700 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3 "
      >
        Remove
      </button>
    </div>
  ); 
}

export default Card