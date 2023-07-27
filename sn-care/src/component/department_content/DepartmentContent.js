import React, { useEffect, useState } from 'react'
import './DepartmentContent.css'
import d1Img from './images/d1.jpg'
import SelectedBox from './department_selected_box/SelectedBox'
import Departments from './departments/Departments'
import DepartmentInfo from './departments_info/DepartmentInfo'
import Doctors from './department_doctor/Doctors'
import axios from 'axios'

export default function DepartmentContent() {
  
  const [toggleNumber,setToggleNumber] = useState(1)
  const [isTabClicked,setIsTabClicked] = useState(false)
//   const handleToggel = (index)=> {
//      setToggleNumber(index)
//   }
  
  // const handleVisiblityOfAppointment = ()=>{
  //  document.getElementById('d-appointment').style.visibility = 'visible';
  // }

  const handleAppointment = ()=>{
    document.getElementById('d-appointment').style.visibility = 'hidden';
  }

  const idTypeList = ["NIC","Passport","Licence"]
  const [idType,setIdType] = useState('p-id-type')

  useEffect(()=>{
     axios.get('/api/doctor').then((response)=>{
       
     })
  },[])

  return (
    <div className='department-conter'>
      
      <div className='department-slider'>

      </div>

      <Departments toggleNumber={toggleNumber} setToggleNumber={setToggleNumber} setIsTabClicked={setIsTabClicked}></Departments>
      <DepartmentInfo toggleNumber={toggleNumber} isTabClicked={isTabClicked}></DepartmentInfo>
      
      <Doctors></Doctors>
     

      <div className='d-appointment' id='d-appointment'>
        <button onClick={handleAppointment}>close</button>
        <div className='p-input-form'>
         <div className='p-input'>
            <label className='p-input-lable'>I am registering for</label>
            <div className='p-type'>
               <div className='p-type-input'>
                 <input type='radio' name='p-type' style={{marginLeft:'10%'}}></input>
                 <label className='p-type-lable'>My Self</label>
               </div>
               <div className='p-type-input'>
                 <input type='radio' name='p-type' style={{marginLeft:'10%'}}></input>
                 <label className='p-type-lable'>Other</label>
               </div>
            </div>
         </div>

         <div className='p-input'>
           <label className='p-input-lable'>Full name of the patient</label>
           <input className='p-input-input' type='text'></input>
         </div>

         <div className='p-input'>
           <label className='p-input-lable'>Contact number of the patient</label>
           <input className='p-input-input' type='text'></input>
         </div>
         
         <div className='p-input' id={idType}>
            <label className='p-input-lable' style={{marginBottom:'5%'}}>Patient Id Number</label>
            <div className='p-id'>
               <div className='set-id'>
                 <SelectedBox setId={setIdType} newId='new-p-id-type' oldId ='p-id-type' list={idTypeList} selectType='ID Type' height='25vh' width={window.innerWidth>500?'9vw':'25vw'}></SelectedBox>
               </div>
               <input className='id-number-input' type='text'></input>
            </div>
         </div>

         <div className='p-input'>
           <label className='p-input-lable' style={{marginBottom:'5%'}}>Department and Doctor</label>
           <div className='selected-doctor'>
             <div className='s-doctor'>
               Dental
             </div>
             <div className='s-doctor'>
               Dental
             </div>
           </div> 
         </div>

       </div>

      </div>

    </div>
  )
}
