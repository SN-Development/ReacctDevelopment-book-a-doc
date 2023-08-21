import React, { useCallback, useEffect, useState } from 'react'
import './DepartmentAppointment.css'
import SelectedBox from '../department_selected_box/SelectedBox'
import { AiOutlineClose, } from "react-icons/ai"
import axios from 'axios';
import DepartmentAppointmentValidation from './DepartmentAppointmentValidation'
import SuccessAlert from '../../succes_alert/SuccessAlert'


export default function DepartmentAppointment({doctorId}) {

const handleAppointment = ()=>{
        //document.getElementById('d-appointment').style.visibility = 'hidden';
        document.getElementById('d-appointment').classList.add('close-d-appointment');
        document.getElementById('dpt-content').style.opacity  = 1
        //alert(patienType+idType+patientFullName+patientContactNumber+doctor+department+date+timeSlot)
      }
    
const idTypeList = ["NIC","Passport","Licence"]
const [idID,setIdID] = useState('p-id-type')
const [idType,setIdType] = useState('')
const [idNumber,setIdNumber] = useState('')

const timeSlotList = ['08.00 - 08.30','08.30 - 09.00','09.00 - 09.30','09.30 - 10.00']
const [timeSlot,setTimeSlot] = useState('')
const [timeId,setTimeId] = useState('time-id')

const patienTypeList = ['My self','Other']
const [patientType, setPatientType] = useState('') 
console.log(patientType)   

const [patientFullName,setPatientFullName] = useState('')
console.log(patientFullName)

const [patientContactNumber,setPatientContactNumber] = useState('')
console.log(patientContactNumber)

const [doctor,setDoctor] = useState('')

const [department,setDepartment] = useState('')

const [date,setDate] = useState('')

const [error,setError] = useState('')

const [appointmentNumber,setAppointmentNumber] = useState()

const [successStatus,setSuccessStatus] = useState('not-say')

const value = {
  patientType:patientType, 
  patientFullName:patientFullName, 
  patientContactNumber:patientContactNumber,
  department:department,
  doctor:doctor, 
  idType:idType,
  idNumber:idNumber, 
  timeSlot:timeSlot, 
  date:date
}

const handleSubmit = (e)=>{
  // e.preventDefault()
  // setTimeSlot('')
  // setDate('')
  // alert(value)
  // alert(error.patientType)
  let tempError = DepartmentAppointmentValidation(value)
  setError(tempError)
  //alert(tempError)
  if(tempError===''){

     axios.post('http://localhost:3008/api/appointment',{
     
       patientType:value.patientType,
       patientFullName:value.patientFullName,
       patientContactNumber:value.patientContactNumber,
       idType:value.idType,
       idNumber:value.idNumber,
       departmetn:value.department,
       doctor:value.doctor,
       date:value.date,
       timeSlot:value.timeSlot

    }).then((response)=>{

       if(response.data.Status==='Success'){
          //alert("Success")
          setAppointmentNumber(response.data.id)
          setSuccessStatus('yes')
        }
       else{
          //alert("Not success")
          setSuccessStatus('no')
        }

    })
  }
}


useEffect(()=>{
  axios.post('http://localhost:3008/api/appointment-doctor',{id:doctorId}).then((response)=>{
      
      setDoctor(response.data.Doctor)
      console.log(doctor)
      //alert(doctor)
      setDepartment(response.data.Department)
      console.log(department)
     //alert(department)
  })
},[doctorId])

  return (
   <div>
       <div className='close-d-appointment' id='d-appointment'>

          <AiOutlineClose className='dpt-appointment-close' size={40} onClick={handleAppointment}></AiOutlineClose>

          <div className='p-input-form'>

             <div className='p-input'>
                <label className='p-input-lable'>I am registering for</label>
                <div className='p-type'>
                   {
                    patienTypeList.map((type)=>(
                      <div className='p-type-input'>
                        <input type='radio' name='p-type' style={{marginLeft:'10%'}} onChange={(e)=>{
                           setPatientType(type)
                          }
                         }
                        >
                        </input>
                        <label className='p-type-lable'>{type}</label>
                      </div>
                    ))
                   }
                </div>
                <p className='error-message'>{error.patientType}</p>
             </div>

             <div className='p-input'>
                <label className='p-input-lable'>Full name of the patient</label>
                <input className='p-input-input' type='text' value={patientFullName} onChange={(e)=>{
                      setPatientFullName(e.target.value)
                   }
                  }
                >
                </input>
                <p className='error-message'>{error.patientFullName}</p>
             </div>

             <div className='p-input'>
                <label className='p-input-lable'>Contact number of the patient</label>
                <input className='p-input-input' type='text'value={patientContactNumber} onChange={(e)=>{
                      setPatientContactNumber(e.target.value)
                   }
                  }
                ></input>
                <p className='error-message'>{error.patientContactNumber}</p>
             </div>
         
             <div className='p-input' id={idID} >
                <label className='p-input-lable' style={{marginBottom:'5%'}}>Patient Id Number</label>
                <div className='p-id'>
                   <div className='set-id'>
                       <SelectedBox value={setIdType} setId={setIdID} newId='new-p-id-type' oldId ='p-id-type' list={idTypeList} 
                         selectType='ID Type' height='25vh' width={window.innerWidth>500?'10vw':'25vw'} >
                       </SelectedBox>
                   </div>
                   <input className='id-number-input' type='text' onChange={(e)=>{
                       setIdNumber(e.target.value)
                    }
                   }>

                   </input>
                </div>
                <p className='error-message'>{error.idNumber}</p>
             </div>

             <div className='p-input'>
                <label className='p-input-lable' style={{marginBottom:'5%'}}>Department and Doctor</label>
                <div className='selected-doctor'>
                     <div className='s-doctor'>
                       {department}
                     </div>
                     <div className='s-doctor'>
                       {doctor}
                     </div>
                </div>
                {/* <p className='error-message'>Please fill this !</p>  */}
            </div>

            <div className='p-input' id={timeId}>
                <label className='p-input-lable' style={{marginBottom:'5%'}}>Set Time and Date</label>
                <div className='select-time-date'>
                   <div className='select-time'>
                     <SelectedBox value={setTimeSlot} setId={setTimeId} newId={'new-time-id'} oldId={'time-id'} 
                     list={timeSlotList} selectType='Time Slot' height='25vh' 
                     width={window.innerWidth>500?'10vw':'25vw'}></SelectedBox>
                   </div>
                   <div className='select-date'>
                     <input type='date' value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
                   </div>
                </div>
                <p className='error-message'>{error.timeSlot}</p>   
            </div>

            <input className='dpt-submit-btn' type='submit' value='Submit Appointment' 
             onClick={handleSubmit}>
            </input>
            

       </div>

  </div>
  { 
     successStatus!=='not-say'? 
     (successStatus==='yes'?
     (<div className='department-success-alert'>
       <SuccessAlert appointmentNo ={appointmentNumber} work="Appointment Submission" description='' navigation='/department' status='success'></SuccessAlert>
     </div>)
     :(<div className='department-success-alert'>
        <SuccessAlert work="Appointment Submission" description='This time slot have already appointed. So please choose another time which you prefer' status='not-success'></SuccessAlert>
      </div>)
     ):(<></>)
     }

</div>
  )
}
