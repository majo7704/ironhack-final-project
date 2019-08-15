import React, { Component } from 'react';
import axios from 'axios';  
import {Link} from "react-router-dom";

export default class PlantList extends Component {
  constructor(){
    super()
    this.state = {
        plantList: undefined
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/plants`)
    .then(response => {
      this.setState({plantList: response.data})
    })
  }

  render() {
    
      return (
        <div>
          {this.state.plantList ?
          <>
          {this.state.plantList.map((plant) => {
            return (
            <Link to={`/${plant._id}`} >
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
      )
  }
  
}