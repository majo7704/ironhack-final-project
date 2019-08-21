import PlantList from '../components/PlantList'
import React, { Component } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import '../css/Navbar.css'
import axios from "axios"
export default class myJungle extends Component {
  state = {
    userPlants: null,
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
      url: `${process.env.REACT_APP_API}/user-plants`,
      withCredentials: true 
    })
      .then(response => {
         this.setState({ userPlants: response.data })
       
        // this.setState({ plantList: [...response.data.wishListPlants, ...response.data.listOfCreatedPlants ]})
      })
      .catch(err => {
       
        console.log(err)
      })
  }

  render() {
    
    return (
      <MainLayout>
        {
          this.state.userPlants ?
            <PlantList plants={this.state.userPlants} /> :
            <p>Loading</p>
        }
      </MainLayout>
    )
  }
}


