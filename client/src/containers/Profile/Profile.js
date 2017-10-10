import React, { Component } from 'react'

import { UserInfo, UserItems } from './index'

import './styles.css'

class Profile extends Component {
  state = {  }
  
  render() {
    return (
      <div>
        <UserInfo />
        <UserItems />
      </div>
    )
  }
}

export default Profile