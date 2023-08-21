import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WelcomeSlide from '../component/welcome_slide/WelcomeSlide'
import Services from '../component/services/ServicesComponent'
import NavBar from '../component/navbar/NavBar'
import WhyChoosing from '../component/about/why_choosing/WhyChoosing'
import AboutUS from '../component/about/about_us/AboutUS'
import ContactUs from '../component/contactus/ContactUs'
import Footer from '../component/footer/Footer'
import Headroom from 'react-headroom'
import DepartmentContent from '../component/department_content/DepartmentContent'
//import Loading from '../loading/Loading';

export default function HomePage() {
  const [name,setName] = useState("");
  const [isLogged, setIsLogged] = useState(false)
  //const navigate  = useNavigate()
  //const [isMenuBtnclicked, setIsMenuBtnClicked] = useState(false)

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
          <NavBar user ={name} isLogged={false} >
          </NavBar>
        </Headroom>
        {/* <DepartmentContent></DepartmentContent> */}
        <div id='home-content'>
         <WelcomeSlide></WelcomeSlide>
         <Services></Services>
         <WhyChoosing></WhyChoosing>
         <AboutUS></AboutUS>
         <ContactUs></ContactUs>
         <Footer></Footer>
        </div>
        {/* <Loading></Loading> */}

        {/* <SideBar isClicked={isMenuBtnclicked}></SideBar> */}
      </div>
      {/* <Appoiintment></Appoiintment> */}
    </div>
  )
}
