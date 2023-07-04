import React, { useEffect, useState } from 'react'
import './NewBar.css' 
import { Link, useNavigate } from 'react-router-dom'
import User from './user/User'
import Department from './departmets/Department'
import {AiOutlineMenu,AiOutlineClose  } from 'react-icons/ai';
import logo from './images/logo (2).png'
import SideBar from '../sidebar/SideBar'




export default function NavBar({user,isLogged,setIsMenuBtnClicked}) {
  
  //to set true or false when clicked menu
  const [isClickedMenuBar, setISClickedMenuBar] = useState(false)

  //handle the side bar according to the menu clicked
  const handleMenuBar = ()=>{
    if(!isClickedMenuBar){
      setISClickedMenuBar(true) //for change icon
      setIsMenuBtnClicked(true) //for sidebar
    }
    else{
      setISClickedMenuBar(false)
      setIsMenuBtnClicked(false)
      setTimeout(() => {
        
      }, 700);
    }
  }
  return (
    
    
         <div>  
            <div className="nav-bar"  id="nav-bar">
                
                <div className='menu-bar' onClick={handleMenuBar}>
                  {isClickedMenuBar?(<AiOutlineClose size={25}></AiOutlineClose>):(<AiOutlineMenu size={25}></AiOutlineMenu>)}
                </div>
                
                <div className="logo" id="logo">
                   <img src={logo} className='logo-img'></img>
                </div>
                

               
                <div className="nav-componenets">
                    <ul className="nav-ul">
                        <li className="nav-list">
                            <a href="" className="nav-link" id="nav-link-active">Home</a>
                        </li>
                        <li class="nav-list">
                            <a href="#about-us" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-list">
                            <a href="#why-choosing" className="nav-link">About</a>
                        </li>
                        <li className="nav-list" id='department-link'>
                            <a href="" className="nav-link" >Department
                            </a>
                            <div className='dpt'>
                                  <Department></Department>
                            </div>
                        </li>
                        <li className="nav-list">
                           
                            {isLogged?
                               (<div className='user'>
                                  {user[0]}
                                  <User logged={isLogged}></User>
                                  
                               </div>)
                               :<a href="/login"  className='nav-link'>Login</a>}
                        </li>
                    </ul>
                </div>
                

            </div>
            <div>
              <SideBar isClicked={isClickedMenuBar}></SideBar>
            </div>
       </div>
    
  )
}
