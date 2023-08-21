import React from 'react'

export default function DepartmentAppointmentValidation(value) {
  let error = {
    patientType:'', 
    patientFullName:'', 
    patientContactNumber:'',
    department:'',
    doctor:'', 
    idType:'',
    idNumber:'', 
    timeSlot:'', 
    date:'',
  } 
  
  if(value.patientType===''){
    error.patientType = 'Please select the type of patient !'
  }

  if(value.patientFullName===''){
    error.patientFullName = 'Please enter the full name of the patient !'
  }
  
  if(value.patientContactNumber===''){
    error.patientContactNumber = 'Please enter valid contact number !'
  }

  if(value.idType===''){
    error.idTypedType = 'Please select an ID type !'
  }

  if(value.idNumber===''){
    error.idNumber = 'Please enter a valid ID number !'
  }

  if(value.department===''){
    error.department = 'Please select a department !'
  }
  
  if(value.doctor ===''){
    error.doctor = 'Please select a doctor !'
  }
  if(value.date ===''){
    error.timeSlot = 'Please select a time !'
  }

  if(value.timeSlot ===''){
    error.timeSlot = 'Please select a time !'
  }
  if(
    error.patientType ==='' &&
    error.patientFullName ===''&&
    error.patientContactNumber ===''&&
    error.idType === '' &&
    error.idNumber === ''&&
    error.department ===''&&
    error.doctor ==='' &&
    error.date ==='' &&
    error.timeSlot ===''
  )
  {
     error = ''
  }
  return (
    error
  )
}
