import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

class ButtonMyProfile extends Component {
  render() {
    return (
      <Link to={`/profile/${this.props.userID}`}> 
      <RaisedButton
        label="My Profile"
        primary
      />
      </Link>
    )
  }
}

export default ButtonMyProfile