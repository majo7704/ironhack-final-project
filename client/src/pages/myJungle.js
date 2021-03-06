import PlantList from '../components/PlantList'
import React, { Component } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import Navbar from '../components/Navbar'
import HeaderJungle from '../components/layouts/HeaderJungle'
import '../css/Navbar.css'
import axios from "axios"
import PlantUtils from "../utils/Plants.js"
import Auth from '../utils/Auth'

const auth = new Auth();
const plantUtils = new PlantUtils()
export default class myJungle extends Component {
  state = {
    userPlants: null,
  }

  componentDidMount() {
    const userId = auth.getUser()._id
    
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/user-plants/${userId}`,
      withCredentials: true 
    })
      .then(response => {
        
         plantUtils.setPlants(response.data)
         this.setState({ 
           userPlants: response.data, 
        });
      })
      .catch(err => {
       
        console.log(err)
      })
  }

  render() {
    
    return (
      <div>
        <HeaderJungle/>
        <Navbar/>     
        <MainLayout>
          {
            this.state.userPlants ?
              <PlantList 
              model="plantOfUser"
              route="myPlant"
              plants={this.state.userPlants} /> :
              <p>Loading</p>
          }
        </MainLayout>
      </div>
    )
  }
}


