import React, { Component } from 'react'
import Gravatar from 'react-gravatar'
import PropTypes from 'prop-types'

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

ProfilePic.propTypes = {
  userSelect: PropTypes.object.isRequired
}

export default ProfilePic