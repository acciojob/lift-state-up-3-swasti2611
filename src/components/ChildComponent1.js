import React from 'react'

const ChildComponent1 = (props) => {
    function handleClick(value){
      console.log(value)
  props.handleOption(value)
    }
  return (
    <div >
      <div style={{width:'900px',height:'200px',textAlign:'center',backgroundColor:'orange',color:'black',marginLeft:'50px',marginTop:'50px'}}>
               <p >Child Component 1</p> 
               <button onClick={(e)=>handleClick(e.target.innerHTML)}>Option 1</button> 
      </div>
    </div>
  )
}

export default ChildComponent1
