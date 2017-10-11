import React, { Component } from 'react'

import { ProfileCard } from '../../components/Profile'

class UserInfo extends Component {

  render() {

    const {userSelect, itemsShared, itemsBorrowed} = this.props
    console.log(userSelect);
    return (
      <div>
          {userSelect.map((user)=> <ProfileCard key={user.id} userSelect={user} itemsShared={itemsShared} itemsBorrowed={itemsBorrowed}/>)}
      </div>
    )
  }
}

export default UserInfo