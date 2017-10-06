import React, { Component } from 'react'

import logo from '../../images/boomtown-logo.svg'

class LogoHeader extends Component {
  state = {  }
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} alt="Boomtown Logo" />
        </a>
      </div>
    );
  }
}

export default LogoHeader;