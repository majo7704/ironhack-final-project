import React, { Component } from 'react';
import "./MyPlant.css";
import axios from "axios";
import qs from "querystring"; 
import {Link} from "react-router-dom";

 
class MyPlant extends Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef(); 

    this.state = { 
      
      name: '',
      location: '',
      buying_date: '',
      size: '',
      pot_size: '',
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
        data:  qs.stringify(this.state),
        url: `${process.env.REACT_APP_API}/newPlant`
    })

    .catch((error)=> {
        console.log(error)
    })
  
  }
  render(){
    return (
      
      <div>
        <img className="Monstera" src = "https://c.stocksy.com/a/1aH600/z9/1497549.jpg?1559310506" alt="Monstera"/>
        <div className="Care-Plant-box">
          <Link to={"/login"} className="Care-links">Care</Link>
          <Link to={"/login"} className="Plant-links">My plant</Link>
        </div>

        <form 
          onSubmit={this.handleFormSubmit}
          ref={this.formRef} 
          onSubmit={this.handleFormSubmit} >
            
            <div className="Box-container">
              <label>Give your plant a cool name</label>
              <input className="Box" type="text" name="name" placeholder="Ned Flanders" value={this.state.name} onChange={this.handleFormChange} /> 
            </div>
​
             <div className="Box-container">
                <label>Where is your plant</label>
                <input className="Box" type="text" name="location" placeholder="Living room" value={this.state.location} onChange={this.handleFormChange} />
            </div>
​
            <div className="Box-container">
              <label>Part of your life since</label>
              <input className="Box" type="date" name="buying_date" placeholder="September 2019" checked={this.state.buying_date} onChange={this.handleFormChange} />
            </div>
​
            <div className="Box-container">
              <label>Size</label>
              <input className="Box" type="text" name="size" placeholder="15 cm" checked={this.state.size} onChange={this.handleFormChange} />
            </div>

            <div className="Box-container">
              <label>Pot diameters</label>
              <input className="Box" type="number" name="pot_size" placeholder="20 cm" checked={this.state.pot_size} onChange={this.handleFormChange} />
            </div>

            <div className="Box-container">
              <label>Last repot date</label>
              <input className="Box" type="date" name="repot_date" placeholder="Not happened yet" checked={this.state.repot_date} onChange={this.handleFormChange} />
            </div>
​
            <div className="Box-container">
              <label>Notes:</label>
              <textarea className="Box" type="text" name="notes" placeholder="Need additionnal info? Type it here :)" value={this.state.notes} onChange={this.handleFormChange} />
            </div>

            <div className="Box-container">
              <input type="file" name="picture"/>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>

        </form>
      
    </div>
    )
  }
}

export default MyPlant;