import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults"


function CityData() {
  
  const [input, setInput] = useState("");
  

  return (
    <div>
      <input type="text" value={input} placeholder="type in a city" onChange={(e) => setInput(e.target.value)}></input>
      <Link to={`/citydata/${input}`}>
        <button>Submit</button>
      </Link>
      <Switch>
        <Route path="/citydata/:city">
          <SearchResults city={input.replace(/\s+/g, '-').toLowerCase()}/>
        </Route>
      </Switch>
    </div>
  )

}

export default CityData


