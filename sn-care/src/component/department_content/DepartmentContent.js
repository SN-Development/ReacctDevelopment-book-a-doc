import React, { useEffect, useState } from 'react'
import './DepartmentContent.css'
import d1Img from './images/d1.jpg'
import SelectedBox from './department_selected_box/SelectedBox'
import Departments from './departments/Departments'
import DepartmentInfo from './departments_info/DepartmentInfo'
import Doctors from './department_doctor/Doctors'
import axios from 'axios'
import DepartmentAppointment from './department_Appointment/DepartmentAppointment'

export default function DepartmentContent() {
  
  const [toggleNumber,setToggleNumber] = useState(1)

//   const handleToggel = (index)=> {
//      setToggleNumber(index)
//   }
  
  // const handleVisiblityOfAppointment = ()=>{
  //  document.getElementById('d-appointment').style.visibility = 'visible';
  // }

  
  const [doctorList,setDoctorList] = useState([])
  const [doctorId,setDoctorId] = useState('')
  //console.log(doctorId)

  const [department,setDepartment] = useState([])
  const [dptFunction,setDptFunction] = useState([])
  
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.post('http://localhost:3008/api/doctor',{toggle:toggleNumber}).then((response)=>{
      let doctorList = []
      doctorList = response.data.Result
      setDoctorList(doctorList)
    })

    axios.post('http://localhost:3008/api/department',{toggle:toggleNumber}).then((response)=>{
      let departmentValue = []
      let dptFunction = []

      departmentValue = response.data.Result
      //console.log(departmentValue[0].DepartmentID)
      setDepartment(departmentValue)
      //console.log(department[0].DepartmentID)
      
      dptFunction = response.data.rsl
      setDptFunction([...dptFunction,response.data.rsl])
    })

  },[toggleNumber])

  return (
    <div className='department-container' id='department-container'>
      {/* {dptFunction.map((d)=>(
        <div>{d.FunctionID+' '+d.FunctionTitle+''+d.FunctionDescription}</div>
      ))} */}
      {/* {dptFunction[0].FunctionID} */}
      {/* {doctorId} */}
      <div className='dpt-content' id='dpt-content'>
        <div className='department-slider'>

        </div>
        <Departments 
           toggleNumber={toggleNumber} setToggleNumber={setToggleNumber} 
        >
        </Departments>

        <DepartmentInfo toggleNumber={toggleNumber} department={department} departmentFunction={dptFunction}></DepartmentInfo>
      
        <Doctors doctorList={doctorList} setDoctorId={setDoctorId}></Doctors>
      </div>

        <DepartmentAppointment doctorId={doctorId===''?'1':doctorId}></DepartmentAppointment>
      
    </div>
  )
}
