import PlantList from '../components/PlantList'
import React, { Component } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import '../css/Navbar.css'
import axios from "axios"
export default class myJungle extends Component {
  state = {
    plantList: null,
    count: 0
  }
  incrementCount(){
    this.setState({count:this.state.plantList + 1})
  }
  decrementCount() {
    this.setState({ count: this.state.plantList - 1 })
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/myJungle`,
      withCredentials: true // here's the juice!
    })
      .then(response => {
       
        this.setState({ plantList: [...response.data.wishListPlants, ...response.data.listOfCreatedPlants ]})
      })
      .catch(err => {
       
        console.log(err)
      })
  }

  render() {
    
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


