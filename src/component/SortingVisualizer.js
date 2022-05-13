import React, { useState,useEffect } from 'react'
import './SortingVisualizer.css';
import SortingAlgobubbles from './SortingAlgobubbles';
import Algoselection from './Algoselection';
import Button from '@material-ui/core/Button';
import { Slider } from '@material-ui/core';
import Algoinsertion from './Algoinsertion';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function SortingVisualizer() {
  const[val,setVal]=useState(Math.floor(Math.random() * 100));
  const[arr,setArr]=useState([]);
  const[dis,setDis]=useState(false);
  const Resetarray=()=>{
    setVal(Math.floor(Math.random() * 200))
    const Ar=Array.from({length:val},()=>
    Math.floor(Math.random() * 500)
    );
    setArr(Ar);
    setDis(false)
  }
  useEffect(()=>{
    const Ar=Array.from({length:val},()=>
    Math.floor(Math.random() * 500)
    );
    setArr(Ar);
  },[val]);

 
  const updateVal=(e,data)=>{
   setVal(data);
  }
  
  const Bubble =()=>{
  
    let [animations,unknown]=SortingAlgobubbles(arr);
    setDis(true)
   
     //console.log(animations);
    for(let i=0;i<animations.length;i++)
    {
      
      const arrayBars=document.getElementsByClassName('array-bar');
      const iscolorchange = (i%3===0)  || (i%3===1);
      if(iscolorchange===true)
      {
        
        const [barOneidx,barTwoidx,Threeidx,FourIdx]=animations[i];
        const barOnestyle=arrayBars[barOneidx].style;
        const barTwostyle=arrayBars[barTwoidx].style;
        const colour= (i%3===0) ? "yellow":"blue";
        setTimeout(()=>{
          barOnestyle.backgroundColor=colour;
          barTwostyle.backgroundColor=colour;

        },i*1)
      }
      else{
        
        const [barOneidx,barTwoidx,newHeight1,newHeight2]=animations[i];
        
        if(barOneidx===-1)
        {
          continue;
        }
        const barOnestyle=arrayBars[barOneidx].style;
        const barTwostyle=arrayBars[barTwoidx].style;
        setTimeout(()=>{
          
              //barTwostyle.transform ="translateX(-20px)";
             // barTwostyle.backgroundColor="green";
              barOnestyle.height=`${newHeight2}px`;
            
             // barOnestyle.transform ="translateX(20px)";
             // barOnestyle.backgroundColor="green";
              barTwostyle.height=`${newHeight1}px`;
          
            
              

        },i*1)
       
      }

    }
  }
    const SelectionSort=()=>{
      setDis(true)
      let [animations,unknown]=Algoselection(arr);
      for(let i=0;i<animations.length;i++)
      {
        const arrayBars=document.getElementsByClassName('array-bar');
        const[one,two,three]=animations[i];
        if(three===0)
        {
          const oneStyle=arrayBars[one].style;
          const twoStyle=arrayBars[two].style;
          const isColor=(i%2)===0?'pink':'blue';
          setTimeout(()=>{
            oneStyle.backgroundColor=isColor;
            twoStyle.backgroundColor=isColor;
          },i*1)
        }
        else{
          const[one,newHeight,three]=animations[i];
          const oneStyle=arrayBars[one].style;
          setTimeout(()=>{
            oneStyle.height=`${newHeight}px`;
          },i*1)
          
        }
      }
    }
    const insertionSort=()=>{
      setDis(true)
      let [animations,unknown]=Algoinsertion(arr);
      var j=0;
      for(let i=0;i<animations.length;i++)
      {
        const arrayBars=document.getElementsByClassName('array-bar');
        const[one,two,three]=animations[i];
        if(three===0)
        {
          const oneStyle=arrayBars[one].style;
          const twoStyle=arrayBars[two].style;
          const isColor=(j%2)===0 ?'pink':'blue';
          j++;
          setTimeout(()=>{
            oneStyle.backgroundColor=isColor;
            twoStyle.backgroundColor=isColor;
          },i*1)
        }
        else{
          const[one,newHeight,three]=animations[i];
          if(one===-1)
          {
            continue;
          }
          const oneStyle=arrayBars[one].style;
          setTimeout(()=>{
            oneStyle.height=`${newHeight}px`;
          },i*1)
          
        }
      }

    }

  return (
   
    
    <div className="array-container">
       <div className='button-class' style={{}}>
    <Button variant="contained" disabled={dis} onClick={insertionSort}>insertion-sort</Button>
    <Button variant="contained"style={{marginLeft:"20px"}} disabled={dis} onClick={SelectionSort}>selection-sort</Button>
    <Button variant="contained"style={{marginLeft:"20px"}} disabled={dis} onClick={Bubble}>bubble-sort</Button>
    <Button variant="contained"style={{marginLeft:"20px"}} onClick={Resetarray}>Reset</Button>

      <div style={{display:"flex"}}>
        <p>No.s in array</p>
      <Slider style={{top:"30px",}}onChange={updateVal} min={0}
       max={200} value={val} />
       <p>{val}</p>
      </div> 
    </div>
    <div className='bar-class'>
    {arr.map((value, idx) => (
      <div
        className="array-bar"
        key={idx}
        style={{
          backgroundColor:'blue',
          height: `${value}px`,
          transform:"translateX(0px)"
        }}></div>
        
    ))}
    </div>
    
   
    
   
    </div>

  )
}

export default SortingVisualizer