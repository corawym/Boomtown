import React, { Component } from 'react'
import { Avatar } from 'material-ui'
import Gravatar from 'react-gravatar'

class ProfilePic extends Component {
  state = {  }
  render() {
    return (
      <div>
      <Avatar size={180}/>
      </div>
    )
  }
}

export default ProfilePic