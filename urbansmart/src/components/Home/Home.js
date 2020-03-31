import React, { PureComponent } from 'react';
import Background from "../../img/bground.jpg";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class Home extends PureComponent {


  render() {
    return (
      <div style={{ backgroundImage: "url(" + Background + ")", backgroundSize: "cover", height: "100vh" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Home