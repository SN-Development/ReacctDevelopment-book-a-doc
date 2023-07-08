import React from 'react'
import './Department.css'
import { Link } from 'react-router-dom';


export default function Department() {

  return (
    <div className='department' id='department'>

      <div className='link-container'>

        <div className='link'>
           <Link to='/' className='d-link'>Neurology</Link>
        </div>
        <div className='link'>
           <Link to='/' className='d-link'>Dentist</Link>
        </div>
        <div className='link'>
           <Link to='/' className='d-link'>Ophthalmology</Link>
        </div>

      </div>

      <div className='link-container'>

        <div className='link'>
           <Link to='/' className='d-link'>Cardiology</Link>
        </div>
        <div className='link'>
           <Link to='/' className='d-link'>Surgery</Link> 
        </div>
        <div className='link'>
          <Link to='/' className='d-link'></Link>  
        </div>

      </div>

    </div>
  )
}
