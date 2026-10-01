import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setnum] = useState('')
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input value={num} type="number" onChange={(e)=>{
        setnum(e.target.value) 
      }} />
      <button onClick={()=>{
        dispatch(incrementByAmount(Number(num)))
      }}>
        Increment by amount
      </button>
    </div>
  );
};

export default App;
