import React, { useState } from 'react'
import './NewBar.css' 
import User from './user/User'
import Department from './departmets/Department'
import {AiOutlineMenu,AiOutlineClose  } from 'react-icons/ai';
import logo from './images/logo (2).png'
import SideBar from '../sidebar/SideBar'
import { Link, useLocation} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'




export default function NavBar({user,isLogged}) {

  const location = useLocation()
  const currentPath = location.pathname

  let currentHash = window.location.hash
  
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

  const handleContact = ()=>{
    document.getElementById('contact-us').style.top = '70vh'
    //alert(currentHash)
  }

  const handleAbout = ()=>{
    document.getElementById('why-choosing').style.top = '45vh'
  }
  
  const goToUp = ()=>{
    currentHash = ''
    // alert(currentHash)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // const handleDepartment = ()=>{
  //   document.getElementById('department-container').style.top = '10vh'
  // }

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
                    <ul className="nav-ul" style={currentPath!=='/'?{marginRight:'8%',justifyContent:'right'}:{}}>
                        <li className="nav-list">
                           <div className='nav-link'>
                              <Link to='/' className={currentPath==='/' && currentHash === '' ?'link nav-link-active':'link'} >Home</Link>
                           </div>
                        </li>

                        {
                        currentPath==='/'?(<li class="nav-list">
                           <div className='nav-link'>
                              <HashLink className={currentHash==='#contact-us'?'link nav-link-active':'link'} to='#contact-us' onClick={handleContact}>Contact</HashLink>
                           </div>  
                        </li>):(<></>)
                        }

                        {
                        currentPath==='/'?(<li className="nav-list">
                        <div className='nav-link'>
                            <HashLink className={currentHash==='#why-choosing'?'link nav-link-active':'link'} to='#why-choosing' onClick={handleAbout}>About</HashLink> 
                        </div>
                        </li>):(<></>)
                        }

                        <li className="nav-list" id='department-link'>
                            <div className='nav-link'>
                              <Link to='/department' className={currentPath==='/department'?'link nav-link-active':'link'} >Department</Link>
                            </div>
                            {/* <div className='dpt'>
                                  <Department></Department>
                            </div> */}
                        </li>

                        <li className="nav-list">
                           
                            {isLogged?
                               (<div className='user'>
                                  {user[0]}
                                  <User logged={isLogged}></User>  
                               </div>)
                               :<div className='nav-link'><Link to='/login' className='link'>Log in</Link></div>}
                        </li>
                    </ul>
                </div>
                
               {isLogged && window.innerWidth<=500?
                 (<div className='user'>
                    {user[0]}
                   
                 </div> ):(<></>)
              }

            </div>

            <div>
              <SideBar isClicked={isClickedMenuBar}></SideBar>
            </div>
            
            <div className='go-up' onClick={goToUp}>
              ^
            </div>

       </div>
    
  )
}
