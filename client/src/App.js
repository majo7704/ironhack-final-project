import React from 'react'

import {Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MyPlant from "./components/MyPlant";
import ScientificPlantCare from "./components/ScientificPlantCare";
import myJungle from './pages/myJungle'
// import Navbar from "./components/Navbar"
// import Facebook from './components/Facebook'
import MainLayout from './components/layouts/MainLayout'
import globalStyles from '../src/assets/styles/global.css'
import FindYourPlant from './pages/FindYourPlant';
import AllPlants from './pages/AllPlants';
import SearchPlants from './pages/SearchPlants';
import Wishlist from './pages/WishList';




function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />  
        <Route path="/logout" component={Logout} />  
        <Route path="/all" component={AllPlants} /> 
        <Route path="/myPlant" component={MyPlant} />  
        <Route path='/myJungle/:user_id' component={myJungle} />
        <Route path="/scientificPlantCare/:id" component={ScientificPlantCare} /> 
        <Route path='/search' component={SearchPlants}/>
        <Route path='/myWishlist/:user_id' component={Wishlist}/>

      </Switch>
    
    </div>
  )
}

export default App;

