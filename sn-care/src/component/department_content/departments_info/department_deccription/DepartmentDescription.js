import React from 'react'
import './DepartmentDescription.css'
import DepartmentFunctionRow from './department_function_row/DepartmentFunctionRow'

export default function DepartmentDescription({value}) {
  return (
    <div className='description-contenet'>

            <p className='department-title'>{value.heading}</p>

            <div className='about-department'>
              {value.about}
            </div>

            <div className='department-functions'>
                
              <DepartmentFunctionRow functionTitle01={value.functionTitle01} function01={value.function01}
                functionTitle02={value.functionTitle02} function02={value.function02}
              >
              </DepartmentFunctionRow>
             
              <DepartmentFunctionRow functionTitle01={value.functionTitle03} function01={value.function03}
                functionTitle02={value.functionTitle04} function02={value.function04}
              >
              </DepartmentFunctionRow>
              
            </div>

    </div>
  )
}
