import React, {Component} from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  
  constructor() {
    super()
  }

  componentDidMount = async () => {
    const response = await axios.get("https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/")
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default App;
