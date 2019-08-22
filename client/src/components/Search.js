import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Search.css'
import loop from '../assets/icons/search.svg'
import MainLayout from '../components/layouts/MainLayout'
import Navbar from '../components/Navbar'
import HeaderSearch from '../components/layouts/HeaderSearch'
import '../css/Navbar.css'
import PlantList from './PlantList';
import bubble from '../assets/icons/pinkBubble.png'

export default class Search extends Component {
    render() {
      return (
        <div>
          <HeaderSearch/>
          <Navbar/>     
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
          </div>
          )
        }
      }