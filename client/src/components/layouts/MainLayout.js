import React from 'react'
import Footer from '../Footer'

 const MainLayout = (props) => {
  return (
    <div style={{display: "block"}}  className="Main-box">
      {props.children}
      <Footer />
    </div>
  )
}
export default MainLayout;
