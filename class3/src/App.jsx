import React from 'react'
import Card from './components/Card'
import Button from './components/Button';

const App = () => {
  // let age = 21
  // let user = "Achyuta"
  // let arr = [10,20,30,40,50]
  return (
    // <div>
    //   {arr.map(function(elem){
    //     return <h1>{elem}</h1>
    //   })}
    // </div>
    // <div>
    //   {Card(10,20)}
    // </div>
    <div className="p-3 h-screen bg-black">
      <Card name="Achyuta" age="21" />
      <Card name="Achyuta" age="21" />
      <Card name="Achyuta" age="21" />
      <Card name="Achyuta" age="21" />

      <Button text='Hello Im Learning React'/>
    </div>
  );
}

export default App