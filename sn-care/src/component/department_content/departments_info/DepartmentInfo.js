import React from 'react'
import './DepartmentInfo.css'
import DepartmentDescription from './department_deccription/DepartmentDescription'

export default function DepartmentInfo({toggleNumber,isTabClicked}) {

  const value = {heading:'',about:'',functionTitle01:'',functionTitle02:'',functionTitle03:'',functionTitle04:'',function01:'',function02:'',function03:'',function04:''}
  if(toggleNumber===1){
    value.heading = 'Nuerology Department'
    value.about   = "Welcome to the Neurology Department at [Your Hospital/Clinic Name].Our dedicated team of neurologists and specialists is committed to providing exceptional care and treatment for patients with neurological disorders. We strive to deliver the highest standard of medical expertise, advanced technology, and compassionate care to improve the lives of our patients."
    value.functionTitle01 = 'Stroke'
    value.functionTitle02 = 'Movement Disorders'
    value.functionTitle03 = 'Headaches and Migraines'
    value.functionTitle04 = 'Movement Disorders'
    value.function01 ='Prompt evaluation and intervention are crucial for stroke patients. Our neurologists are well-versed in managing acute stroke cases and providing timely treatments to minimize potential complications.'
    value.function02 ="Our specialists are experienced in managing movement disorders like Parkinson's disease,essential tremor, and dystonia, using the latest therapeutic approaches."
    value.function03 ="Our neurologists work closely with patients to identify triggers and develop effective treatment plans for chronic headaches and migraines."
    value.function04 ="Our specialists are experienced in managing movement disorders like Parkinson's disease, essential tremor, and dystonia, using the latest therapeutic approaches."
    
  }

  return (
   <div>
      <div className={toggleNumber===1?'department-info active-info':'department-info'} >
         <DepartmentDescription value={value}></DepartmentDescription>
         <div className='department-img'>

         </div>
     </div>
     <div className={toggleNumber===2?'department-info active-info':'department-info'} >
         <DepartmentDescription value={''}></DepartmentDescription>
         <div className='department-img'>

         </div>
    </div>
   </div>
  )
}
