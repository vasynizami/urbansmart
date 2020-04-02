import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import SearchResults from "../SearchResults/SearchResults";
import axios from 'axios';
import './CityData.css';
import Header from '../Header/Header';

function CityData() {
  
  const [input, setInput] = useState("");
  const [cityData, updateCityData] = useState([]);
  const [summary, updateSummary] = useState("");
  const [isError, setError] = useState(false);
  
  const handleSubmit = async () => {
    let city = input.replace(/\s+/g, '-').toLowerCase();
    try {
      const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`);
      updateCityData(response.data.categories)
      updateSummary(response.data.summary)
      setError(false)
    } catch (error) {
      setError(true)
      updateCityData([])
      updateSummary("")
    }
  }
  

  return (
    <>
      <Header />
      <div className="CityData">
        <div className="form">
          <input type="text" value={input} placeholder="urban area" onChange={(e) => setInput(e.target.value)}></input>
          <Link to={`/citydata/${input}`}>
            <button onClick={handleSubmit}>submit</button>
          </Link>
        </div>
        <Switch>
          <Route path="/citydata/:city">
            <SearchResults cityData={cityData} error={isError} summary={summary}/>
          </Route>
        </Switch>
      </div>
    </>
  )
  
}

export default CityData



