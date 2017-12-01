import React from 'react'
import PropTypes from 'prop-types'
import { ButtonLogOut, ButtonMyProfile } from '../../components/common'

const Rightside = ({userID, logOut}) => (
  <div className="headerRightWrapper">
    <ButtonMyProfile userID={userID}/>
    <ButtonLogOut logOut={logOut}/>
  </div>
)


Rightside.propTypes = {
  userID: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default Rightside;