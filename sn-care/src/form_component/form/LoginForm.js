import React,{useState,} from 'react'
import './RegisterForm.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import FormValidation from './FormValidation'

export default function LoginForm(props) {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    //const [respond,setRespond] = useState("")
    const nevigate = useNavigate()

    //to get errors
    const [error, setError] = useState("")
    const [isUserNameError, setISUserNameError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    
    //to add invalid pop up when input has error
    const[userNameInvalid,setUserNameInavalid] = useState("")
    const[passwordInvalid,setPasswordInavalid] = useState("")
    const[inavalidUserPopUp,setInvalidUserPopUp] = useState("hide")

    //to inavlid authentication popup
    //const [isInvalidUser, setIsInvalidUser] = useState(false)

    //to get input of the form
    const getUserName = (event)=>{
       setUserName(event.target.value)
       console.log(userName)
    }
    const getPassword = (event)=>{
      setPassword(event.target.value)
      console.log(password)
   }
  
  Axios.defaults.withCredentials = true;
  const submitFormInputs = (event)=>{

    event.preventDefault()
    let tempError = error
    tempError = FormValidation(userName,password)
    console.log(tempError)
    setError(tempError)
    //let authenticationError = false

    if(tempError.email !== 'No error')
    {
       setISUserNameError(true)
       setUserNameInavalid("invalid-popup")
       setTimeout(()=>setUserNameInavalid("hide"),3000)
       
    }
    else{
       setISUserNameError(false)
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
   if(((!isUserNameError)&&(!isPasswordError)) &&((userName!=='')&& (password!==''))){
        Axios.post('http://localhost:3008/api/login',{
        userName:userName,
        password:password,
      }).then(response=>{
        //alert("success") 
            if(response.data.Status === 'Success'){
              //setUser(userName)
              setUserName('')
              setPassword('')
              console.log(response.data)
              nevigate('/loading')
              setTimeout(()=>nevigate('/'),3000)
            }
            else{
              setInvalidUserPopUp('invalid-user-popup')
              setTimeout(()=> setInvalidUserPopUp('invalid-user-hide'),3000)
            }
            
        })
   }
 
    
  }
  const goToSignUp = ()=>{
    nevigate('/register')
    //setTimeout(()=>nevigate('/register'),2000)
  }

  return (
    <div className='signup-form'>

      <p className='signup-text'>Sign In</p>

      <div className='user-input'>
        <label>Username</label>
        <input onChange={getUserName} className='input'  type='text' placeholder='Enter email'></input>
        {isUserNameError?(<p className={userNameInvalid}>{error.email}</p>):(<></>)}
      </div>

      <div className='user-input'>
        <label>Password</label>
        <input onChange={getPassword} className='input'  type='password' placeholder='Enter password'></input>
        {isPasswordError?(<p className={passwordInvalid}>{error.pwd}</p>):(<></>)}
      </div>

      <form className='login-btn' onSubmit={submitFormInputs}>
        <button className='btn'>Sign In</button>
      </form>
      <div className='already-account'>
         <p className='text'>Create an account </p>
         {/* <a href='#' className='create-account' style={{color:'blue',textDecoration:'none',marginLeft:'5%',marginTop:'-1%'}}>Sign up</a> */}
         <p className='create-account' onClick={goToSignUp}>Sign up</p>
         {/* <Link to='/register' >Sign up</Link> */}
      </div>
     
      
      <div className={inavalidUserPopUp}>
         Authentication failed
      </div>
      
         

    </div>
  )
}
