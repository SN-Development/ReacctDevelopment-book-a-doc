import React, { useEffect } from 'react'
import './AboutUS.css'
import treatIcon from '../images/treat.png'
import serviceIcon from '../images/service.png'

export default function AboutUS() {

    useEffect(()=>{
        const handleScroll = ()=>{
        let newScrollTop = window.pageYOffset; //to get current scrolltop value
        let screenWidth = window.innerWidth

        if(newScrollTop>1600 && screenWidth>1100)
         {
          //document.body.style.backgroundColor = "red"; 
          document.getElementById("about-us").classList.remove("about-us")
          document.getElementById("about-us").classList.add("new-about-us")
        }

       else if(newScrollTop>1000 && (screenWidth>800 && screenWidth<=1099)){
          document.getElementById("about-us").classList.remove("about-us")
          document.getElementById("about-us").classList.add("new-about-us")
        }

       else if(newScrollTop>800 && (screenWidth>500 && screenWidth<=800)){
          document.getElementById("about-us").classList.remove("about-us")
          document.getElementById("about-us").classList.add("new-about-us")
       }
       else if(newScrollTop>650 && (screenWidth<=500)){
         document.getElementById("about-us").classList.remove("about-us")
         document.getElementById("about-us").classList.add("new-about-us")
      }
       else{
         //document.body.style.backgroundColor = "";
         document.getElementById("about-us").classList.remove("new-about-us");
         document.getElementById("about-us").classList.add("about-us");
       }
        }
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    }
    ,[])

  return (
    <div className='about-us' id='about-us'>
      <div className='detail-box'>
         <div className='about-us-title'>About Us</div>
         <div className='about-title-text'>The Heart And Science Of Medicate Test</div>
         <div className='about-content-text'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with information highway will close.</div>
         <div className='about-quality'>
            <div className='quality-type'>
               <img src={treatIcon} width='30%' height='90%'></img>
               <p className='quality-type-text'>Multi Specially Phrama Treatment</p>
            </div>
            <div className='quality-type'>
               <img src={serviceIcon} width='30%' height='90%'></img>
               <p className='quality-type-text'>24 Hours Medical Service</p>
            </div>
         </div>
      </div>
    </div>
  )
}
