import React, { Component } from 'react'

import PlantList from '../components/PlantList'
import MainLayout from '../components/layouts/MainLayout'
import '../css/Navbar.css'

export default class myJungle extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  updateSearch(event) {
    this.setState({search: event})
  }
  render() {
    let {search} = this.state
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

          <form action="">
            <input className='searchField' type="text"/>
          </form>
       
      
        </div>
        </>
    )
  }
}
