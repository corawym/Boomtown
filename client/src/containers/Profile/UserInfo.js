import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

UserInfo.propTypes = {
  userSelect: PropTypes.object.isRequired,
  itemsShared: PropTypes.number.isRequired,
  itemsBorrowed: PropTypes.number.isRequired
}

export default UserInfo