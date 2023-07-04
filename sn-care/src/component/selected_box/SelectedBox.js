import React, { useState } from 'react'
import {BiChevronDown} from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import './SelecteBiox.css'

export default function SelectedBox({list,selectType,width,height,top,left,value,setId,newId,oldId}) {

  // const [item, setItem] = useState([]);
  const itemList = list
  //setItem(itmelist)
  const [inputItem, setInputItem] = useState("")
  const [selectedItem, setSelectedItem] = useState("")
  const [openList, setOpenList] = useState("no-list")
  return (

    <div className='container-page'>
      <div className='select-box' style={{width:width,height:height}}>
           {/* {itmeList.map((itm)=>(
            <h1>{itm}</h1>
           ))} */}
        <div className='drop-down'  onClick={()=>
             {if(openList==='no-list'|| openList==='open-list'){
                 setOpenList('new-open-list')
                 setId(newId)
              }
              else{
                setOpenList('open-list')
                setId(oldId)
              }
            }}>
           {selectedItem?selectedItem:selectType}
           <BiChevronDown size={20}></BiChevronDown>
        </div>

        <div className='option-list-container'>

        <ul className='option-list'  id={openList}>
           <div className='search-bar'>
              <AiOutlineSearch size={20}></AiOutlineSearch>
              <input type='text' placeholder={'Search '+selectType} className='input-dpt-search' onChange={(e)=>
                setInputItem(e.target.value.toLowerCase())
              }></input>
           </div>
           {itemList.map((itm)=>(
             <li className={itm.toLowerCase()=== selectedItem.toLowerCase()?'selected-option':'option'} 
             style={ itm.toLowerCase().startsWith(inputItem)?{display:'block'}:{display:'none'} }
             
             onClick={()=>{
              
              
              if(itm.toLowerCase() !== selectedItem.toLowerCase()){
                 setSelectedItem(itm)
                 value(itm)
              }
             }}>
              {itm}
            </li>
           ))}
        </ul>

        </div>

      </div>
    </div>
  )
}
