
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  let value1="Option1";
  let value2="Option2"
  const [selectedOption,setselectedOption]=useState(" ")

  function handleOption(value){
    setselectedOption(value)
  }
  return (
    <div className="parent" >
    <h1>Parent Component</h1>
    <div>
      <ChildComponent1 handleOption={handleOption} value={value1}/>
      
      <div>
      <div>
      <ChildComponent2 handleOption={handleOption} value={value2}/>
      </div>
        <h3>selected Option:{selectedOption}</h3>
      </div>
    </div>
</div>
  )
}

export default App
