import React, { Component } from 'react'
import { Paper } from 'material-ui'

import { ProfilePic } from './index'

import './styles.css'

class ProfileCard extends Component {
  state = {  }
  render() {
    return (
      <div className="profileHeader">
        <Paper zDepth={1} style={{display: 'flex', padding: '30px'}}>

          <div className="userPersonalInfo">
            <h1>user.fullName</h1>
            <p className="subtitle">user.bio</p>
          </div>

          <div className="userOtherInfo">
            <div className="userStat">
              <h2>#</h2>
              <h3 className="subtitle">Items shared</h3>
              <h2>#</h2>
              <h3 className="subtitle">Items borrowed</h3>
            </div>
            <ProfilePic />
          </div>

        </Paper>
      </div>
    )
  }
}

export default ProfileCard