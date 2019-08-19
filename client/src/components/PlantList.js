import React, { Component } from 'react';
import axios from 'axios';  
import { Link } from "react-router-dom";

import MainLayout from './layouts/MainLayout'
import Footer from './Footer'

export default class PlantList extends Component {
  constructor(){
    super()
    this.state = {
        plantList: undefined
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/plants/all`,
      withCredentials: true // here's the juice!
      })
    .then(response => {
      this.setState({plantList: response.data})
    })
    .catch(err => console.log(err))
  }
    render() {
      return (
        <>
        <MainLayout/>
        <div>
          {this.state.plantList ?
          <>
          {this.state.plantList.map((plant) => {
            return (
            <Link to={`/plantCare/${plant._id}`} >
              <div>
                <img src={plant.image_url} alt="plant_img"/>
                <h3>{plant.common_name}</h3>
                <p>{plant.scientific_name}</p>
              </div>
            </Link> 
            )
          })}
          </>
          : null}
          </div>
          
          </>
      )
    }
}