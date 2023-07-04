import React, { useEffect, useState } from 'react'
import './SideBar.css'
import logo from './images/logo (2).png'

export default function SideBar({isClicked}) {
  const [sideBarStyle, setSideBarStyle] = useState('hide-side-bar')
  
  useEffect(()=>{
    if(isClicked){
        setSideBarStyle('display-side-bar')
        //alert("true")
    }
    else{
        setSideBarStyle('hide-side-bar')
        //alert("false")
    }
  },[isClicked])
  return (
    <div className={sideBarStyle} id='side-bar'>
      <div className='logo-part'>
         <img src={logo} width='60%'></img>
      </div>
      <div className='navigation-links'>
         <ul className='slide-bar-links'>
            <li className='slide-bar-link'><a href='/'>Home</a></li>
            <li className='slide-bar-link'><a href='/'>Department</a></li>
            <li className='slide-bar-link'><a href='#why-choosing'>About</a></li>
            <li className='slide-bar-link'><a href='#contact-us'>Contact</a></li>
            <li className='slide-bar-link'><a href='/login'>Login</a></li>
         </ul>
      </div>
    </div>
  )
}
