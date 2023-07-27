import React from 'react'
import './DoctorList.css'

export default function DoctorList({img}) {

const doctorList = ['Shashindu','Chamika','Nisansala']
    const handleVisiblityOfAppointment = ()=>{
        document.getElementById('d-appointment').style.visibility = 'visible';
       }  

  return (
    <div className='doctors-list'>
     
        {doctorList.map((doctor)=>(
          <div className='doctor'>
             <div className='doctor-img'>
                <img src={img} onClick={handleVisiblityOfAppointment}></img>
                <div className='doctor-contact'>

                </div>
             </div>
             <div className='doctor-name'>
               Dr. W. S. {doctor}
             </div>
         </div>
        )
      )}
     
   </div>
  )
}
