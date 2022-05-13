import { Button } from '@material-ui/core';
import React, { useState } from 'react'

function Transitions() {
    //const [topval,setTopval]=useState(10);
    const [xval,setXval]=useState(0);
    //const [leftval2,setLeftval2]=useState(200);
    const changepos=()=>{
        setTimeout(()=>{
            setXval(300)
            
        },10)
        
    }
  return (
      <div style={{display:"flex",backgroundColor:"blue"}}>
          <div style={{marginLeft:"200px",
          width:"100px",
          backgroundColor:'green',
          transform:`translateX(${xval}px)`}}>div 1
          </div>
          <div style={{marginLeft:"200px",
          width:"100px",backgroundColor:'red',
          transform:`translateX(${-xval}px)`
          }}>div 2
          </div>
          <Button variant='constrained' onClick={changepos}> swap</Button>
      </div>
    
  )
}

export default Transitions