
  import React from 'react'
  import Navbar from '../Navbar'
  import Footer from '../Footer'

  const SearchLayout = (props) => {
    return (
      <div style={{ display: "block" }} className="Main-box">
        {/* <Navbar />
        {props.children} */}
        <Footer />
      </div>
    )
  }
  export default SearchLayout;
  