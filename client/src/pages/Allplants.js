import React, { Component } from 'react'
import MainLayout from "../components/layouts/MainLayout"
import PlantList from "../components/PlantList"
import axios from "axios"
export default class Allplants extends Component {

  state = {
    plantList: []
  }
  
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/plants/all`,
      withCredentials: true // here's the juice!
    })
    .then(response => {
      this.setState({ plantList: response.data })
    })
    .catch(err => console.log(err))
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
