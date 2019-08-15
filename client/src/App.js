import React from 'react'
import {Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./pages/Logout";
import PlantList from "./components/PlantList";
import MyPlant from "./pages/MyPlant";

// import PlantCare from "./components/PlantCare";





function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />  
        <Route path="/logout" component={Logout} />  
        <Route path="/plantList" component={PlantList} /> 
        <Route path="/myPlant" component={MyPlant} />  
 
        {/* <Route path="/plantCare" component={PlantCare} />   */}

      </Switch>

    </div>
  )
}

export default App;

