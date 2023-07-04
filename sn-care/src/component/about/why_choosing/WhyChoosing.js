import React, { useEffect } from 'react'
import './WhyChoosing.css'


export default function WhyChoosing() {

    useEffect(()=>{
        const handleScroll = ()=>{
        let newScrollTop = window.pageYOffset; //to get current scrolltop value
        let screenWidth = window.innerWidth
        //alert(screenWidth)
        if(newScrollTop>800 && screenWidth>1100)
         {
          //document.body.style.backgroundColor = "red"; 
          document.getElementById("why-choosing").classList.remove("why-choosing")
          document.getElementById("why-choosing").classList.add("new-why-choosing")
        }

       else if(newScrollTop>500 && (screenWidth>800 && screenWidth<=1099)){
          document.getElementById("why-choosing").classList.remove("why-choosing")
          document.getElementById("why-choosing").classList.add("new-why-choosing")
       }

      else if(newScrollTop>500 && (screenWidth>500 && screenWidth<=800)){
          document.getElementById("why-choosing").classList.remove("why-choosing")
          document.getElementById("why-choosing").classList.add("new-why-choosing")
      }
      else if(newScrollTop>150 && (screenWidth<=500)){
        document.getElementById("why-choosing").classList.remove("why-choosing")
        document.getElementById("why-choosing").classList.add("new-why-choosing")
    }
      else{
         //document.body.style.backgroundColor = "";
         document.getElementById("why-choosing").classList.remove("new-why-choosing");
         document.getElementById("why-choosing").classList.add("why-choosing");
      }
    }
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    }
    ,[])

  return (
    <div className='why-choosing' id='why-choosing'>
      <div className='logo-for-about'>
         <img src='logo (2).png' style={{position:'absolute',top:'5vh',left:'3vw',width:'20%', minWidth:'150px'}}></img>
      </div>
      <div className='text-content'>

         <div className='title-text'>
            why choosing book-a-doc
         </div>

         <div className='text-for-choosing'>
           Completely centralized platform for scheduling appointments streamline the process and reduce wait time improving access to healthcare services.
         </div>
        <div className='row-container'>
         <div className='site-functions-row01'>
           <div className='function-text01'>
             <img src='Tick.png'  style={{height:'4vh'}}  ></img>
             <p className='f-text'>Search for Doctors</p>
           </div>
           <div className='function-text01'>
             <img src='Tick.png' style={{height:'4vh'}}></img>
             <p className='f-text'>Online Booking</p>
           </div>
           <div className='function-text01'>
             <img src='Tick.png' className='tik-img' style={{height:'4vh'}}></img>
             <p className='f-text'>Doctor Profiles</p>  
           </div>
           <div className='function-text01'>
             <img src='Tick.png' style={{height:'4vh'}}></img>
             <p className='f-text'>Doctor Dashboards</p>  
           </div>
         </div>

         <div className='site-functions-row02'>
           <div className='function-text02'>
             <img src='Tick.png' style={{height:'4vh'}}></img>
             <p className='f-text'>Patient Privacy</p>
           </div>
           <div className='function-text02'>
             <img src='Tick.png' style={{height:'4vh'}}></img>
             <p className='f-text'>User Friendly</p>
           </div>
           <div className='function-text02'>
             <img src='Tick.png' style={{height:'4vh'}}></img>
             <p className='f-text'>Accessible</p>  
           </div>
         </div>
        </div> 
      </div>
    </div>
  )
}
