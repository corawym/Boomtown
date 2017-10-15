import React, { Component } from 'react'

import { ProfileCard } from '../../components/Profile'

class UserInfo extends Component {

  render() {

    const {userSelect, itemsShared, itemsBorrowed} = this.props

    return (
      <div>
          <ProfileCard key={userSelect.id} userSelect={userSelect} itemsShared={itemsShared} itemsBorrowed={itemsBorrowed}/>
      </div>
    )
  }
}

export default UserInfo