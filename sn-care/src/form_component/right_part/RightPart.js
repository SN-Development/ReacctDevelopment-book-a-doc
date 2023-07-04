import React from 'react'
import './RightPart.css'
import RegisterForm from '../form/RegisterForm'
import LoginForm from '../form/LoginForm'

export default function RightPart({right,user}) {
  
  return (
    <div className='right-part'>
      {right.theme==="Sign Up"?<RegisterForm></RegisterForm>:<LoginForm user={user}></LoginForm>}
       {/* <RegisterForm></RegisterForm> */}
    </div>
  )
}
