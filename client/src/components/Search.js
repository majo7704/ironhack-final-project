import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Search.css'
import loop from '../assets/icons/search.svg'
import PlantList from './PlantList';

export default class Search extends Component {
    render() {
      return (
          <>
            <form className="Search-form" action="">
              <Link to="">
                <img className="loop" src={loop} alt="" srcset=""/>
              </Link>
            <input value={this.props.searchTerm} onChange={this.props.handleChange}
                  style={{ fontFamily: "Nunito", fontSize: "14px" }}
                  placeholder="Common or scientific name"
                  className="searchField"
                  type="text"
                />
            </form>
          </>
          )
        }
      }