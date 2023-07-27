import React from 'react'
import './DepartmentFunctionRow.css'

export default function DepartmentFunctionRow({functionTitle01,function01,functionTitle02,function02}) {
  return (
    <div className='function-row'>
       <div className='function'>
          <div className='function-head'>
             <div className='square-icon'></div>
             <div className='function-title' style={{marginLeft:'4%'}}>{functionTitle01}</div>
          </div>
          <div className='about-function'>
             {function01}
          </div>
      </div>
      <div className='function'>
         <div className='function-head'>
            <div className='square-icon'></div>
            <div className='function-title' style={{marginLeft:'4%'}}>{functionTitle02}</div>
         </div>
         <div className='about-function'>
            {function02}
         </div>
      </div>
  </div>
  )
}
