import React from 'react'
import Page from '../form_component/form_page/Page'
import SuccessAlert from '../component/succes_alert/SuccessAlert'
const img = './images/registerDoctor.png'
  const right = {
    theme: "Sign Up",

  }  

export default function RegisterPage() {
  return (
    <div id='register-page'>
      <Page  leftTheme="Join with us" bgImage={img} right={right} ></Page>
      <div id='register-success-alt' style={{visibility:'hidden',position:'absolute',top:'0'}}>
         <SuccessAlert work="Registration" description='Dear user, now you can login to your account with your username and password'  navigation='/'  status='success'></SuccessAlert>
      </div> 
    </div>
  )
}
