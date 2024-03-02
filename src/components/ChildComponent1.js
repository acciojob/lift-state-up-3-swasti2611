import React from 'react'

const ChildComponent1 = (props) => {
    function handleClick(value){
  console.log(value)
  props.handleOption(value)
    }
  return (
    <div >
      <div style={{width:'900px',height:'200px',backgroundColor:'orange',color:'black'}}>
               <h1>Child Component 1</h1> 
               <input type='button'  value="Option1"onClick={(e)=>handleClick(e.target.value)}/> 
      </div>
    </div>
  )
}

export default ChildComponent1
