import React, { Component } from 'react'
import { ButtonLogOut, ButtonMyProfile } from '../../components/common'

class Rightside extends Component {
  render() {
    return (
      <div>
        <ButtonMyProfile />
        <ButtonLogOut />
      </div>
    )
  }
}

export default Rightside