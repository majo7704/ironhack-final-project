import React, { Component } from 'react'

import PlantList from '../components/PlantList'
import MainLayout from '../components/layouts/MainLayout'
import Search from '../components/Search'
import '../css/Navbar.css'

export default class myJungle extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  
  render() {
    
    return (
      <>
      <MainLayout/>
        <div>
          {/* <ul>
            {this.props.plantList.map((plant) => {
              return <PlantList plantList={plant} key={plant.id}/>
            })
            }
         </ul> */}
          <Search/>
      
        </div>
        </>
    )
  }
}
