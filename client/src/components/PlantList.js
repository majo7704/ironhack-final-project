import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./PlantList.css";

export default function PlantList(props) {
  
  if (props.plants) {
    var plants = props.plants.map((plant) => {
      return (
        <Link to={`/scientificPlantCare/${plant._id}`} style={{ textDecoration: 'none', color: '#191818', textAlign: 'center'}}  >
          <div className="Plant-box">
            <img style={{width: '110px', height:'110px', display: 'flex'}} className="Plant-List-image" src={plant.image_url} alt="plant_img" />
            <div>
              <h3 className="Plant-Common-Name">{plant.common_name}</h3>
              <p>{plant.scientific_name}</p>
            </div>
          </div>
        
          <hr></hr>
        
        </Link>
      )
    })
    if (plants.length === 0) {
      plants = <p>You've no plants.</p>
    }
  } else {
    var plants = <p>You've no plants. Sucker.</p>
  } 

 
  return (
      <div>
        {plants}
      </div>
  )
}
