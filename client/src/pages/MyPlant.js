import React, { Component } from 'react';
import axios from "axios";
import qs from "querystring"; 
 
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
        <form 
          onSubmit={this.handleFormSubmit}
          ref={this.formRef} 
          onSubmit={this.handleFormSubmit} >
            
            <div>
                <label>Give your plant a cool name</label>
                <input type="text" name="name" placeholder="Ned Flanders" value={this.state.name} onChange={this.handleFormChange} /> 
            </div>
​
            <div>
                <label>Where is your plant:</label>
                <input type="text" name="location" placeholder="Living room" value={this.state.location} onChange={this.handleFormChange} />
            </div>
​
            <div>
                <label>Part of your life since</label>
                <input type="date" name="buying_date" placeholder="September 2019" checked={this.state.buying_date} onChange={this.handleFormChange} />
            </div>
​
            <div>
                <label>Size</label>
                <input type="text" name="size" placeholder="15 cm" checked={this.state.size} onChange={this.handleFormChange} />
            </div>
            <div>
                <label>Pot diameters</label>
                <input type="number" name="pot_size" placeholder="20 cm" checked={this.state.pot_size} onChange={this.handleFormChange} />
            </div>
            <div>
                <label>Last repot date</label>
                <input type="date" name="repot_date" placeholder="Not happened yet" checked={this.state.repot_date} onChange={this.handleFormChange} />
            </div>
​
            <div>
                <label>Notes:</label>
                <textarea type="text" name="notes" placeholder="Need additionnal info? Type it here :)" value={this.state.notes} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
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