import React from 'react'
import './Doctors.css'
import d1Img from '../images/d1.jpg'
import DoctorList from './doctor_llist/DoctorList'

export default function Doctors() {

  

  return (
    <div className='doctors'>
        <div className='doctor-heading'>
           <p className='doctor-head'>Doctors</p>
           <p className='our-doctor-head'>Our Qualified Doctors</p>
        </div>
        <DoctorList img={d1Img}></DoctorList>
        {/* <div className='doctors-list'>
           <div className='doctor'>
             <div className='doctor-img'>
               <img src={d1Img} onClick={handleVisiblityOfAppointment}></img>
               <div className='doctor-contact'>

               </div>
             </div>
             <div className='doctor-name'>
                Dr. W. S. Chamika
             </div>
           </div>
           <div className='doctor'>
             
           </div>
           <div className='doctor'>
             
           </div>
        </div> */}
    </div>
  )
}
