import React from 'react'
import {Route, Switch} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />  
        <Route path="/login" component={Login} />  

      </Switch>

    </div>
  )
}

export default App;

