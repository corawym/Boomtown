import React from 'react'

import { RaisedButton,CardActions } from 'material-ui'

const ButtonBorrow = () => (
  <CardActions style={{ padding: '16px' }} className='buttonBorrow' >
    <RaisedButton
      label="Borrow"
      secondary
    />
  </CardActions>

);

export default ButtonBorrow;
