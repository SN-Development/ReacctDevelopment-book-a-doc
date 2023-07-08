import React, { useState } from 'react'
import './NewBar.css' 
import User from './user/User'
import Department from './departmets/Department'
import {AiOutlineMenu,AiOutlineClose  } from 'react-icons/ai';
import logo from './images/logo (2).png'
import SideBar from '../sidebar/SideBar'
import { Link } from 'react-router-dom';




export default function NavBar({user,isLogged}) {
  
  //to set true or false when clicked menu
  const [isClickedMenuBar, setISClickedMenuBar] = useState(false)

  //handle the side bar according to the menu clicked
  const handleMenuBar = ()=>{
    if(!isClickedMenuBar){
      setISClickedMenuBar(true) //for change icon
      //setIsMenuBtnClicked(true) //for sidebar
    }
    else{
      setISClickedMenuBar(false)
     // setIsMenuBtnClicked(false)
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
                   <img src={logo} alt='nav-logo' className='logo-img'></img>
                </div>
                

               
                <div className="nav-componenets">
                    <ul className="nav-ul">
                        <li className="nav-list">
                           <div className='nav-link nav-link-active'>
                              <Link to='/' style={{textDecoration:'none'}}>Home</Link>
                           </div>
                        </li>
                        <li class="nav-list">
                           <div className='nav-link'>
                              <Link to='/login' style={{textDecoration:'none'}}>Contact</Link>
                           </div>  
                        </li>
                        <li className="nav-list">
                            <div className='nav-link'>
                              <Link to='/login' style={{textDecoration:'none'}}>About</Link>
                            </div>
                        </li>

                        <li className="nav-list" id='department-link'>
                            <div className='nav-link'>
                              <Link to='/login' style={{textDecoration:'none'}}>Department</Link>
                            </div>
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
                               :<div className='nav-link'><Link to='/login' style={{textDecoration:'none'}}>Log in</Link></div>}
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
