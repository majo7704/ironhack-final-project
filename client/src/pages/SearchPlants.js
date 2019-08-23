import React, { Component } from 'react'
import MainLayout from "../components/layouts/MainLayout"
import PlantList from "../components/PlantList"
import axios from "axios"
import Search from '../components/Search'

export default class SearchPlants extends Component {
  constructor(props) {
    super(props)
    this.onTextChanged = this.onTextChanged.bind(this)
  }

  state = {
    plantList: [],
    suggestions: [],
    searchTerm: ""
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/plants/all`,
      withCredentials: true // here's the juice!
    })
      .then(response => {
        this.setState({ plantList: response.data, suggestions: response.data })
      })
      .catch(err => console.log(err))
  }

    onTextChanged = (e) => {
      const value = e.target.value.toLowerCase();
      let suggestions = [];
      if (value.length > 0) {
        suggestions = this.state.plantList.filter((plant) => {
         
          return (plant.common_name.toLowerCase().indexOf(value) > -1 || plant.scientific_name.toLowerCase().indexOf(value) > -1)
        })
       
        this.setState({ suggestions: suggestions.sort(), searchTerm: e.target.value, })
      }
    }
  render() {
    return (
      <MainLayout>
        <Search inputvalue={this.state.searchTerm} handleChange={this.onTextChanged}/>
        {
          this.state.suggestions ?
            <PlantList 
            route="scientificPlantCare"
            plants={this.state.suggestions} /> :
            <p>Loading</p>
        }
      </MainLayout>
    )
  }
}
