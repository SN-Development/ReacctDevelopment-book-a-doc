import React from 'react'
import './Window.css'
import RightPart from '../right_part/RightPart'
import LeftPart from '../left_part/LeftPart'


export default function Window({left,right,user}) {
  //console.log(left.theme)
  return (
    <div className='window'>
     
      {/* <LeftPart leftTheme={leftTheme} bgImage={bgImage}></LeftPart> 
    */}
      <LeftPart  lTheme={left.theme} bgImg={left.img} height={"100%"} ></LeftPart>
      <RightPart user={user} right={right}></RightPart>
    </div>
  )
}
