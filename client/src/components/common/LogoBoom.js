import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/boomtown-logo.svg'

const LogoBoom  = () => (
  <div className="logoWrapper">
    <Link to={"/"}>
      <img src={logo} alt="Boomtown Logo" className="logoSize"/>
    </Link>
  </div>
);

export default LogoBoom;