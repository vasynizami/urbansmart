import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SearchResults(props) {

  const [cityData, updateCityData] = useState([]);

  useEffect(async () => {
    
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
            <p>{category.score_out_of_10}</p>
          </div>
        ))
      }
    </div>
  )

}

export default SearchResults