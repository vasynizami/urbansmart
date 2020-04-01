import React from 'react';


function SearchResults(props) {

  return (
    <div className="SearchResults">
      {props.error ? <p>Type in a valid city</p> :
       <>
        {
         props.cityData.map(category => (
          <div>
            <p>{category.name}</p>
            <p>{Math.round(category.score_out_of_10)}</p>
          </div>
         ))
        }
        </>
      }
    </div>
  )
}

export default SearchResults