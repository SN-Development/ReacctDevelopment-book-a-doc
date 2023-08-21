import React, { useState } from 'react'
import './DoctorList.css'
import { AiOutlineTwitter,AiOutlineWhatsApp } from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"

export default function DoctorList({img,doctorList,setDoctorId}) {

    console.log(doctorList)
    const handleVisiblityOfAppointment = (doctorId)=>{
        //document.getElementById('d-appointment').style.visibility = 'visible';
        document.getElementById('d-appointment').classList.remove('close-d-appointment');
        document.getElementById('d-appointment').classList.add('d-appointment');
        document.getElementById('dpt-content').style.opacity  = 0.4
        setDoctorId(doctorId)
        //alert(doctorId)
       }  

  return (
    <div className='doctors-list'>
        
        {doctorList.map((dr)=>(
          <div className='doctor'>
             <div className='doctor-img'>
                <img src={dr.DoctorImage} onClick={()=>handleVisiblityOfAppointment(dr.DoctorID)}></img>
                <div className='doctor-contact'>
                   <BiLogoFacebook size={25} className='doctor-contact-icon' ></BiLogoFacebook>
                   <AiOutlineWhatsApp size={25} className='doctor-contact-icon'></AiOutlineWhatsApp>
                   <AiOutlineTwitter size={25} className='doctor-contact-icon'></AiOutlineTwitter>
                </div>
             </div>
             <div className='doctor-name'>
               Dr.{dr.DoctorName}
             </div>
         </div>
        )
      )}
     
   </div>
  )
}
