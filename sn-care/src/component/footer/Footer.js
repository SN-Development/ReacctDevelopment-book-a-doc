import React, { useEffect } from 'react'
import './Footer.css'
import callImgIcon from './images/Call (1).png'
import mailImgIcon from './images/Mail (1).png'
import twiterImgIcon from './images/Twiter.png'
import instaImgIcon from './images/Insta.png'
import fbImgIcon from './images/Fb.png'

export default function Footer() {
    const width = window.innerWidth
    useEffect(()=>{
        const handleScroll = ()=>{
        let newScrollTop = window.pageYOffset; //to get current scrolltop value
        let screenWidth = window.innerWidth
        
        if(newScrollTop>3200 && screenWidth>1100)
         {
          //document.body.style.backgroundColor = "red"; 
          document.getElementById("footer").classList.remove("footer")
          document.getElementById("footer").classList.add("new-footer")
        }

       else if(newScrollTop>2100 && (screenWidth>800 && screenWidth<=1099)){
          document.getElementById("footer").classList.remove("footer")
          document.getElementById("footer").classList.add("new-footer")
       }

       else if(newScrollTop>1500 && (screenWidth>500 && screenWidth<=800)){
          document.getElementById("footer").classList.remove("footer")
          document.getElementById("footer").classList.add("new-footer")
      }
      else if(newScrollTop>2100 && (screenWidth<=500)){
         document.getElementById("footer").classList.remove("footer")
         document.getElementById("footer").classList.add("new-footer")
     }
       else{
         //document.body.style.backgroundColor = "";
         document.getElementById("footer").classList.remove("new-footer");
         document.getElementById("footer").classList.add("footer");
      }
    }
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    } 
    ,[])
  return (
    <div className='footer' id='footer'>
      <div className='about-site'>
        <img src='logo (2).png'  width={width>500?'70%':'50%'}style={width>600?{marginLeft:'-1vw',marginBottom:'5vh'}:{marginLeft:'-1vw',marginBottom:'5vh'}}></img>
        <p className='about-text'>"Your health is our <br></br>top priority.<br></br> Book an appointment today <br></br>and let us <br></br>take care of you"</p>
      </div> 
      <div className='details-for-user'>

        <div className='contact-details'>
            <div className='contact-type'>
               <img src={callImgIcon} style={width>600?{height:'5vh'}:{height:'50%',width:'35%'}}></img>
               <p className='contact-text'>+94 76 23-45-567</p>
            </div>
            <div className='contact-type'>
               <img src={mailImgIcon} style={width>600?{height:'5vh'}:{height:'50%',width:'35%'}}></img>
               <p className='contact-text'>supportdoc@gmail.com</p>
            </div>
            <div className='contact-type'>
               <img src={twiterImgIcon} style={{height:'2.5vh',marginLeft:'10%'}}></img>
               <img src={instaImgIcon} style={{height:'2.5vh',marginLeft:'10%'}}></img>
               <img src={fbImgIcon} style={{height:'2.5vh',marginLeft:'10%'}}></img>
            </div>
        </div>

        <div className='opening-details'>
           <p className='opening-title'>Opening Hours</p>
           <p className='opening-text'>We are open 24/7</p>
        </div>
        
        <div className='user-browser'>
        <div className='user-links'>
           <p className='link-title'>Explore</p>
           <a href='#' className='footer-user-links'>Home</a>
           <a href='#' className='footer-user-links'>Department</a>
           <a href='#' className='footer-user-links'>About</a>
           <a href='#' className='footer-user-links'>Contact</a>
           <a href='#' className='footer-user-links'>Log in</a>
        </div>

        <div className='user-links'>
           <p className='link-title'>Departments</p>
           <a href='#' className='footer-user-links'>Home</a>
           <a href='#' className='footer-user-links'>Department</a>
           <a href='#' className='footer-user-links'>About</a>
           <a href='#' className='footer-user-links'>Contact</a>
           <a href='#' className='footer-user-links'>Log in</a>
        </div>
        <div className='subcribe-part'>
           <p className='link-title'>Subcribe Us !</p>
           <input type='text' placeholder='Enter your email' className='subscribe-input'></input>
           <input type='submit' value='Submit' className='subscribe-input'></input>
        </div>
        </div> 
        <div className='m-subcribe-part'>
           <p className='link-title'>Subcribe Us !</p>
           <input type='text' placeholder='Enter your email' className='subscribe-input'></input>
           <input type='submit' value='Submit' className='subscribe-input'></input>
        </div>
      </div>

    </div>
  )
}
