import React, { useState } from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Button(props) {
    const [isClicked, setIsClicked] = useState(false)
    const navigate = useNavigate('')

    const handleAppointment = ()=>{
        if(window.screen.width<=500){
            document.getElementById('services').style.display = 'none'
            document.getElementById('about-us').style.display = 'none'
            document.getElementById('why-choosing').style.display = 'none'
            document.getElementById('contact-us').style.display = 'none'
            document.getElementById('footer').style.display = 'none'
        }
        axios.get('http://localhost:3008/api/gotoappointment').then((response)=>{
            if(response.data.Status === 'Success'){
                //alert(response.data.user)
                navigate('/appointment')
            }
            else{
                props.loginError(true)
                //document.getElementById('image-slider').style.opacity = '0.2'
                //alert('error')
            }
        })
       //alert("Clicked") 
       if(!isClicked){
        //alert("clicked is true")
        setIsClicked(true)
       }
       else{
        
        setIsClicked(false)
       }
    }

    let {text,id} = props;
    let btnId = "";
    const setId = ()=>{
        if(id==="btn-1")
        {
           btnId = "btn1"
        }
        else{
            btnId = "btn2"
        }
        return btnId;
    }
    

    return (
    <a href='#' className="btn-for-slide" id={setId()} onClick={btnId==='btn1'?handleAppointment:''}>{text}{}</a>
  )
}
