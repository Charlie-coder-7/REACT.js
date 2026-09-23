import React from 'react'
import { useState } from 'react';

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState("");
  return (
    <div className="nav">
      <h1>theme is {props.theme}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme)
        }}
      >
        <input
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
} 

export default Navbar