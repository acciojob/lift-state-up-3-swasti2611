import React from 'react'

const ChildComponent2 = (props) => {
    function handleClick(value){
        console.log(value)
        props.handleOption(value)
          }
        return (
          <div >
            <div style={{width:'900px',height:'200px',backgroundColor:'yellow',color:'black'}}>
                     <h1>Child Component 1</h1> 
                     <input type='button'  value="Option2"onClick={(e)=>handleClick(e.target.value)}/> 
            </div>
          </div>
        )
}

export default ChildComponent2
