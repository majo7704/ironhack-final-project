    
import React, { Component } from 'react'
import axios from 'axios';  

export default class PlantCare  extends Component {
  constructor(){
    super()
    this.state = {
        plant: undefined
    }
  }

  componentDidMount() {
    const { params } = this.props.match;
    const plantId = params._id

    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API/plantId}`,
      withCredentials: true
    })
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
        <h2>{this.props.common_name}</h2>
        <p>{this.props.scientific_name}</p>
        <img src={this.props.image_url} alt="plant_img" />
      </div>

      <div>
        <div>
          <img src="./icon/sun.png" alt="sun_icon"/>
          <p>Exposition</p>
          <p>{this.props.light_expousure}</p>
        </div>

        <div>
          <img src="./icon/"/>
          <p>Temperature</p>
          <p>{this.props.temperature}</p>
        </div>

        <div> 
          <img></img>
          <p>Watering</p>
          <p>{this.props.watering}</p>
        </div>

        <div> 
          <img></img>
          <p>Fertilization</p>
          <p>{this.props.fertilization}</p>
        </div>

        <div>      
          <img></img>
          <p>Spray</p>
          <p>{this.props.mist}</p>
        </div>

        <div>
          <img></img>
          <p>Soil</p>
          <p>{this.props.soil}</p>{this.props.soil}
        </div>

        <div>
          <img></img>
          <p>Toxicity</p>
          <p>{this.props.toxicity}</p>
        </div>

        <div>
          <img></img>
          <p>Tips</p>
          <p>{this.props.extra_info}</p>
        </div>
        
      </div>
      </>
      : null}

      </div>
    )
  }
}
