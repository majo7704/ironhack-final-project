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
import search from './components/Search'
// import Navbar from "./components/Navbar"
// import Facebook from './components/Facebook'
import MainLayout from './components/layouts/MainLayout'
import globalStyles from '../src/assets/styles/global.css'
import FindYourPlant from './pages/FindYourPlant';



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />  
        <Route path="/logout" component={Logout} />  
        <Route path="/all" component={PlantList} /> 
        <Route path="/myPlant" component={MyPlant} />  
        <Route path='/myJungle' component={myJungle}/> 
        <Route path="/plantCare/:id" component={PlantCare} />  
        <Route path='/search' component={search}/>
      </Switch>
    
    </div>
  )
}

export default App;

