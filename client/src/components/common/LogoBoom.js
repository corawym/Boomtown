import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/boomtown-logo.svg'

class LogoBoom extends Component {
  render() {
    return (
      <div className="logoWrapper">
        <Link to={"/"}>
          <img src={logo} alt="Boomtown Logo" className="logoSize"/>
        </Link>
      </div>
    )
  }
}

export default LogoBoom