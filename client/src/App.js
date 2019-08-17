import React from 'react'

import {Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PlantList from "./components/PlantList";
import MyPlant from "./components/MyPlant";
import Header from './components/layouts/Header'
import PlantCare from "./components/PlantCare";
import myJungle from './pages/myJungle'
// import Navbar from "./components/Navbar"
import Facebook from './components/Facebook'
import MainLayout from './components/layouts/MainLayout'



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />  
        <Route path="/logout" component={Logout} />  
        <Route path="/plants/all" component={PlantList} /> 
        <Route path="/myPlant" component={MyPlant} />  
        <Route path='/myJungle' component={myJungle}/> 
        <Route path="/plantCare/:id" component={PlantCare} />  

      </Switch>

    </div>
  )
}

export default App;

