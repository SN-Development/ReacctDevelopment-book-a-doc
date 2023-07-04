import React, { useEffect, useState } from 'react'

import WelcomeSlide from '../component/welcome_slide/WelcomeSlide'
import Services from '../component/services/ServicesComponent'
import NavBar from '../component/navbar/NavBar'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import WhyChoosing from '../component/about/why_choosing/WhyChoosing'
import AboutUS from '../component/about/about_us/AboutUS'
import ContactUs from '../component/contactus/ContactUs'
import Footer from '../component/footer/Footer'
import Appoiintment from '../component/appointment copy/Appoiintment'
import SideBar from '../component/sidebar/SideBar'
import Headroom from 'react-headroom'


export default function HomePage() {
  const [name,setName] = useState("");
  const [isLogged, setIsLogged] = useState(false)
  const navigate  = useNavigate()
  const [isMenuBtnclicked, setIsMenuBtnClicked] = useState(false)

  axios.defaults.withCredentials = true;
  useEffect(()=>{
      axios.get('http://localhost:3008/api/home').then((response)=>{
         
        //  if(response.data.valid){
        //       setName(response.data.user)
        //       setIsLogged(true)
                
          
        //  }
        //  else{
        //      //navigate('/login')
        //  }
        if(response.data.Status === 'Success'){
           setName(response.data.name)
           setIsLogged(true)
        }
        else{
          //alert(response.data.Message)
        }
      })
  },[])
  return (
    <div  className='Homepage' style={{margin:'0'}} id='Homepage'>
      <div className='homepage-content' id='homepage-content' style={{overflowX:'visible'}}>
        <Headroom>
          <NavBar user ={name} isLogged={isLogged} setIsMenuBtnClicked={setIsMenuBtnClicked}>
          </NavBar>
        </Headroom>
        <WelcomeSlide></WelcomeSlide>
        <Services></Services>
        <WhyChoosing></WhyChoosing>
        <AboutUS></AboutUS>
        <ContactUs></ContactUs>
        <Footer></Footer>
        {/* <SideBar isClicked={isMenuBtnclicked}></SideBar> */}
      </div>
      {/* <Appoiintment></Appoiintment> */}
    </div>
  )
}
