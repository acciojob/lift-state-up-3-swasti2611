import React from 'react'

const ChildComponent1 = (props) => {
    function handleClick(){
      console.log(props.value)
  props.handleOption(props.value)
    }
  return (
    <div >
      <div style={{width:'900px',height:'200px',textAlign:'center',backgroundColor:'orange',color:'black',marginLeft:'50px',marginTop:'50px'}}>
               <h1 >Child Component 1</h1> 
               <button onClick={handleClick}>{props.value}</button> 
      </div>
    </div>
  )
}

export default ChildComponent1
