import React from 'react'

const ChildComponent2 = (props) => {
    function handleClick(value){
        console.log(value)
        props.handleOption(value)
          }
        return (
          <div >
            <div style={{width:'900px',height:'200px',backgroundColor:'yellow',textAlign:'center',color:'black', marginLeft:'50px',marginTop:'50px'}}>
                     <h1>Child Component 1</h1> 
                     <button onClick={(e)=>handleClick(e.target.innerHTML)} >Option 2</button>
            </div>
          </div>
        )
}

export default ChildComponent2
