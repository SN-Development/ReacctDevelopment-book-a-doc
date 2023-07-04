import React from 'react'
import './Page.css'
import Window from '../window/Window'
import { useNavigate } from 'react-router-dom'


export default function Page({leftTheme,bgImage,right,user}) {

  const left_Part = {
    theme:leftTheme,
    img : bgImage
  }

  const nevigate = useNavigate()
  const goToHome = ()=>{
    nevigate('/loading')
    setTimeout(()=>nevigate('/'),2000)
  }
  console.log(right)
  return (
    <div className='page'>
      <p className='go-home' onClick={goToHome}>Home</p>
      <Window left={left_Part} right={right} user={user}></Window>
    </div>
  )
}
