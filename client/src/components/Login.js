import React, { Component } from 'react'
import Auth from "../utils/Auth";
import "./Login.css";

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
            this.props.history.push("/")
        })
        .catch(({error})=> {
            this.setState({error: error.data.message})
        })
  }

  render(){
    
    return (
     <div className="Login-page">
       <p className="Login-title">Login</p>
       <form onSubmit={this.handleFormSubmit}> 
           <div className="Login-input-field">
               <input className="Login-input-text" type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
           </div>

           <div className="Login-input-field">
                <input className="Login-input-text" type="password" name="password" placeholder="password" checked={this.state.user.password} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
            <div >
              <input  className="Login-button Button-text" type="submit" value="Submit" />
            </div>
        </form>
    </div>
    )
  }
}