import React from 'react';
import { RaisedButton } from 'material-ui';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ButtonMyProfile = ({userID}) => (
  <Link to={`/profile/${userID}`}> 
    <RaisedButton
      label="My Profile"
      primary
    />
  </Link>
);

ButtonMyProfile.propTypes = {
  userID: PropTypes.string.isRequired,
}

export default ButtonMyProfile;