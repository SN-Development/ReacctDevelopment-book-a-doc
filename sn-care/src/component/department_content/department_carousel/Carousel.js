import React, { useEffect, useState } from 'react'
import './Carousel.css'

export default function Carousel() {

const slides = [
    {url:'/images/images/1.jpg'},
    {url:'/images/images/2.jpg'},
    {url:'/images/images/3.jpg'},
    {url:'/images/images/4.webp'},
    {url:'/images/images/5.jpg'},
]

const [current,setCurrent] = useState(0)

const goToNext = ()=>{
      const isLast = slides.length - 1 === current
      const newIndex = isLast ? 0 : current+1
      setCurrent(newIndex)
    }

useEffect(()=>{
  setTimeout(goToNext,2000)
})

  return (
    <div className='coursal'>
      {
        slides.map((image,index)=>(
            <div key={index} className={index=== current?'courasal-wrapper courasal-wrapper-active':'courasal-wrapper'}>
                <img src={image.url} className='coursal_card'></img>
                {/* <h1>{index}</h1> */}
            </div>
        ))
      }
    </div>
  )
}
