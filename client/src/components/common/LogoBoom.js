import React, { Component } from 'react'

import logo from '../../images/boomtown-logo.svg'

class LogoBoom extends Component {
  render() {
    return (
      <div className="logoWrapper">
        <a href="/">
          <img src={logo} alt="Boomtown Logo" className="logoSize"/>
        </a>
      </div>
    )
  }
}

export default LogoBoom;