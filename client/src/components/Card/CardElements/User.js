import React, { Component } from 'react'
import { CardHeader } from 'material-ui'
import Gravatar from 'react-gravatar'

class User extends Component {
  render() {
    const {user, date} = this.props;
    return (
      <CardHeader
        title={user.fullname}
        subtitle={date}
        avatar={<Gravatar email={user.email} 
        style={{borderRadius:'50%'}}
        />}
        textStyle={{paddingRight:'20px'}}
      />
    )
  }
}

export default User