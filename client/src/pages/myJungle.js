import PlantList from '../components/PlantList'
import React, { Component } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import '../css/Navbar.css'
import axios from "axios"
export default class myJungle extends Component {
  state = {
    plantList: null
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/myJungle`,
      withCredentials: true // here's the juice!
    })
      .then(response => {
        debugger
        this.setState({ plantList: [...response.data.wishListPlants, ...response.data.listOfCreatedPlants ]})
      })
      .catch(err => {
        debugger
        console.log(err)
      })
  }

  render() {
    debugger
    return (
      <MainLayout>
        {
          this.state.plantList ?
            <PlantList plants={this.state.plantList} /> :
            <p>Loading</p>
        }
      </MainLayout>
    )
  }
}


