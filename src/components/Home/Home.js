import React, { Component } from 'react';
import Background from "../../img/bground.jpeg";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class Home extends Component {


  render() {
    return (
      <div style={{ backgroundImage: "url(" + Background + ")", backgroundSize: "cover", height: "100vh" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  };
}

export default Home