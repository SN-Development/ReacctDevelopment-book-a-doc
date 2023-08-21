import React, { useState } from 'react'
import './Departments.css'
import axios from 'axios'

export default function Departments({toggleNumber,setToggleNumber}) {

let departmentList = [{name:'Nuerology',DNumber:1},
   {name:'Dental',DNumber:2},
   {name:'Cardiology',DNumber:3},
   {name:'Surgery',DNumber:4},
   {name:'Ophthalmology',DNumber:5},
]

const handleToggel = (index)=> {
       setToggleNumber(index)
       //document.getElementById(index).className = 'department-tab active-tab'
       document.getElementById('department-title').className = 'department-title active'
       document.getElementById('about-department').className = 'about-department active'
       document.getElementById('department-info').className = 'department-info active'

       setTimeout(() => {
         document.getElementById('department-title').className = 'department-title'
         document.getElementById('about-department').className = 'about-department'
         document.getElementById('department-info').className = 'department-info'
       },1500);
      
}
      
  return (
    <div className='departments'>

         <p className='departments-heading'>our departments</p>
         <div className='departments-tabs'>
            {
               departmentList.map((department)=>(
                  <div className={toggleNumber===department.DNumber? 'department-tab active-tab':'department-tab'}
                     onClick={()=>handleToggel(department.DNumber)}>
                     {department.name}
                  </div>
               ))
            }
         </div>

      </div>
  )
}
