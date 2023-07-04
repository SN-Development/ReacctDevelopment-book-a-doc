import React,{useEffect} from 'react'
import './ServiceContent.css'
//import img from './images/24Service.png'
import SContent from './content/SContent'
import img1 from './content/images/24Service.png'
import img2 from './content/images/blue-online_booking (2).png'
import img3 from './content/images/information (1).png'
import img4 from './content/images/Prescription (1).png'

export default function ServiceContent() {

  //const {id} = props;

  useEffect(()=>{
    const handleScroll = ()=>{
    
    let screenWidth = window.innerWidth
    let newScrollTop = window.pageYOffset;
    
    if(newScrollTop>400 && screenWidth>1100)
      {
       //document.body.style.backgroundColor = "red"; 
       document.getElementById("s-content").classList.remove("s-content")
       document.getElementById("s-content").classList.add("new-s-content")
       
      }
      else if(newScrollTop>170 && (screenWidth>800 && screenWidth<=1099)){
        document.getElementById("s-content").classList.remove("s-content")
        document.getElementById("s-content").classList.add("new-s-content")
      }
      else if(newScrollTop>80 && (screenWidth>500 && screenWidth<=800)){
        document.getElementById("s-content").classList.remove("s-content")
        document.getElementById("s-content").classList.add("new-s-content")
      }
      else{
       //document.body.style.backgroundColor = "";
       document.getElementById("s-content").classList.remove("new-s-content");
       document.getElementById("s-content").classList.add("s-content");
      }
    }
    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll",handleScroll);
}
,[])

  return (
    <div>
    
      <div className='s-content' id='s-content'>
      <SContent title='24 Hour Service' img ={img1} passage='Our platform provides access to a team of highly qualified doctors with extensive experience in a variety of medical specialties, ensuring that you receive the best possible care.'></SContent>
      <SContent title='Online booking' img={img2} passage='Our platform provides access to a team of highly qualified doctors with extensive experience in a variety of medical specialties, ensuring that you receive the best possible care.'></SContent>
      <SContent title='Health Information & Resources' img={img3} passage='Our platform provides access to a team of highly qualified doctors with extensive experience in a variety of medical specialties, ensuring that you receive the best possible care.'></SContent>
      <SContent title='Prescription Refills' img={img4} passage='Our platform provides access to a team of highly qualified doctors with extensive experience in a variety of medical specialties, ensuring that you receive the best possible care.'></SContent>
      </div>
       <div className='mobile-s-content'>
          <div className='m-s-row'>
            <div className='m-s-content'>
                <img src={img1} width='40%' className='m-s-img'></img>
                <p className='m-s-service'>24/7 Service</p>
            </div>
            <div className='m-s-content'>
                <img src={img2} width='40%' className='m-s-img'></img>
                <p className='m-s-service'>Online Booking</p>
            </div>
          </div>
          <div className='m-s-row'>
            <div className='m-s-content'>
                <img src={img3} width='40%' className='m-s-img'></img>
                <p className='m-s-service'>Health Information & Resources</p>
            </div>
            <div className='m-s-content'>
                <img src={img4} width='40%' className='m-s-img'></img>
                <p className='m-s-service'>Prescription Refills</p>
            </div>
          </div>
       </div>
    
    </div>
  )
}
