import React from 'react'
import Page from '../form_component/form_page/Page'
const img = './images/login-doctor.png' 
  const right = {
    theme: "Sign In",

  }   

export default function Login({user}) {
  return (
    <div>
      <Page  user={user} leftTheme="Welcome" bgImage={img} right={right}></Page>
    </div>
  )
}
