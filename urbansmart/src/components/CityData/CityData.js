import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults";
import axios from 'axios';


function CityData() {
  
  const [input, setInput] = useState("");
  const [cityData, updateCityData] = useState([]);
  const [isError, setError] = useState(false);

  const handleSubmit = async () => {
    let city = input.replace(/\s+/g, '-').toLowerCase();
    try {
      const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`);
      updateCityData(response.data.categories)
    } catch (error) {
      setError(true)
      updateCityData([])
    }
  }
  

  return (
    <div>
      <input type="text" value={input} placeholder="type in a city" onChange={(e) => setInput(e.target.value)}></input>
      <Link to={`/citydata/${input}`}>
        <button onClick={handleSubmit}>Submit</button>
      </Link>
      <Switch>
        <Route path="/citydata/:city">
          <SearchResults cityData={cityData} error={isError}/>
        </Route>
      </Switch>
    </div>
  )
  
}

export default CityData



