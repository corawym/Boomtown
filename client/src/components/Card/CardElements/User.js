import React from 'react'
import { CardHeader } from 'material-ui'
import PropTypes from 'prop-types'
import Gravatar from 'react-gravatar'
import moment from 'moment'


const User = ({user, date}) => {
  const dateDiff = moment(date).fromNow()
  return (
    <CardHeader
      title={user.fullname}
      subtitle={dateDiff}
      avatar={<Gravatar email={user.email} 
      style={{borderRadius:'50%'}}
      />}
      textStyle={{paddingRight:'20px'}}
    />
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}

export default User