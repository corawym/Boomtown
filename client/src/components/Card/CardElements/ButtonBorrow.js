import React, { Component } from 'react'

import { RaisedButton,CardActions } from 'material-ui'

class ButtonBorrow extends Component {
  render() {
    return (
      <CardActions style={{ padding: '16px' }}>
        <RaisedButton
          label="Borrow"
          secondary
        />
      </CardActions>
    )
  }
}

export default ButtonBorrow