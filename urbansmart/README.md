# URBANSMART

![space gif](https://media.giphy.com/media/9tx0gy37p7oXu/giphy-downsized.gif)

## Description

Urbansmart app provides quality of life data on urban areas. The API used gives scores for housing, cost of living, startups, venture capital, travel connectivity, commute, business freedom, safety, healthcare, education, environmental quality, economy, taxation and internet access, as well as overall summary of quality of life. When a user imputs a city/town name in the search field, it's connected to the data about the urban area the city/town belongs to and displayed with a graph. 


## Wireframes

![design](https://i.imgur.com/HDn6edP.png)
![prototype](https://i.imgur.com/lUgZurv.png)



## Component Hierarchy

- App.js
  - Home.js
    - Header.js
    - Main.js
    - Footer.js
  - CityData.js
    - SearchResults.js
  




## API

The API I'm using is Teleport API
Documentation: [Teleport API Documentation](https://developers.teleport.org/api/)


## MVP

- interactive React app built using create react app
- have React Router installed via NPM
- 7 rendered components
- organized React file structure
- use Axios to consume data from a third party API and render that data in the app
- use React Hooks
- only use React for DOM manipulation
- display the data with a graph, where each column represents a particular quality of life category
- styled with global style sheets
- flexbox
- responsive design on 3 screen sizes (desktop, mobile, and tablet) using 2 media queries
- deployed via Surge
- utilize Jest to create 15 tests



## Post-MVP 

- use Vis charts library to handle the graph part of the project


## SWOT Analysis

- Strengths: good grasp of class and function components, props and states, API calls within React, Router, flexbox, Teleport API documentation is well-written
- Weaknesses: Jest, conditional rendering, no experience with rendering charts or graphs
- Opportunities: refresh and practice testing with Jest, learn Vis
- Threats: API not behaving as expected