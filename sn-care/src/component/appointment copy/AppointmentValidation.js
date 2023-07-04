import React from 'react'

export default function AppointmentValidation(value) {
  let error = {
    pType:'',
    pName :'',
    pContact:'',
    pIdType:'',
    pIdNo:'',
    pDepartment:'',
    pDoctor:'',
    pDate:'',
    pTime:'',
  }

  if(value.pType===''){
    error.pType = 'Please select the type of patient!'
  }

  if(value.pName===''){
    error.pName = 'Please enter the full name of the patient!'
  }
  
  if(value.pContact===''){
    error.pContact = 'Please enter valid contact number!'
  }

  if(value.pIdType===''){
    error.pIdType = 'Please select an ID type!'
  }

  if(value.pIdNo===''){
    error.pIdNo = 'Please enter a valid ID number!'
  }

  if(value.pDepartment===''){
    error.pDepartment = 'Please select a department!'
  }
  
  if(value.pDoctor ===''){
    error.pDoctor = 'Please select a doctor!'
  }
  if(value.pDate ===''){
    error.pDate= 'Please select a date!'
  }

  if(value.pTime ===''){
    error.pTime = 'Please select a time!'
  }
  if(
    error.pType ==='' &&
    error.pName ===''&&
    error.pContact ===''&&
    error.pIdType === '' &&
    error.pIdNo === ''&&
    error.pDepartment ===''&&
    error.pDoctor ==='' &&
    error.pDate ==='' &&
    error.pTime ===''
  )
  {
     error = ''
  }
  

  return (
    error
  )
}
