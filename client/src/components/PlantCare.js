    
import React, { Component } from 'react'
import axios from 'axios';  
import "./PlantCare.css";
import {Link} from "react-router-dom";
import plus from '../assets/icons/add (1).svg'
import Auth from '../utils/Auth'

const auth = new Auth();




export default class PlantCare  extends Component {
  constructor(){
    super()
    this.state = {
        plant: undefined
    }
  }

  componentDidMount() {
    const { params } = this.props.match;
    const plantId = params.id

    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/plant-care/${plantId}`,
      withCredentials: true
    })
    .then(response => {
      
      this.setState({plant: response.data})
      console.log(`${this.props}, ${this.plant}`)

    })
  }

  AddToCollection() {
    
    const { params } = this.props.match;
    const plantId = params.id

    return axios({
        method: "POST",
        baseURL: this.domain,
        url: `${process.env.REACT_APP_API}/add/${plantId}`,
        withCredentials: true,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },

    })
    .then((res)=> {
      return auth.setUser(res.data)
    })
    .then(() => {
      const userId = auth.getUser()._id
      this.props.history.push(`/myJungle/${userId}`)  
    })
    .catch(error => {
      console.log(error)
    })
}
  

  render() {
    
   return (
    <div>
      {this.state.plant ?
      <>
      <header>
        <div className="Plant-info-header">
          <div>
            <h2>{this.state.plant.common_name}</h2>
            <p>{this.state.plant.scientific_name}</p>
          </div>
          <div>
                <button className='pinkButton'>
                  <Link to={"/myPlant"}>
                    <img style={{width: '20px',height: '20px', color: "white" }} src={plus} alt="" />
                  </Link>
                </button>
          </div>
        </div>
        <div className="Plant-info-white-links">
          <div>
            <img scr=".." alt="plant-logo"/>
            <button onClick={() => {this.AddToCollection()}}>Add to my collection</button>
           
          </div>

          <div>
            <img scr="../" alt="heart-logo"/>
            Add to my wish list
          </div>
        </div>
      </header>
   

      <div>
        <img className="Plant-image" src={this.state.plant.image_url} alt="plant_img" />
          <div className="Care-Plant-box">
           Plant info
          </div>
      </div>    

      <div className="All-boxes">
        <div className="Icon-box">
          <img className="Icon-image" src="../icon/sun.png" alt="sun_icon"/>
          <p>Exposition</p>
          <p>{this.state.plant.light_expousure}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src="../icon/thermometer.png" alt="icon"/>
          <p>Temperature</p>
          <p>{this.state.plant.temperature}</p>
        </div>
      
        <div className="Icon-box"> 
          <img className="Icon-image" src="../icon/watering-can.png" alt="icon"/>
          <p>Watering</p>
          <p>{this.state.plant.watering}</p>
        </div>

      </div>

      <div className="Wave">
        <img src="../Images/fill-153.svg" alt="Wave" />
      </div>

      <div className="All-boxes">
        <div className="Icon-box"> 
          <img className="Icon-image" src="../icon/fertilizer.png" alt="icon"/>
          <p>Fertilization</p>
          <p>{this.state.plant.fertilization}</p>
        </div>

        <div className="Icon-box">      
          <img className="Icon-image" src="../icon/spray.png" alt="icon"/>
          <p>Spray</p>
          <p>{this.state.plant.mist}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src="../icon/leaf.png" alt="icon"/>
          <p>Soil</p>
          <p>{this.state.plant.soil}</p>{this.state.plant.soil}
        </div>

      </div>

      <div className="Wave">
        <img src="../Images/fill-153.svg" alt="Wave" />
      </div>

      <div className="All-boxes">
        <div className="Icon-box">
          <img className="Icon-image" src="../icon/sun" alt="icon"/>
          <p>Toxicity</p>
          <p>{this.state.plant.toxicity}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src="../icon/sun" alt="icon"/>
          <p>Tips</p>
          <p>{this.state.plant.extra_info}</p>
        </div>
      
      </div>
      
      </>
      : null}

      </div>
    )
  }
}
