import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

 const MainLayout = (props) => {
  return (
    <div style={{display: "block"}}  className="Main-box">
      <Navbar/>
      {props.children}
      
    </div>
  )
}
export default MainLayout;
