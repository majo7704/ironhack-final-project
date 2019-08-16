import React, { Component } from 'react';
import "./Signup.css";
import Auth from "../utils/Auth";
import {Link} from "react-router-dom";

const auth = new Auth();



class Signup extends Component {
  constructor(props){
    super(props)

    this.state = { 
      user:{
        username: '',
        password: '',
        email: '',
      }
    }
  
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormChange = (e)=> {
    let user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({ 
        user:user
    })
  }

  handleFormSubmit = (e)=> {
    e.preventDefault();
    auth.signup(this.state.user)
        .then(()=> {
            this.setState({error: ""})
            this.props.history.push("/myJungle")
        })
        .catch(({error})=> {
            this.setState({error: error.data.message})
        })
  }

  render(){
     return (
      <div className="Signup-page">
        <p className="Signup-title"> Sign up </p>
        <form onSubmit={this.handleFormSubmit}>
            <div className="Signup-input-field">
                <input className="Signup-input-text" type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
            <div div className="Signup-input-field">
                <input className="Signup-input-text" type="password" name="password" placeholder="Password" checked={this.state.user.password} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div div className="Signup-input-field">
                <input className="Signup-input-text" type="text" name="email" placeholder="Email" value={this.state.user.email} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
    ​
            <div>
              <input className="Button Signup-button Button-text" type="submit" value="Submit" />
              <p className="Signup-redirect">Already an account? <Link to={`/login`} className="Link">
             Login!</Link></p>
            </div>
            
        </form>
    </div>
    )
  }
}

export default Signup