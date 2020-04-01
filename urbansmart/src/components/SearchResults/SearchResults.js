import React from 'react';


function SearchResults(props) {

  return (
    <div className="SearchResults">
      {
        props.cityData.map(category => (
          <div>
            <p>{category.name}</p>
            <p>{Math.round(category.score_out_of_10)}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SearchResults