import React from 'react'
import Headroom from 'react-headroom'
import NavBar from '../component/navbar/NavBar'
import Footer from '../component/footer/Footer'
import DepartmentContent from '../component/department_content/DepartmentContent'

export default function DepartmentPage() {
  return (
    <div id='department-page'>
      <Headroom>
        <NavBar></NavBar>
      </Headroom>
      <DepartmentContent></DepartmentContent>
      <Footer></Footer>
    </div>
  )
}
