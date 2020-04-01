import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SearchResults(props) {

  const [cityData, updateCityData] = useState([]);
  // let filteredCity = props.city.filter(city => (city === props.match.params.city))

  useEffect(async () => {
    // let filteredCity = props.city.filter(city => (city.city === props.match.params.city))
    const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${props.city}/scores/`);
    console.log(response);
    updateCityData(response.data.categories);
  }, [])

  return (
    <div>
      {
        cityData.map(category => (
          <div>
            <p>{category.name}</p>
            <p>{Math.round(category.score_out_of_10)}</p>
          </div>
        ))
      }
      {/* {props.city.filter(city => (
        city.city === props.match.params.city
      )).map(category => (
        <div>
          <p>{category.name}</p>
          <p>{category.score_out_of_10}</p>
        </div>
      ))} */}
    </div>
  )

}

export default SearchResults