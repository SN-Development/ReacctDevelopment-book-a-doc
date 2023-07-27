import React, { useState } from 'react'
import './Departments.css'

export default function Departments({toggleNumber,setToggleNumber,setIsTabClicked}) {

// const [toggleNumber,setToggleNumber] = useState(1)

const handleToggel = (index)=> {
       setToggleNumber(index)
       setIsTabClicked(true)
}
      
  return (
    <div className='departments'>

         <p className='departments-heading'>our departments</p>
         <div className='departments-tabs'>
            <div className={toggleNumber===1?'department-tab active-tab':'department-tab'} 
               onClick={()=>handleToggel(1)}>
               Nuerology
            </div>
            <div className={toggleNumber===2?'department-tab active-tab':'department-tab'}  
               onClick={()=>handleToggel(2)}>
               Dental
            </div>
            <div className='department-tab'>
               Dental
            </div>
            <div className='department-tab'>
               Dental
            </div>
            <div className='department-tab'>
               Dental
            </div>
         </div>

      </div>
  )
}
