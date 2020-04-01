import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from '../Home/Home';
import CityData from '../CityData/CityData';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/citydata">
          <CityData />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
