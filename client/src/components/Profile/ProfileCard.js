import React, { Component } from 'react';
import { Paper } from 'material-ui';

import { ProfilePic } from './index';

import './styles.css';

class ProfileCard extends Component {
  render() {

    const {userSelect, itemsShared, itemsBorrowed} = this.props

    return (
      <div className="profileHeader">
        <Paper zDepth={1} style={{display: 'flex', padding: '50px 30px'}}>

          <div className="userPersonalInfo">
            <h1>{userSelect.fullname}</h1>
            <p className="subtitle">{userSelect.bio}</p>
          </div>

          <div className="userOtherInfo">
            <div className="userStat">
              <h2>{itemsShared}</h2>
              <h3 className="subtitle">Items shared</h3>
              <h2>{itemsBorrowed}</h2>
              <h3 className="subtitle">Items borrowed</h3>
            </div>
            <ProfilePic userSelect={userSelect}/>
          </div>

        </Paper>
      </div>
    )
  }
}

export default ProfileCard