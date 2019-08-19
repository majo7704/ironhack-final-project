import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Search.css'
import loop from '../assets/icons/search.svg'
import axios from 'axios';
import PlantList from './PlantList';

export default class Search extends Component {
    constructor(props) {
    super(props);
      this.state = {
        search: "",
        suggestions: null,
        plantList: []
      };
      this.onTextChanged = this.onTextChanged.bind(this)
    }
  componentDidMount() {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/all`,
      withCredentials: true // here's the juice!
      })
      .then(response => {
      debugger
      this.setState({plantList: response.data})
    })
    .catch(err => console.log(err))
  }
  
  onTextChanged = (e) => {
    const value = e.target.value.toLowerCase();
    let suggestions = [];
    if (value.length > 0) {
      suggestions = this.state.plantList.sort().filter((plant) => (
        plant.common_name.indexOf(value)
      ))
      this.setState(() => ({ suggestions, value: e.target.value }))
    }
  }
  suggestionSelected(value) {
    this.setState(() => ({
      search: value,
      suggestions: []
    }))
  }

  renderSuggestions() {
    return this.state.plantList.map((plant, index) => (
      <li>
        <PlantList
          common_name={plant.common_name}
          scientific_name={plant.scientific_name}
          index={index}
          key={this.nextUniqueId}
          />
      </li> 
    ));
    // if (!!allPlants) {
    //   return null
    // } else {
    //   return (
    //     <ul>
    //       {suggestions.keys(props.data).map((plant, index) => {
    //         <li onClick={() => this.suggestionSelected(plant)}>{this.props.data[index]}</li>
    //       })} 
    //     </ul>
    //   );
    // }
  }
    render() {
      let { search } = this.state; //extracting search value from the state
      return (
          <>
          <form className="Search-form" action="">
            <Link to="">
              <img className="loop" src={loop} alt="" srcset=""/>
            </Link>
              <input value='search' onChange={this.onTextChanged}
                style={{ fontFamily: "Nunito", fontSize: "14px" }}
                placeholder="Common or scientific name"
                className="searchField"
                type="text"
              />
              {/* {this.renderSuggestions()} */}
          </form>
            <ul>
            {this.renderSuggestions()}
             </ul>
           </>
          )
        }
      }