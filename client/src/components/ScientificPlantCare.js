    
import React, { Component } from 'react'
import axios from 'axios';  
import "./PlantCare.css";
import {Link} from "react-router-dom";
import exit from '../assets/icons/cancel.svg'
import toxic from '../assets/icons/toxicity.svg'
import like from '../assets/icons/like.svg'
import soil from '../assets/icons/soil.svg'
import leaf from '../assets/icons/leaf.svg'
import tip from '../assets/icons/tip.svg'
import Auth from '../utils/Auth'

const auth = new Auth();
export default class ScientificPlantCare  extends Component {
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
    })
  }

  AddToCollection() {
    
    const { params } = this.props.match;
    const plantId = params.id

    return axios({
        method: "POST",
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

AddToWishlist() {

  debugger
    
  const { params } = this.props.match;
  const plantId = params.id

  return axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/user-wishlist/${plantId}`,
      withCredentials: true,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },

  })
  .then((res)=> {
   
    return auth.setUser(res.data)
  })
  .then(() => {
   
    const userId = auth.getUser()._id
    this.props.history.push(`/myWishlist/${userId}`)  
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
             <div className="Plant-info-header" style={{ display: 'flex', justifyContent:'space-around' }} >

               <div style={{ width: '50%' }}>
                 <h2 style={{
                   margin: '2% 0 0 0', fontFamily: "Nunito",
                   fontWeight: "bold" }}>{this.state.plant.common_name}</h2>
                 <p style={{ margin: '5% 0 0 0' }}>{this.state.plant.scientific_name}</p>
          </div>
          <div>
                <button className='pinkButton' >
                  <Link to={"/search"}>
                    <img style={{width: '20px',height: '20px', color: "white"}} src={exit} alt="" />
                  </Link>
                </button>
          </div>
        </div>
        <div className="Plant-info-white-links">
          <div>
            <img style={{ width: '30px', height: '30px', padding: '0 1% 0 0' }} src={leaf} alt="plant-logo"/>
            <button className="Link-button" onClick={() => {this.AddToCollection()}}>Add to my collection</button>
           
          </div>

          <div>
            <img style={{ width: '25px', height: '25px' , padding:'1% 1% 0 0'}} src={like} alt="heart-logo"/>
            <button className="Link-button" onClick={() => {this.AddToWishlist()}}> Add to my wish list</button>
                
          </div>
        </div>
      </header>
   

      <div>
        <img className="Plant-image" src={this.state.plant.image_url} alt="plant_img" />
          <div className="Plant-info">
           Plant info
          </div>
      </div>    

      <div className="All-boxes">
        <div className="Icon-box">
          <img className="Icon-image" src="../icon/sun.png" alt="sun_icon"/>
          <p className="Title-box">Exposition</p>
          <p className="Data-box">{this.state.plant.light_expousure}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src="../icon/thermometer.png" alt="icon"/>
          <p className="Title-box">Temperature</p>
          <p className="Data-box">{this.state.plant.temperature}</p>
        </div>
      
        <div className="Icon-box"> 
          <img className="Icon-image" src="../icon/watering-can.png" alt="icon"/>
          <p className="Title-box">Watering</p>
          <p className="Data-box">{this.state.plant.watering}</p>
        </div>

      </div>

      <div className="Wave">
        <img src="../Images/fill-153.svg" alt="Wave" />
      </div>

      <div className="All-boxes">
        <div className="Icon-box"> 
          <img className="Icon-image" src="../icon/fertilizer.png" alt="icon"/>
          <p className="Title-box">Fertilization</p>
          <p className="Data-box">{this.state.plant.fertilization}</p>
        </div>

        <div className="Icon-box">      
          <img className="Icon-image" src="../icon/spray.png" alt="icon"/>
          <p className="Title-box">Spray</p>
          <p className="Data-box">{this.state.plant.mist}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src={soil} alt="icon"/>
          <p className="Title-box">Soil</p>
          <p className="Data-box">{this.state.plant.soil}</p>
        </div>

      </div>

      <div className="Wave">
        <img src="../Images/fill-153.svg" alt="Wave" />
      </div>

      <div className="All-boxes">
        <div className="Icon-box">
          <img className="Icon-image" src={toxic} alt="icon"/>
          <p className="Title-box">Toxicity</p>
          <p className="Data-box">{this.state.plant.toxicity}</p>
        </div>

        <div className="Icon-box">
          <img className="Icon-image" src={tip} alt="icon"/>
          <p className="Title-box">Tips</p>
          <p className="Data-box">{this.state.plant.extra_info}</p>
        </div>
      
      </div>
      
      </>
      : null}

      </div>
    )
  }
}
