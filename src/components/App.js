
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption,setselectedOption]=useState(" ")

  function handleOption(value){
    setselectedOption(value)
  }
  return (
    <div>
      <ChildComponent1 handleOption={handleOption}/>
      
      <div>
      <div>
      <ChildComponent2 handleOption={handleOption}/>
      </div>
        selected Option:{selectedOption}
      </div>
    </div>

  )
}

export default App
