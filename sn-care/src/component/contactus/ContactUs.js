import React, { useEffect } from 'react'
import './ContactUs.css'
import addressIconImg from './images/address.png'
import callIconImg from './images/call.png'
import mailIconImg from './images/mail.png'

export default function ContactUs() {

    useEffect(()=>{
        const handleScroll = ()=>{
        let newScrollTop = window.pageYOffset; //to get current scrolltop value
        let screenWidth = window.innerWidth
        let screenHeight = window.innerHeight

        if(newScrollTop>2200 && screenWidth>1100)
         {
          //document.body.style.backgroundColor = "red"; 
          document.getElementById("contact-us").classList.remove("contact-us")
          document.getElementById("contact-us").classList.add("new-contact-us")
        }

       else if(newScrollTop>1600 && (screenWidth>800 && screenWidth<=1099)){
          document.getElementById("contact-us").classList.remove("contact-us")
          document.getElementById("contact-us").classList.add("new-contact-us")
       }

      else if(newScrollTop>1300 && (screenWidth>500 && screenWidth<=800)){
          document.getElementById("contact-us").classList.remove("contact-us")
          document.getElementById("contact-us").classList.add("new-contact-us")
      }
      else if(screenWidth<=500){

         if(newScrollTop>1200 && (screenHeight>800 && screenHeight<=950)){
            document.getElementById("contact-us").classList.remove("contact-us")
            document.getElementById("contact-us").classList.add("new-contact-us")
         }
         else if(newScrollTop>1370 && (screenHeight>650 && screenHeight<=800)){
            document.getElementById("contact-us").classList.remove("contact-us")
            document.getElementById("contact-us").classList.add("new-contact-us")
         }
         else if(newScrollTop>1100 && (screenHeight<=650)){
            document.getElementById("contact-us").classList.remove("contact-us")
            document.getElementById("contact-us").classList.add("new-contact-us")
         }
         else{
          //document.body.style.backgroundColor = "";
            document.getElementById("contact-us").classList.remove("new-contact-us");
            document.getElementById("contact-us").classList.add("contact-us");
        }

      }
      else{
         //document.body.style.backgroundColor = "";
         document.getElementById("contact-us").classList.remove("new-contact-us");
         document.getElementById("contact-us").classList.add("contact-us");
      }
        }
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    }
    ,[])

  return (
    <div className='contact-us' id='contact-us'>
      <div className='heading-for-contact-us'>
         <p className='contact-us-heading01'>Contact us</p>
         <p className='contact-us-heading02'>Get In Touch With Us !</p>
      </div>
      <div className='contact-ways'>
         <div className='contact-type-way'>
            <img src={callIconImg} alt='type-1' style={window.screen.width>=900?{height:'10vh'}:{height:'8vh'}}></img>
            <p className='contact-title'>Address</p>
            <p className='contact-description'>No 24, WordPlace, Colombo</p>
         </div>
         <div className='contact-type-way'>
            <img src={addressIconImg} alt='type-2' style={window.screen.width>=900?{height:'10vh'}:{height:'8vh'}}></img>
            <p className='contact-title'>Call Us</p>
            <p className='contact-description'>+94 76 86 79 047 +94 76 86 79 047</p>
         </div>
         <div className='contact-type-way'>
            <img src={mailIconImg} alt='type-3' style={window.screen.width>=900?{height:'10vh'}:{height:'8vh'}}></img>
            <p className='contact-title'>Address</p>
            <p className='contact-description'>No 24, WordPlace, Colombo</p>
         </div>
      </div>
      <div className='contact-us-form'>
        <form className='contact-form'>
          
          <div className='contact-input'>
             <div className='input-part'>
                <label>Full Name</label>
                <input type='text'></input>
             </div>
             <div className='input-part'>
                <label>Your Email</label>
                <input type='text'></input>
             </div>
          </div>

          <div className='contact-input'>
             <div className='input-part'>
                <label>Phone</label>
                <input type='text'></input>
             </div>
             <div className='input-part'>
                <label>Subject</label>
                <input type='text'></input>
             </div>
          </div>

          <div className='message-input'>
             <label>We Can Help You</label>
             <input type=''></input>
          </div>
          
          <div className='submit-input'>
             <input type='submit' value='Send Message'></input>
          </div>

        </form>
      </div>
    </div>
  )
}
