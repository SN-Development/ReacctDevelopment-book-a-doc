import React, { useEffect, useState } from 'react'
import './SideBar.css'
import logo from './images/logo (2).png'
import { Link, useLocation } from 'react-router-dom'

export default function SideBar({isClicked}) {
  const [sideBarStyle, setSideBarStyle] = useState('hide-side-bar')
  const [isNavLinkNumber,setIsNavLinkNumber] = useState(null)
  
  const location = useLocation()
  const currentPath = location.pathname

  const handleNavItem = (index)=>{
     //alert(currentPath)
     setIsNavLinkNumber(index)
     //setSideBarStyle('hide-side-bar')
     //document.getElementById('home-content').style.opacity = '1'
  }

  useEffect(()=>{
    if(isClicked){
        setSideBarStyle('display-side-bar')
        //document.getElementById('home-content').style.backgroundColor = 'black'
        document.getElementById('home-content').style.opacity = '0.5'
        //alert("true")
    }
    else{
        setSideBarStyle('hide-side-bar')
        document.getElementById('home-content').style.opacity = '1'
        //alert("false")
    }
  },[isClicked])
  return (
    <div className={sideBarStyle} id='side-bar'>
      <div className='logo-part'>
         <img src={logo} width='60%' alt='side-bar-logo'></img>
      </div>
      <div className='navigation-links '>
         <ul className='slide-bar-links'>

            <li className={(isNavLinkNumber === null || isNavLinkNumber === 1) && currentPath ==='/'?'slide-bar-link-active':'slide-bar-link'} 
              onClick={()=>handleNavItem(1)}>
              <Link className={(isNavLinkNumber === null || isNavLinkNumber === 1) && currentPath ==='/'?'s-b-link-active':'s-b-link'} to='/'>Home</Link>
            </li>

            <li className={isNavLinkNumber === 2 && currentPath ==='/'?'slide-bar-link-active':'slide-bar-link'} 
              onClick={()=>handleNavItem(2)}>
              <Link className={isNavLinkNumber === 2 ?'s-b-link-active':'s-b-link'} to='/'>About</Link>
            </li>

            <li className={isNavLinkNumber === 3 && currentPath ==='/'?'slide-bar-link-active':'slide-bar-link'} 
              onClick={()=>handleNavItem(3)}>
              <Link className={isNavLinkNumber === 3 && currentPath ==='/' ?'s-b-link-active':'s-b-link'} to='/'>Contact</Link>
            </li>

            <li className={isNavLinkNumber === 4 && currentPath ==='/'?'slide-bar-link-active':'slide-bar-link'} 
              onClick={()=>handleNavItem(4)}>
              <Link className={isNavLinkNumber === 4 && currentPath ==='/'?'s-b-link-active':'s-b-link'} to='/'>Department</Link>
            </li>

            <li className={isNavLinkNumber === 5 && currentPath ==='/' ?'slide-bar-link-active':'slide-bar-link'} 
              onClick={()=>handleNavItem(5)}>
              <Link className={isNavLinkNumber === 5 && currentPath ==='/'?'s-b-link-active':'s-b-link'} to='/login'>Login</Link>
            </li>

         </ul>
      </div>
    </div>
  )
}
