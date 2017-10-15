import React, { Component } from 'react'
import Gravatar from 'react-gravatar'

class ProfilePic extends Component {

  render() {
    const {userSelect} = this.props

    return (
      <Gravatar 
        email={userSelect.email} 
        style={{borderRadius:'50%', display: 'flex', justifyContent: 'center'}}
      />
    )
  }
}

export default ProfilePic