import React from 'react'

export default function FormValidation(email,password,confirmPassword) {
    let error = {
        email:'',
        pwd :'',
        cfm :''
      } 
      const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
      const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
      
      if(email==='')
      {
        error.email = 'Plese provide the username'
      }
      else if(!email_pattern.test(email)){
        error.email = "This email is invalid"
      }
      else{
        error.email = 'No error'
      }
    
      if(password==='')
      {
        error.pwd = 'Plese provide the password'
      }
      else if(!password_pattern.test(password)){
        error.pwd = "This password is invalid"
      }
      else{
        error.pwd = 'No error'
      }
      if(confirmPassword==='' && password!=='')
      {
        error.cfm = "Please fill this filed"
      }
      else{
        error.cfm = "No error"
      }
      return (
        error
      )
}
