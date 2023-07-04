import React, { useState } from 'react'
import './WelcomeSlide.css'
import TextComponent from './text_component/TextComponent'
import SliderButton from './button_component/SliderButton'
import SuccessAlert from '../succes_alert/SuccessAlert'

export default function WelcomeSlide({user}) {
  const [isLoginError,setIsLoginError] = useState(false)
  return (
   <div>
    <div className='image-slider' id='image-slider'>
      <TextComponent></TextComponent>
      <SliderButton loginError={setIsLoginError}></SliderButton>
      {/* <div id="nav-side-bar">
         
      </div> */}
     
    </div>
     <div style={{position:'absolute',top:'10vh',left:'0vw'}}>
     {isLoginError?(<SuccessAlert work="User Login" description='Before make an appointment, you should login your account' status='not-success'></SuccessAlert>):(<></>)}
     </div>
   </div>  
  )
}
