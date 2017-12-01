import React from 'react';
import { Paper } from 'material-ui';
import PropTypes from 'prop-types';

import { ProfilePic } from './index';
import './styles.css';

const style = {
  display: 'flex', 
  padding: '50px 30px', 
  flexWrap: 'wrap'
}

const ProfileCard = ({userSelect, itemsShared, itemsBorrowed}) => (
  <div className="profileHeader">
    <Paper zDepth={1} style={style}>

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
);

ProfileCard.propTypes = {
  userSelect: PropTypes.object.isRequired,
  itemsShared: PropTypes.number.isRequired,
  itemsBorrowed: PropTypes.number.isRequired
}

export default ProfileCard;