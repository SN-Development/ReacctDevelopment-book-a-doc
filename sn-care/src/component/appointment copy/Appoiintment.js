import React, { useEffect, useState } from 'react'
import './Appointment.css'
import appointmentLogoImg from './images/logo.png'
import appointmentDocImg from './images/d2.png'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessAlert from '../succes_alert/SuccessAlert';
import AppointmentValidation from './AppointmentValidation';
import SelectedBox from '../selected_box/SelectedBox'


export default function Appoiintment() {

const navigate = useNavigate()
const [successStatus,setSuccessStatus] = useState('not-say')  
const [department, setDepartment] = useState('');

const [paitent,setPatient] = useState({
  patientType:'',
  //IdType :'',
})
const [patientIdType, setPatientIdType] = useState('')
const [patientName, setPatientName] = useState('')
const [patientContactNo, setPatientContactNo] = useState('')
const [patientIdNo, setPatientIdNo] = useState('')
const [doctor,setDoctor] = useState('')
const [date,setDate] = useState('')
const [timeSlot,setTimeSlot] = useState('')

const inputValues = {
  pType : paitent.patientType,
  pName : patientName,
  pContact:patientContactNo,
  pIdType:patientIdType,
  pIdNo :patientIdNo,
  pDepartment:department,
  pDoctor:doctor,
  pDate:date,
  pTime:timeSlot
}
const idTypeList = ["NIC","Passport","Licence"]
const [idType,setIdType] = useState('')
const departmentList = ['Neurology','Dentist','Ophthalmology','Cardiology','Surgery']
const [dptType,setDptType] = useState('')
const neurologyList = ['Shashindu','Chamika','Nisansala']
const dentistList = ['Sathira','Nushan','Nimni']
const ophthalmologyList = ['Tharuka','Priyantha','Champika']
const cardiologyList = ['Raveesha','Sahan','Bandara']
const surgeryList    = ['Shashindu','Chamika','Nisansala']
const [timeSlotType,setTimeSlotType] = useState('')
const space = '  '
const timeSlotList = ["08.30"+space+"-"+space+"09.00","09.00"+space+"-"+space+"09.30","09.30"+space+"-"+space+"10.00","10.00"+space+"-"+space+"10.30",
                      "10.30"+space+"-"+space+"11.00","11.00"+space+"-"+space+"11.30","11.30"+space+"-"+space+"12.00","01.00"+space+"-"+space+"01.30",
                      "01.30"+space+"-"+space+"02.00","02.00"+space+"-"+space+"02.30","02.30"+space+"-"+space+"03.00","03.00"+space+"-"+space+"03.30",
                      "03.30"+space+"-"+space+"04.00",
                    ]

 
// const [doctorName, setDoctorName] = ('doctor-name')
const [error, setError] = useState('')
const [id,setId] = useState('')


const handleSubmit = (e)=>{
  e.preventDefault();
   //alert(patientIdType)
   let tempError = AppointmentValidation(inputValues)
   //let tempError = null
   setError(tempError)
   
   if(tempError.length===0){
    axios.post('http://localhost:3008/api/appointment',{
      doctor:doctor,
      date: date,
      timeSlot :timeSlot
   }).then(response=>{
       
       if(response.data.Status ==="Success"){
            setSuccessStatus('yes')
            let tempId = response.data.id
            setId(tempId)
            alert(id)
            document.getElementById('appointment-container').style.opacity='0.5'
       }
       else{
        //alert(response.data.Status)
        setSuccessStatus('no')
        document.getElementById('appointment-container').style.opacity='0.5'
        timeSlot =""
        date = ""
       }
   })
   }
   else{
    alert(error)
    console.log(error)
   }
}

const goFromAppointmentToHome = ()=>{
    navigate('/loading')
    setTimeout(()=>navigate('/'),2000)
}

  return (

  <div>
    <div className='appointment-container' id='appointment-container'>
      <div className='appointment-to-home' onClick={goFromAppointmentToHome}>
        Home
      </div>
      <div className='appointment-box'>
        <div className='appointment-left'>
             <div className='logo-for-appointmnet'>
                <img src={appointmentLogoImg} alt='logo' style={{position:'relative',top:'-15vh',left:'0',width:'50%',height:'45vh'}}></img>
             </div>
             <div className='doctor-box'>
                <img src={appointmentDocImg}  style={{position:'absolute',top:'-15vh',left:'-2vw',width:'35vw',height:'83vh'}}></img>
             </div>
        </div>

        <div className='appointment-right'>

             <div className='form-heading'>
                     Let's protect youself and those arround you
             </div>

             <div className='appointment-form'>


                 <div className='paitent-input'>
                   <label>I am registering for </label>
                   <div className='choose-patient'>
                     <div className='patinet-type'>
                       <input type="radio" id="myself" name="patinet-type" value='myself'
                        style={{cursor:'pointer'}}
                        onClick={(e)=>{
                          paitent.patientType = e.target.value
                          //alert( paitent.patientType)
                         }
                        }
                       />
                       <label for="mtself">Myself</label>
                     </div>

                     <div className='patinet-type'>
                       <input type="radio" id="other" name="patinet-type" value="other"
                         style={{cursor:'pointer'}}
                         onClick={(e)=>{
                          paitent.patientType = e.target.value
                          //alert( paitent.patientType)
                         }
                        }
                       />
                       <label for="other">Other</label>
                     </div>

                   </div>
                   {error.pType?(<p className='error-msg' id='p-type'>{error.pType}</p>):(<></>)}
                 </div>

                 <div className='paitent-input'>
                   <label>Patient's Full Name</label>
                   <input type='text' className='p-intput' id='fullname' value={patientName}
                    onChange={(e)=> {
                      setPatientName(e.target.value)
                     }
                    }
                   >
                   </input>
                   {error.pName?(<p className='error-msg' id='p-Name'>{error.pName}</p>):(<></>)}
                 </div>

                 <div className='paitent-input'>
                   <label>Patient's Contact Number</label>
                   <input type='text' value={patientContactNo}
                     onChange={(e)=> {
                      setPatientContactNo(e.target.value)
                     }
                    }
                   >
                   </input>
                   {error.pContact?(<p className='error-msg' id='p-Name'>{error.pContact}</p>):(<></>)}
                 </div>

                 <div className='paitent-input' id={idType} >
                   <label>Patinet ID Number</label>
                   <div className='patient-id' >
                     <div className='select' >
                       <SelectedBox setId={setIdType} newId='new-id-type' oldId ='id-type'value={setPatientIdType} list={idTypeList} selectType='ID TYPE' height='25vh' width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                     </div>
                     <input type='text' value={patientIdNo} onChange={(e)=>{
                       setPatientIdNo(e.target.value)
                     }}></input>
                   </div>
                   {error.pIdType?(<p className='error-msg' id='p-IdType'>{error.pIdType}</p>):(<></>)}
                   {error.pIdNo?(<p className='error-msg' id='p-IdNo'>{error.pIdNo}</p>):(<></>)}
                 </div>

                 <div className='paitent-input' id={dptType} >
                   <label>Select Department & Doctor</label>
                   <div className='choose-department' >
                   
                    <div className='select' >
                       <SelectedBox  setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDepartment} list={departmentList} selectType='Department' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                    </div>
                    {
                       department === 'Neurology'? 
                       (<div className='select' >
                          <SelectedBox setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDoctor} list={neurologyList} selectType='Doctor' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                      </div>)
                      :(<></>)
                    }
                    {
                       department === 'Dentist'? 
                       (<div className='select' >
                          <SelectedBox setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDoctor} list={dentistList} selectType='Doctor' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                      </div>)
                      :(<></>)
                    }
                    {
                       department === 'Ophthalmology'? 
                       (<div className='select' >
                          <SelectedBox setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDoctor} list={ophthalmologyList} selectType='Doctor' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                      </div>)
                      :(<></>)
                    }
                    {
                       department === 'Cardiology'? 
                       (<div className='select' >
                          <SelectedBox setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDoctor} list={cardiologyList} selectType='Doctor' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                      </div>)
                      :(<></>)
                    }
                    {
                       department === 'Surgery'? 
                       (<div className='select' >
                          <SelectedBox setId={setDptType} newId='new-dpt-type' oldId ='dpt-type' value={setDoctor} list={surgeryList} selectType='Doctor' height={window.screen.width>500?'25vh':'20vh'} width={window.screen.width>500?'10vw':'25vw'}></SelectedBox>
                      </div>)
                      :(<></>)
                    }
                    
                  </div>
                  {error.pDepartment?(<p className='error-msg' id='p-Department'>{error.pDepartment}</p>):(<></>)}  
                  {(error.pDoctor)&&(department!=='')?(<p className='error-msg' id='p-Doctor'>{error.pDoctor}</p>):(<></>)}  
                 </div>

                 <div className='paitent-input-date-time' id={timeSlotType}>
                   <div className='choose-date'>
                      <label>Chooce A Date</label>
                      <input type='date' onChange={(e)=>{
                        setDate(e.target.value)
                        //alert(schedule.date)
                      }} ></input>
  
                   </div>
                   <div className='choose-time' >
                      <label>Chooce Time Slot</label><br></br>
                      <div className='select-time-slot'>
                       <SelectedBox  setId={setTimeSlotType} newId='new-time-slot' oldId ='time-slot' value={setTimeSlot} list={timeSlotList} selectType='Time Slot' height='25vh' width='10vw'></SelectedBox>
                      </div>
                   </div>
                 
                 </div>
                 {error.pDate?(<p className='error-msg' id='p-date'>{error.pDate}</p>):(<></>)}  
                 {error.pTime?(<p className='error-msg' id='p-time'>{error.pTime}</p>):(<></>)}  

                 <div className='paitent-input' id='btn'>
                   <input type='submit' onClick={handleSubmit}></input>
                 </div>

             </div>
        </div>

      </div>
     </div> 
     {
     successStatus!=='not-say'? 
     (successStatus==='yes'?
     (<div>
       <SuccessAlert appointmentNo ={id} work="Appointment Submission" description='' navigation='/' status='success'></SuccessAlert>
     </div>)
     :(<SuccessAlert work="Appointment Submission" description='This time slot have already appointed. So please choose another time which you prefer' status='not-success'></SuccessAlert>)
     ):(<></>)
     }
    </div>
  )
}
