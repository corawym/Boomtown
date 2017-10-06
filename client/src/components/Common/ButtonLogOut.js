import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

class ButtonLogOut extends Component {
  render() {
    return (
      <RaisedButton
        label="Logout"
        secondary
        style={{marginLeft: '12px'}}
      />
    )
  }
}

export default ButtonLogOut