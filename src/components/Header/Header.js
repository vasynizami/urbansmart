import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './Header.css'
class Header extends PureComponent {

  render() {
    return (
      <div className="Header">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/citydata">
          <p>city stats</p>
        </Link>
      </div>
    )
  }
}

export default Header