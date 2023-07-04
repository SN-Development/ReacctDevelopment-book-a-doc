import { useEffect, useState } from 'react'
import React from 'react'
import './SliderButton.css'
import Button from './button/Button'
import SuccessAlert from '../../succes_alert/SuccessAlert';

export default function SliderButton({loginError}) {
  
  return (
    <div className='slider-btn' id='welcome-side-btn'>
      <Button text="Make appointemnt" id="btn-1" loginError={loginError}></Button>
      <Button text="View department" id="btn-2"></Button>
      {/* {isLoginError?(<div className='login-error-alert-to-appontment'><SuccessAlert work="Appointment Submission" description='This time slot have already appointed. So please choose another time which you prefer' status='not-success'></SuccessAlert></div>):(<></>)} */}
    </div>
  )
}
