import React from 'react'
import './Doctors.css'
import d1Img from '../images/d1.jpg'
import DoctorList from './doctor_llist/DoctorList'

export default function Doctors({doctorList,setDoctorId}) {

  

  return (
    <div className='doctors'>
        <div className='doctor-heading'>
           <p className='doctor-head'>Doctors</p>
           <p className='our-doctor-head'>Our Qualified Doctors</p>
        </div>
        <DoctorList img={d1Img} doctorList={doctorList} setDoctorId={setDoctorId}></DoctorList>
    </div>
  )
}
