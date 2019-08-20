import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default function PlantList(props) {
  debugger
  if (props.plants) {
    var plants = props.plants.map((plant) => {
      return (
        <Link to={`/plantCare/${plant._id}`} >
          <div>
            <img src={plant.image_url} alt="plant_img" />
            <h3>{plant.common_name}</h3>
            <p>{plant.scientific_name}</p>
          </div>
        </Link>
      )
    })
    if (plants.length === 0) {
      plants = <p>You've no plants. Sucker.</p>
    }
  } else {
    var plants = <p>You've no plants. Sucker.</p>
  } 

  debugger
  return (
      <div>
        {plants}
      </div>
  )
}
