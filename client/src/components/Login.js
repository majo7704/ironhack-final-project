import React, { Component } from 'react'
import Auth from "../utils/Auth";
import "./Login.css";
import {Link} from "react-router-dom";


const auth = new Auth();

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = { 
      user:{
        username: '',
        password: '',
      },
      error : null,
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)  
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
    auth.login(this.state.user.username, this.state.user.password)
        .then(()=> {
          debugger
            this.setState({error: ""})
            this.props.history.push("/myJungle")
        })
        .catch(({error})=> {
            this.setState({error: error.data.message})
        })
  }

  render(){
    
    return (
     <div className="Login-page">

       <div className="Connect">
        <p className="Connect-txt">Connect</p>
        <button className="Connect-button Facebook"><img className="Facebook-icon" src="icon/facebook.png"/>Signin with facebook</button>
        <button className="Connect-button Google"><img className="Google-icon" src="icon/google.svg"/>Signin with Google</button>
       </div>

       <p className="Or">- or -</p>

       <form onSubmit={this.handleFormSubmit}> 
        <p className="Login-title">Login</p>
        <div className="Login-input-field">
          <input className="Login-input-text" type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
        </div>

        <div className="Login-input-field">
          <input className="Login-input-text" type="password" name="password" placeholder="password" checked={this.state.user.password} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
        </div>
        
        <p className="Forgotten-password">Forgotten password?</p>

        <div>
          <input  className="Login-button Button-text" type="submit" value="Submit" />
          <p className="Signup-redirect">New user? <Link to={`/signup`} className="Link">
             Signup first!</Link></p>
        </div>
      </form>
    </div>
    )
  }
}