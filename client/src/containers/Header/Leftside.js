import React, { Component } from 'react'

import { LogoHeader, FilterMenu } from '../../components/common'

class Leftside extends Component {
  state = {  }
  render() {
    return (
      <div>
        <LogoHeader />
        <FilterMenu />
      </div>
    );
  }
}

export default Leftside;