
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import "./MyPlant.css"
import MainLayout from './layouts/MainLayout';
import React, { Component } from 'react';
import axios from "axios";
import camera from '../assets/icons/camera.svg'
// import service from "../api/service";

// import Footer from './Footer'

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
      notes: '',
      selectedFile: 'null',
      image_url: 'image_url'
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  // handleFileUpload = e => {
  //   console.log("The file to be uploaded is: ", e.target.files[0]);

  //   const uploadData = new FormData();
  //   uploadData.append('image_url', e.target.files[0]);

  //   service.handleUpload(uploadData)
  //     .then(response => {
  //       console.log('response is:', response);
  //       this.setState({ image_url: response.secure_url });
  //     })
  //     .catch(err => {
  //       console.log('Error while uploading the file: ', err)
  //     });
  // }
  

  handleFormChange = (e)=> {
    this.setState({ 
      [e.target.name]: e.target.value,
      // selectedFile: event.target.files[0],
      // loaded: 0
    })
  }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   service.saveNewThing(this.state)
  //     .then(res => {
  //       console.log('added: ', res);
  //     })
  //     .catch(err => {
  //       console.log('Error while adding the thing: ', err);
  //   })
  // }

  // handleFormSubmit = (e)=> {
  //   e.preventDefault(); 
  //   let form = new FormData(this.formRef.current);
  //   axios({
  //       method: "POST",
  //       url: `${process.env.REACT_APP_API}/newPlant`,
  //       withCredentials: true,
  //       data: form
  //     })
  //     .then((response)=> {
  //       this.props.history.push("/PlantList")
  //     })
  //     .catch((error)=> {
  //       this.setState({error: error.message})
  //     })
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let form = new FormData(this.formRef.current);
    let { plantId } = this.props.match.params
   
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/newPlant/${plantId}`,
      withCredentials: true,
      data: form
    })
      .then((response) => {
        
        this.props.history.push("/PlantList")
      })
      .catch((error) => {
       
        this.setState({ error: error.message })
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
            <Link to={"/login"} className="Care-links" style={{
              textDecorationLine: 'none', color: '#191818'
            }} >
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
                  margin: "0 auto"
                }}
              >
                Size
              </label>
              <input 
                type="number"
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
                  width: "70%"
                  
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
              <button  className="Add-image" >
                {/* <img src={} alt=""/> */}
                <input  type="file" name="image_url" onChange={this.handleFormChange} />
              </button>
            </div>
            <div>
              <button type="submit" className="btn-validate">
                Upload
              {/* <input
                type="submit"
                value="Validate"
                className="btn-validate"
                /> */}
              </button>
            </div>
          </div>
        </form>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default MyPlant;

