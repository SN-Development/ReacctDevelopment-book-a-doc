import React, { useEffect, useState } from 'react'
import './HText.css'

export default function HText(props) {
  let {id} = props;

 
  const [headingText01, setHeadingText01] = useState("Welcome To");
  const [headingText02, setHeadingText02] = useState("Book-A-Doc");
  //const [textNumber, setTextNumber] = useState(1);

  useEffect(()=>{
    const headText01 = ["Welcome To","We Care","Helping Your"];
    const headText02 = ["Book-A-Doc","About Your Health","Stay Happy One"];
    let textNumber = 1
    const interval = setInterval(()=>{
      setHeadingText01(headText01[textNumber]);
      setHeadingText02(headText02[textNumber]);
      textNumber = textNumber+1
      if(textNumber===3)
      {
         textNumber=0;
      }
      //console.log("heading is "+headingText);
    }
    ,5000);
    return()=> clearInterval(interval);
  }

  ,[]);
  
  return (
     <div className='htext' style={id==="text-01"? {color:'blue'}:{color:'black'}} id={id}>
         {id==="text-01"?headingText01:headingText02}
     </div>
  )
}

