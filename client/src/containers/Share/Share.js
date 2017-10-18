import React, { Component } from 'react'
import { Leftside, Rightside } from './index'

import './styles.css'

class Share extends Component {
  state = {  }
  render() {
    return (
      <div className="shareContainer">
        <Leftside />
        <Rightside />
      </div>
    )
  }
}

export default Share