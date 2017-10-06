import React, { Component } from 'react'

import { LogoBoom, FilterMenu } from '../../components/common'

class Leftside extends Component {
  state = {  }
  render() {
    return (
      <div className="headerLeftWrapper">
        <LogoBoom />
        <FilterMenu />
      </div>
    )
  }
}

export default Leftside;