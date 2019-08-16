    
import React, { Component } from 'react'
import axios from 'axios';  

export default class PlantCare extends Component {
  constructor(){
    super()
    this.state = {
        plant: undefined
    }
  }

  componentDidMount() {
    const {params} = this.props.match;
    const plantId = params._id

    axios.get(`${process.env.REACT_APP_API/plantId}`)
    .then(response => {
      this.setState({plant: response.data})
    })
  }

  render() {
    
   return (
    <div>
      {this.state.plant ?
      <>
      <div>
        <h2>{props.common_name}</h2>
        <p>{props.scientific_name}</p>
        <img src={props.image_url} alt="plant_img" />
      </div>

      <div>
        <div>
          <img src="./icon/sun.png" alt="sun_icon"/>
          <p>Exposition</p>
          <p>{props.light_expousure}</p>
        </div>

        <div>
          <img src="./icon/"/>
          <p>Temperature</p>
          <p>{props.temperature}</p>
        </div>

        <div> 
          <img></img>
          <p>Watering</p>
          <p>{props.watering}</p>
        </div>

        <div> 
          <img></img>
          <p>Fertilization</p>
          <p>{props.fertilization}</p>
        </div>

        <div>      
          <img></img>
          <p>Spray</p>
          <p>{props.mist}</p>
        </div>

        <div>
          <img></img>
          <p>Soil</p>
          <p>{props.soil}</p>{props.soil}
        </div>

        <div>
          <img></img>
          <p>Toxicity</p>
          <p>{props.toxicity}</p>
        </div>

        <div>
          <img></img>
          <p>Tips</p>
          <p>{props.extra_info}</p>
        </div>
        
      </div>
      </>
      : null}

      </div>
    )
  }
}
