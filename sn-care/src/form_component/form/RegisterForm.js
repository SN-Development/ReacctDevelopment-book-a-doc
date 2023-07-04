import React, { useState } from 'react'
import './RegisterForm.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import FormValidation from './FormValidation'
import SuccessAlert from '../../component/succes_alert/SuccessAlert'

export default function RegisterForm() {

  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const nevigate = useNavigate()
  
  //to get the erros
  const [errors, setErrors] = useState([])
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false)

  //to set classs when input has errors
  const[emailInvalid,setEmailInavalid] = useState("")
  const[passwordInvalid,setPasswordInavalid] = useState("")
  const[confirmPasswordInvalid,setConfirmPasswordInavalid] = useState("")

  //to get input of the form
  const getUserName = (event)=>{
     
     setUserName(event.target.value)
     const msg = document.getElementById('email-insturction')
     const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
     console.log(userName.length)
     if((!email_pattern.test(userName)) && (event.target.value.length>=1)){
       msg.style.visibility = 'visible'
     }
     else{
      setTimeout(()=> msg.style.visibility = 'hidden',1000)
     }
     //msg.style.visibility = 'visible'
     //setInterval(()=>msg.style.opacity='0',2000)
     console.log(userName)
  }

  const getPassword = (event)=>{
    setPassword(event.target.value)
    const msg = document.getElementById('password-insturction')
    const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    if((!password_pattern.test(password))&& (event.target.value.length>0 && event.target.value.length<7)){
      msg.style.visibility = 'visible'
    }
    else{
     setTimeout(()=> msg.style.visibility = 'hidden',1000)
    }
    //console.log(password)
 }

 const getConfirmPassword = (event)=>{
  setConfirmPassword(event.target.value)
  const msg = document.getElementById('confirm-password-insturction')
  if((event.target.value !== password))
  {
    msg.style.visibility = 'visible'
  }
  else{
    setTimeout(()=> msg.style.visibility = 'hidden',1000)
  }
  // if((password !== confirmPassword) && (password.length>1)){
  //   msg.style.visibility = 'visible'
  // }
  // else{
  //   setTimeout(()=> msg.style.visibility = 'hidden',1000)
  // }
  console.log(password)
  console.log(confirmPassword)
}

const submitFormInputs = (event)=>{
  setIsSubmitted(true)
  event.preventDefault()
  let tempError = errors
  tempError = FormValidation(userName,password,confirmPassword)
  console.log(tempError.email)
  setErrors(tempError)
  //When email has an error
  if(tempError.email !== 'No error')
  {
     setIsEmailError(true)
     setEmailInavalid("invalid-popup")
     setTimeout(()=>setEmailInavalid("hide"),3000)
  }
  else{
     setIsEmailError(false)
  }
  if(tempError.pwd !== 'No error')
  {
     setIsPasswordError(true)
     setPasswordInavalid("invalid-popup")
     setTimeout(()=>setPasswordInavalid("hide"),3000)
  }
  else{
     setIsPasswordError(false)
  }
  if(tempError.cfm !== 'No error'){
    setIsConfirmPasswordError(true)
    setConfirmPasswordInavalid("invalid-popup")
    setTimeout(()=>setConfirmPasswordInavalid("hide"),3000)
  }
  else{
    setIsConfirmPasswordError(false)
  }
 
  if(((!isEmailError)&&(!isPasswordError)&&(!isConfirmPasswordError))&&((userName!=='')&&(password!=='')&&(confirmPassword!==''))){
    
    Axios.post('http://localhost:3008/api/register',{
      userName:userName,
      password:password,
    }).then(res=>{
      //console.log(res)
      setUserName('')
      setPassword('')
      setConfirmPassword('')
      //document.getElementById('register-success-alt').style.visibility = 'visible'
      //nevigate('/success-alert')
    })
    // setUserName("")
    // setPassword("")
    // setConfirmPassword("")
  }
  setIsSubmitted(false)
}

const goToSignIn = ()=>{
  nevigate('/login')
  //setTimeout(()=>nevigate('/login'),2000)
}

  return (
    <div className='signup-form'>

      <p className='signup-text'>Sign Up</p>

      <div className='user-input' id='email-input'>
        <label>UserName</label>
        <input onChange={getUserName} className='input' value={userName} type='text' placeholder='Enter email' ></input>
        {isEmailError?(<p className={emailInvalid}>{errors.email}</p>):(<></>)}
      </div>

      <div className='user-input'>
        <label>Password</label>
        <input onChange={getPassword} className='input' value={password} type='password' placeholder='Enter password'></input>
        {isPasswordError?(<p className={passwordInvalid}>{errors.pwd}</p>):(<></>)}
      </div>

      <div className='user-input'>
        <label>Confirm Password</label>
        <input onChange={getConfirmPassword} className='input' value={confirmPassword} type='password' placeholder='Re-enter password'></input>
        {isConfirmPasswordError?(<p className={confirmPasswordInvalid}>{errors.cfm}</p>):(<></>)}
      </div>

      <form className='login-btn' onSubmit={submitFormInputs}>
        <button className='btn'>Sign Up</button>
      </form>

      <div className='already-account'>
         <p className='text'>Already have an account </p>
         <p className='create-account' onClick={goToSignIn}>Sign in</p>
      </div>
     
      <div className='user-instruction' id='email-insturction'  >
         Enter valid email as the username
      </div>
      <div className='user-instruction' id='password-insturction'  >
        Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters
      </div>
      <div className='user-instruction' id='confirm-password-insturction'  >
        This is not match with password
      </div>

         

    </div>
  
  )
}
