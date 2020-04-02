import React from 'react';
import './SearchResults.css'

function SearchResults(props) {
//summary returns with html tags from API, so we have to use dangerouslySetInnerHTML
  return (
    <div className="SearchResults">
      {props.error ? <p>Type in a valid city</p> :
        <>
          <div className="summary" dangerouslySetInnerHTML={{__html: `${props.summary}`}}></div>
        {
          props.cityData.map(category => (
            <div className="categories">
              <p>{category.name}</p>
              <div className="bar">
                <div className="progressbar10"></div>
                <div className="progressbar" style={{width: `${Math.round(category.score_out_of_10)*10}%`}}>{Math.round(category.score_out_of_10)}/10</div>
              </div>
            </div>
          ))
        }
        </>
      }
    </div>
  )
}

export default SearchResults