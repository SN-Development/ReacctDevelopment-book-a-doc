import React, { useState } from 'react'
import './User.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function User({logged}) {
  
  const navigate = useNavigate()
  const handleSignOut = ()=>{
    axios.get('http://localhost:3008/api/loginout').then(res=>{
      if(res.data.Status === 'Success')
      {
          logged = false;
          navigate('/loading')
          setTimeout(()=>navigate('/'),3000)
          //window.location.reload(true);
      }
    })
  }
  
    
  return (
    <div className='sign-out'>
        <div className='s-out-part' id='first-part'>
            <p className='s-out-part-text'>My Profile</p>
        </div>
        <div className='s-out-part'>
            <p className='s-out-part-text'>Edit Profile</p>
        </div>
        <div className='s-out-part'>
            <p className='s-out-part-text' onClick={handleSignOut}>Sign out</p>
        </div>
    </div>
                                    
  )
}
