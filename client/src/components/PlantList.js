import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./PlantList.css";

export default function PlantList(props) {
  
  if (props.plants) {
    var plants = props.plants.map((plant) => {
      return (
        <Link to={`/plantCare/${plant._id}`} >
          <div className="Plant-box">
            <img className="Plant-List-image" src={plant.image_url} alt="plant_img" />
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
