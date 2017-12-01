import React from 'react'
// import PropTypes from 'prop-types'
import { RaisedButton } from 'material-ui'

const ButtonLogOut = ({logOut}) => (
  <RaisedButton
    label="Logout"
    secondary
    style={{marginLeft: '12px'}}
    onClick={logOut}
  />
);

export default ButtonLogOut;