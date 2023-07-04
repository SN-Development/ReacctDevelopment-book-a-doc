import React,{useEffect} from 'react'
import './ServiceTheme.css'

export default function ServiceTheme() {
  
 //Begining of the method which is used to change position of the component when scroll
   useEffect(()=>{
    const handleScroll = ()=>{
      let screenWidth = window.innerWidth
      let newScrollTop = window.pageYOffset;
     //to get current scrolltop value
    console.log(screenWidth)
    console.log(newScrollTop)
    //alert(screenWidth)
    if(newScrollTop>200 && screenWidth>1100)
      {
       //document.body.style.backgroundColor = "red"; 
       document.getElementById("theme").classList.remove("theme")
       document.getElementById("theme").classList.add("new-theme")
       
      }
      else if(newScrollTop>40 && (screenWidth>800 && screenWidth<=1099)){
        document.getElementById("theme").classList.remove("theme")
        document.getElementById("theme").classList.add("new-theme")
      }
      else if(newScrollTop>20 && (screenWidth>500 && screenWidth<=800)){
        document.getElementById("theme").classList.remove("theme")
        document.getElementById("theme").classList.add("new-theme")
      }
      // else if(newScrollTop>20 && (screenWidth<=500)){
      //   document.getElementById("theme").classList.remove("theme")
      //   document.getElementById("theme").classList.add("new-theme")
      // }
      else{
       //document.body.style.backgroundColor = "";
       document.getElementById("theme").classList.remove("new-theme");
       document.getElementById("theme").classList.add("theme");
      }
    }
    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll",handleScroll);
}
,[])
// //End of the method

  return (
    <div className='theme' id='theme'>
      Our Services
    </div>
  )
}
