import React, { useEffect, useState } from 'react'
import './SuccessAlert.css'
import { useNavigate } from 'react-router-dom'

export default function SuccessAlert({work,description,navigation,status,appointmentNo}) {
    //to set class for animation circle and tik (checkmark)
    const[checkClass, setCheckClass] = useState("before-checkmark")
    const[circleClass, setCircleClass] = useState("")
    const[isVisible,setIsVisible] = useState(true);
    //to navigate another page
    const navigate = useNavigate()

    //to change classes of circle and tik time to time
    useEffect(()=>{
  
      if(circleClass=='circle'){
        setTimeout(()=>setCircleClass(''),3000)
        setTimeout(()=> setCheckClass('before-checkmark'),3000)
        //document.getElementById('right-bar').style.display = ''
        //document.getElementById('left-bar').style.display = ''
      }   
      else{
        setTimeout(()=>setCircleClass('circle'),400)
        setTimeout(()=> setCheckClass('checkmark'),800)
        //document.getElementById('right-bar').style.display = 'none'
        //document.getElementById('left-bar').style.display = 'none'
      }
  
     
       
    },[circleClass])
    
    //to navigate according to the work
    const handleOK = ()=>{
      if(work==='Registration'){
         navigate('/loading')
         setTimeout(()=> navigate(navigation),2000)
      }
      else if(work==='Appointment Submission'){
        if(status==='success'){
          navigate('/loading')
          setTimeout(()=> navigate(navigation),2000)
        }
        else{
          window.location.reload(true)
          
        }
      }
     else if(work==='User Login'){
      window.location.reload(true)
     }
    }
    return (
       <div className='container' id='success-alert'>

           {/* begining of the success alert box   */}
           <div className='alert-box'>
                {status==='success'?(<p className='succes-title'>{work} Successfully !</p>):(<p className='succes-title'>{work} Failed !</p>)}
                {status==='success'&& work==='Appointment Submission'?(<p className='appointment-no'>Your appointment number is <span style={{color:'rgb(42, 196, 116)'}}>{appointmentNo}</span></p>):(<></>)}
                {status==='success'?
                (<div className={circleClass} > 
                  <div className={checkClass} ></div>
                </div>)
                :(<div className={circleClass} style={{backgroundColor:'rgb(249, 81, 81)'}}> 
                    <div className='wrong-class' id='right-bar'></div>
                    <div className='wrong-class' id='left-bar'></div>
                 </div>)
                }
                <p className='description-text'>{description}</p>
                <button className='ok-btn' onClick={handleOK}>OK</button>
           </div>
           {/* end of the success alert box */}
           
       </div>
    )
}
