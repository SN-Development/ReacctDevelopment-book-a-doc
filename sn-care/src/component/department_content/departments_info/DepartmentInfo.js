import React, { useState } from 'react'
import './DepartmentInfo.css'
import DepartmentFunctionRow from './department_deccription/department_function_row/DepartmentFunctionRow'
//import DepartmentDescription from './department_deccription/DepartmentDescription'

export default function DepartmentInfo({toggleNumber,department,departmentFunction}) {
  
  const [dp,setDp] = useState('')
  //setDp(department[0].DepartName)
  //const imageUrl = department[0].DptImage
  //console.log('department is' + department[0].DepartmentID)
  let value = {heading:'',about:'',functionTitle01:'',functionTitle02:'',functionTitle03:'',functionTitle04:'',function01:'',function02:'',function03:'',function04:''}
  
    //value.heading = department[0].DepartmentName + 'Department'
    //value.about   = "Welcome to the Neurology Department at Book-a-doc.Our dedicated team of neurologists and specialists is committed to providing exceptional care and treatment for patients with neurological disorders. We strive to deliver the highest standard of medical expertise, advanced technology, and compassionate care to improve the lives of our patients."
    //value.functionTitle01 = departmentFunction[0].FunctionTitle
    //value.functionTitle02 = departmentFunction[1].FunctionTitle
    //value.functionTitle03 = 'Headaches and Migraines'
    //value.functionTitle04 = 'Movement Disorders'
    //value.function01 = departmentFunction[0].FunctionDescription
    //value.function02 = departmentFunction[1].FunctionDescription
    //value.function03 ="Our neurologists work closely with patients to identify triggers and develop effective treatment plans for chronic headaches and migraines."
    //value.function04 ="Our specialists are experienced in managing movement disorders like Parkinson's disease, essential tremor, and dystonia, using the latest therapeutic approaches."
    const { FunctionTitle: title01 } = departmentFunction[0] ?? {};
    const { FunctionDescription: description01 } = departmentFunction[0] ?? {};
    const { FunctionTitle: title02 } = departmentFunction[1] ?? {};
    const { FunctionDescription: description02 } = departmentFunction[1] ?? {};
    const { FunctionTitle: title03 } = departmentFunction[2] ?? {};
    const { FunctionDescription: description03 } = departmentFunction[2] ?? {};
    const { FunctionTitle: title04 } = departmentFunction[3] ?? {};
    const { FunctionDescription: description04 } = departmentFunction[3] ?? {};
  return (
    <div>
      {console.log('dpt f'+departmentFunction)}
      {department.map((dpt)=>(

        <div className='department-info' id='department-info'>

           <div  className='description-contenet'>
  
              <p className='department-title' id='department-title'>{dpt.DepartName+' '+'Department'}</p>

              <div className='about-department' id='about-department'>
                 {dpt.DptAbout}
              </div>

              <div className='department-functions'>
        
               <DepartmentFunctionRow functionTitle01={title01} function01={description01}
                 functionTitle02={title02} function02={description02}
               >
               </DepartmentFunctionRow>
     
               <DepartmentFunctionRow functionTitle01={title03} function01={description03}
                 functionTitle02={title04} function02={description04}
               >
               </DepartmentFunctionRow>
      
             </div>

          </div>
          {/* url(/images/department_images/dentist2.png) */}
          <div className='department-img' style={{backgroundImage:dpt.DptImage}}>

          </div>

        </div>
      ))
       
     }
  </div>  
  )
}
