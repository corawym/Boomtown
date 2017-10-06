import React, { Component } from 'react'
import { CardHeader } from 'material-ui'

class User extends Component {
  state = {  }
  render() {
    return (
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      />
    )
  }
}

export default User