import React from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

const ProfilePic = ({userSelect}) => (
  <Gravatar 
    email={userSelect.email} 
    size={180}
    style={{borderRadius:'50%', display: 'flex', justifyContent: 'center'}}
  />
);

ProfilePic.propTypes = {
  userSelect: PropTypes.object.isRequired
}

export default ProfilePic;