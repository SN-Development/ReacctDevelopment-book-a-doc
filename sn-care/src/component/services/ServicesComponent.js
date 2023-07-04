import React, { useEffect } from 'react'
import './ServicesComponent.css'
import ServiceTheme from './theme/ServiceTheme'
import ServiceContent from './service/ServiceContent'

export default function ServicesComponent() {

  //Begining of the method which is used to change position of the component when scroll
  // useEffect(()=>{
  //      const handleScroll = ()=>{
  //      let newScrollTop = window.pageYOffset; //to get current scrolltop value

  //      if(newScrollTop>330)
  //        {
  //         //document.body.style.backgroundColor = "red"; 
  //         document.getElementById("services").classList.remove("services");
  //         document.getElementById("services").classList.add("new-services");
  //        }

  //        else{
  //         //document.body.style.backgroundColor = "";
  //         document.getElementById("services").classList.remove("new-services");
  //         document.getElementById("services").classList.add("services");
  //        }
  //      }
  //      window.addEventListener("scroll",handleScroll);
  //      return()=> window.removeEventListener("scroll",handleScroll);
  // }
  // ,[])
  // //End of the method

  return (
    <div className='services' id="services">
      <ServiceTheme></ServiceTheme>
      <ServiceContent></ServiceContent>
    </div>
  )
}
