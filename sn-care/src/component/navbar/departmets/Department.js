import React from 'react'
import './Department.css'
import { Link } from 'react-router-dom'

export default function Department() {

  return (
    <div className='department' id='department'>

      <div className='link-container'>

        <div className='link'>
           <a  href='#' className='d-link'>Neurology</a>
        </div>
        <div className='link'>
           <a  href='#' className='d-link'>Dentist</a>
        </div>
        <div className='link'>
           <a  href='#' className='d-link'>Ophthalmology</a>
        </div>

      </div>

      <div className='link-container'>

        <div className='link'>
           <a  href='#' className='d-link'>Cardiology</a>
        </div>
        <div className='link'>
           <a  href='#' className='d-link'>Surgery</a>   
        </div>
        <div className='link'>
          <a  href='#' className='d-link'></a>   
        </div>

      </div>

    </div>
  )
}
