import { Component,useState,useEffect,useRef } from "react";
import './TextComponent.css'
import HeadText from "./head_text/HeadText";
import StatementText from "./statement_text/StatementText";



    function TextComponent()
    {
        return(
            <div className='text-component' id="welcome-side-text">
                <HeadText></HeadText>
                <StatementText></StatementText>
            </div>
        )
    }


export default TextComponent;