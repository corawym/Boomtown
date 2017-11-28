import React, { Component } from 'react'
import { ButtonLogOut, ButtonMyProfile } from '../../components/common'

class Rightside extends Component {
  render() {
    return (
      <div className="headerRightWrapper">
        <ButtonMyProfile />
        <ButtonLogOut logOut={this.props.logOut}/>
      </div>
    )
  }
}

export default Rightside