import React from 'react'
import './SContent.css'

export default function SContent({title,img,passage}) {
  return (
    <div className='service-wrap-border' id="service-wrap-border">
      <div className='service-content'>
          <img src={img} class="service-icon" alt="24/7" />
          <p class="service-text">{title}</p>
          <p class="service-sub-text">{passage}</p>
      </div>
    </div>
  )
}
