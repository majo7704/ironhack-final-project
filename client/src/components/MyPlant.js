import React, { Component } from 'react';
import axios from "axios";
import Navbar from './Navbar'

import {Link} from "react-router-dom";

import "./MyPlant.css"
import MainLayout from './layouts/MainLayout';

class MyPlant extends Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef(); 
    this.state = { 
      cool_name: '',
      location: '',
      buying_date: '',
      size: '',
      pot_diameter: '',
      repot_date: '',
      notes: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange = (e)=> {
    this.setState({ 
        [e.target.name]: e.target.value
    })
  }
  
  handleFormSubmit = (e)=> {
    e.preventDefault(); 
    let form = new FormData(this.formRef.current);
    axios({
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: `${process.env.REACT_APP_API}/newPlant`,
        withCredentials: true,
        data: form
      })

      .then((response)=> {
        this.props.history.push("/PlantList")
      })
      .catch((error)=> {
        this.setState({error: error.message})
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="photo">
          <img
            className="Monstera"
            src="https://c.stocksy.com/a/1aH600/z9/1497549.jpg?1559310506"
            alt="Monstera"
          />
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              margin: "0"
            }}
            className="Care-Plant-box"
          >
            <Link to={"/login"} className="Care-links">
              Care
            </Link>
            <Link to={"/myPlant"} className="Plant-links">
              My plant
            </Link>
          </div>
        </div>
        <form
          className="form"
          onSubmit={this.handleFormSubmit}
          ref={this.formRef}
          onSubmit={this.handleFormSubmit}
        >
          <div className="coolInput">
            <label
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                margin: "0"
              }}
            >
              Give your plant a cool name
            </label>
            <input
              type="text"
              name="cool_name"
              placeholder="Ned Flanders"
              value={this.state.cool_name}
              onChange={this.handleFormChange}
            />
          </div>
          <div class="Ultimate-container">
            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Where is your plant:
              </label>
              <input
                type="text"
                name="location"
                placeholder="Living room"
                value={this.state.location}
                onChange={this.handleFormChange}
              />
            </div>

            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Part of your life since
              </label>
              <input
                type="date"
                name="buying_date"
                placeholder="September 2019"
                checked={this.state.buying_date}
                onChange={this.handleFormChange}
              />
            </div>

            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Size
              </label>
              <input
                type="text"
                name="size"
                placeholder="15 cm"
                checked={this.state.size}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Pot diameters
              </label>
              <input
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
                type="number"
                name="pot_diameter"
                placeholder="20 cm"
                checked={this.state.pot_diameter}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Last repot date
              </label>
              <input
                type="date"
                name="repot_date"
                placeholder="Not happened yet"
                checked={this.state.repot_date}
                onChange={this.handleFormChange}
              />
            </div>

            <div className="restInput">
              <label
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  margin: "0"
                }}
              >
                Notes:
              </label>
              <textarea
                type="text"
                name="notes"
                placeholder="Need additionnal info? Type it here :)"
                value={this.state.notes}
                onChange={this.handleFormChange}
              />
              {/* reacts wants to be in charge of all the data   */}
            </div>
            <div className="Box-container">
              <button className="Add-image">
                {/* <img src={} alt=""/> */}
                <input type="file" name="picture" />
              </button>
            </div>
            <div>
              <input
                type="submit"
                value="Validate"
                className="btn-validate"
              />
            </div>
          </div>
        </form>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default MyPlant;

