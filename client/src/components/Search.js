import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Search.css'
import loop from '../assets/icons/search.svg'

export default class Search extends Component {
    constructor() {
    super();
      this.state = {
        search: "",
        suggestions: {},
        plantList: ""
          };
    }
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = this.plantList.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({suggestions, search: value}))
  }
  suggestionSelected(value) {
    this.setState(() => ({
      search: value,
      suggestions: []
    }))
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map(plant => (
          <li onClick={() => this.suggestionSelected(plant)}>{plant}</li>
        ))}
      </ul>
    );
  }
          render() {
          let { search } = this.state; //extracting search value from the state
          return (
                <form className="Search-form" action="">
                  <Link to="">
                    <img
                      className="loop"
                      src={loop}
                      alt=""
                      srcset=""
                    />
                  </Link>
                  <input value='search' onChange={this.onTextChanged}
                    style={{ fontFamily: "Nunito", fontSize: "14px" }}
                    placeholder="Common or scientific name"
                    className="searchField"
                    type="text"
              />
              {this.renderSuggestions()}
                </form>
             
           
          );
        }
      }